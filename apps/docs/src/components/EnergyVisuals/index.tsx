import React, {useId, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {strings, type Locale} from './strings';
import {capacityLimits, compareChargingDemand, daySnapshots, calculateDayFlow} from './powerModel.mjs';

export type EnergyVisualProps = {locale?: Locale | string};

function useVisual(locale?: string) {
 const {i18n} = useDocusaurusContext();
 const id = `energy-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
 const scenes = useBaseUrl('/images/scenes/');
 return {id, scenes, t: strings[(locale ?? i18n.currentLocale) === 'nl' ? 'nl' : 'en']};
}

function FigureHeader({eyebrow, model}: {eyebrow:string; model:string}) {
 return <div className={styles.header}><span className={styles.eyebrow}><i aria-hidden="true"/>{eyebrow}</span><span className={styles.model}>{model}</span></div>;
}

const comparisonScaleKw = capacityLimits.maxBuildingKw + capacityLimits.requestedChargingKw;
const limitPosition = `${100 * capacityLimits.siteKw / comparisonScaleKw}%`;

type DemandRowProps = {
  label: string;
  description: string;
  buildingKw: number;
  chargingKw: number;
};

function DemandRow({label, description, buildingKw, chargingKw}: DemandRowProps) {
  const totalKw = buildingKw + chargingKw;
  return (
    <div className={styles.demandRow}>
      <div className={styles.chartTotal}>
        <span>{label}</span><strong>{totalKw} kW</strong>
      </div>
      <div className={styles.demandTrack} role="img" aria-label={`${label}. ${description}.`}>
        <span className={styles.buildingSegment} style={{width: `${100 * buildingKw / comparisonScaleKw}%`}} />
        <span className={styles.chargingSegment} style={{width: `${100 * chargingKw / comparisonScaleKw}%`}} />
        <i className={styles.limitMarker} style={{left: limitPosition}} />
      </div>
    </div>
  );
}

export function CapacityExplorer({locale}: EnergyVisualProps = {}) {
  const {id, t} = useVisual(locale);
  const c = t.capacity;
  const [buildingKw, setBuildingKw] = useState(45);
  const allocation = compareChargingDemand(buildingKw);

  return (
    <figure className={styles.visual} aria-labelledby={`${id}-caption`}>
      <FigureHeader eyebrow={c.eyebrow} model={t.model} />
      <div className={styles.capacityLayout}>
        <div className={styles.capacityControl}>
          <label htmlFor={`${id}-demand`}>{c.label}</label>
          <div className={styles.capacityValue}>
            <output htmlFor={`${id}-demand`}>{buildingKw}</output><span>kW</span>
          </div>
          <input id={`${id}-demand`} type="range" min={capacityLimits.minBuildingKw}
            max={capacityLimits.maxBuildingKw} step={1} value={buildingKw}
            onChange={event => setBuildingKw(Number(event.target.value))}
            aria-valuetext={c.value(buildingKw, allocation.chargingKw)} aria-describedby={`${id}-help`} />
          <div className={styles.rangeEnds}><span>{c.quiet}</span><span>{c.busy}</span></div>
          <p id={`${id}-help`} className={styles.controlHelp}>{c.help}</p>
          <div className={styles.equation} aria-hidden="true">
            <span>{capacityLimits.siteKw}<small>{c.connection}</small></span><b>−</b>
            <span>{buildingKw}<small>{c.building}</small></span><b>=</b>
            <span>{allocation.availableKw}<small>{c.available}</small></span>
          </div>
        </div>
        <div className={styles.capacityChart}>
          <div className={styles.comparisonAxis} aria-hidden="true">
            <span>0</span><span style={{left: limitPosition}}>{c.limit}</span><span>{comparisonScaleKw} kW</span>
          </div>
          <DemandRow label={c.requested} buildingKw={buildingKw} chargingKw={capacityLimits.requestedChargingKw}
            description={c.description(buildingKw, capacityLimits.requestedChargingKw)} />
          <DemandRow label={c.allocated} buildingKw={buildingKw} chargingKw={allocation.chargingKw}
            description={c.description(buildingKw, allocation.chargingKw)} />
          <dl className={styles.capacityMetrics}>
            <div><dt><i className={styles.buildingDot} aria-hidden="true"/>{c.buildingLabel}</dt>
              <dd><strong>{buildingKw}</strong> kW</dd></div>
            <div><dt><i className={styles.chargingDot} aria-hidden="true"/>{c.charging}</dt>
              <dd><strong>{allocation.chargingKw}</strong> kW</dd></div>
          </dl>
          <div className={styles.chartSpare}><span>{c.reduced}</span><strong>{allocation.reductionKw} kW</strong></div>
          <div className={styles.chartSpare}><span>{c.headroom}</span><span>{allocation.headroomKw} kW</span></div>
        </div>
      </div>
      <p className={styles.result} role="status" aria-atomic="true">
        {c.result(allocation.chargingKw, allocation.reductionKw, allocation.headroomKw)}
      </p>
      <figcaption id={`${id}-caption`} className={styles.caption}>
        <strong>{c.title}</strong><p>{c.note}</p>
      </figcaption>
    </figure>
  );
}

type FlowSegment = {kind: string; label: string; kw: number};

function FlowColumn({title, total, segments}: {title: string; total: number; segments: FlowSegment[]}) {
  return (
    <div className={styles.flowColumn}>
      <div className={styles.flowHeading}><span>{title}</span><strong>{total} kW</strong></div>
      <div className={styles.flowTrack} aria-hidden="true">
        {segments.map(segment => (
          <span key={segment.kind} data-flow={segment.kind} style={{width: `${100 * segment.kw / 80}%`}} />
        ))}
      </div>
      <dl className={styles.flowLegend}>
        {segments.filter(segment => segment.kw > 0).map(segment => (
          <div key={segment.kind}>
            <dt><i data-flow={segment.kind} aria-hidden="true" />{segment.label}</dt>
            <dd>{segment.kw} kW</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function DayFlow({locale}: EnergyVisualProps = {}) {
  const {id, t, scenes} = useVisual(locale);
  const c = t.day;
  const [period, setPeriod] = useState(1);
  const [storageEnabled, setStorageEnabled] = useState(true);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const snapshot = daySnapshots[period];
  const flow = calculateDayFlow(snapshot, storageEnabled);
  const storageKw = flow.batteryChargeKw + flow.batterySupplyKw;
  const supply = [
    {kind: 'solar', label: c.solar, kw: snapshot.solarKw},
    {kind: 'grid', label: c.gridImport, kw: flow.gridImportKw},
    {kind: 'storage', label: c.batterySupply, kw: flow.batterySupplyKw},
  ];
  const use = [
    {kind: 'building', label: c.building, kw: snapshot.buildingKw},
    {kind: 'vehicles', label: c.vehicles, kw: snapshot.vehicleKw},
    {kind: 'storage', label: c.batteryCharge, kw: flow.batteryChargeKw},
    {kind: 'grid', label: c.gridExport, kw: flow.gridExportKw},
  ];

  function moveTab(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const count = daySnapshots.length;
    const nextForKey: Record<string, number> = {
      ArrowRight: (index + 1) % count,
      ArrowLeft: (index + count - 1) % count,
      Home: 0,
      End: count - 1,
    };
    const next = nextForKey[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setPeriod(next);
    tabs.current[next]?.focus();
  }

  return (
    <figure className={styles.visual} aria-labelledby={`${id}-caption`}>
      <FigureHeader eyebrow={c.eyebrow} model={t.model} />
      <div className={styles.dayTabs} role="tablist" aria-label={c.tabsLabel}>
        {daySnapshots.map((item, index) => (
          <button key={item.time} type="button" role="tab" id={`${id}-tab-${index}`}
            ref={element => { tabs.current[index] = element; }} aria-controls={`${id}-panel`}
            aria-selected={period === index} tabIndex={period === index ? 0 : -1}
            onClick={() => setPeriod(index)} onKeyDown={event => moveTab(event, index)}>
            <span>{item.time}</span>{c.periodLabels[index]}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${period}`} tabIndex={0}>
        <div className={styles.campusFrame}>
          {daySnapshots.map((item, index) => (
            <img key={item.image} className={styles.campusImage} data-active={period === index}
              src={`${scenes}campus-${item.image}-960.webp`}
              srcSet={`${scenes}campus-${item.image}-640.webp 640w, ${scenes}campus-${item.image}-960.webp 960w, ${scenes}campus-${item.image}-1536.webp 1536w`}
              sizes="(max-width: 700px) 100vw, 800px" alt={period === index ? `${c.imageAlt} ${item.time}.` : ''}
              aria-hidden={period !== index} loading="lazy" decoding="async" width={1536} height={1024} />
          ))}
        </div>
        <div className={styles.balance}>
          <label className={styles.storageControl}>
            <input type="checkbox" checked={storageEnabled} onChange={event => setStorageEnabled(event.target.checked)} />
            {c.storageEnabled}
          </label>
          <div className={styles.balanceColumns}>
            <FlowColumn title={c.supply} total={flow.supplyKw} segments={supply} />
            <span className={styles.balanceArrow} aria-hidden="true">→</span>
            <FlowColumn title={c.use} total={flow.useKw} segments={use} />
          </div>
          <p className={styles.balanceScale}>{c.scale}</p>
        </div>
        <div className={styles.balanceExplanation} role="status" aria-atomic="true">
          <p>{c.descriptions[period][Number(storageEnabled)]}</p>
          {storageKw > 0 && <p>{c.quarterHour(storageKw, flow.batteryChargeKw > 0)}</p>}
        </div>
      </div>
      <figcaption id={`${id}-caption`} className={styles.caption}>
        <strong>{c.title}</strong><p>{c.note}</p>
      </figcaption>
    </figure>
  );
}

export function ControlArchitecture({locale}: EnergyVisualProps = {}) {
 const {id,t,scenes}=useVisual(locale);
 const c=t.architecture;
 return <figure className={styles.visual} aria-labelledby={`${id}-caption`}>
  <FigureHeader eyebrow={c.eyebrow} model={c.model}/>
  <div className={styles.architectureContext}>
   <div className={styles.contextImage}><img src={`${scenes}campus-midday-960.webp`} srcSet={`${scenes}campus-midday-640.webp 640w, ${scenes}campus-midday-960.webp 960w`} sizes="(max-width: 700px) 100vw, 380px" width={960} height={640} alt={c.imageAlt} loading="lazy" decoding="async"/></div>
   <div className={styles.contextCopy}><span>{c.contextLabel}</span><h4>{c.contextTitle}</h4><p>{c.contextText}</p></div>
  </div>
  <div className={styles.architectureLayers}>
   {c.layerTitles.map((title,layer)=><section className={styles.architectureLayer} data-layer={layer} aria-labelledby={`${id}-layer-${layer}`} key={title}>
    <div className={styles.layerHeading}><h4 id={`${id}-layer-${layer}`}>{title}</h4><p>{c.layerDescriptions[layer]}</p></div>
    <div className={styles.layerFlow}>
     {c.nodes[layer].map(([label,note],index)=><React.Fragment key={label}>
      {index>0 && <span className={styles.layerArrow} aria-hidden="true">→</span>}
      <div className={`${styles.layerNode}${layer===1&&index===1?` ${styles.emsNode}`:''}`}><strong>{label}</strong><small>{note}</small></div>
     </React.Fragment>)}
    </div>
   </section>)}
  </div>
  <figcaption id={`${id}-caption`} className={styles.caption}><strong>{c.title}</strong><p>{c.note}</p></figcaption>
 </figure>;
}
