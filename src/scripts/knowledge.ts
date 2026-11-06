type DayPeriod = { key: string; time: string; heading: string; text: string };

document.querySelectorAll<HTMLElement>('[data-capacity]').forEach(explorer => {
 const en = explorer.dataset.lang === 'en';
 const slider = explorer.querySelector<HTMLInputElement>('input[type="range"]');
 const setText = (selector: string, value: string) => { const element = explorer.querySelector(selector); if (element) element.textContent = value; };
 const setWidth = (selector: string, value: number) => { const element = explorer.querySelector<HTMLElement>(selector); if (element) element.style.width = `${value}%`; };
 const updateCapacity = () => {
  if (!slider) return;
  const building = Number(slider.value);
  const available = 100 - building;
  const charging = Math.min(70, available);
  const total = building + charging;
  const unused = 100 - total;
  const reduction = 70 - charging;
  setText('[data-building-output]', String(building));
  const equationBuilding = explorer.querySelector('[data-equation-building]');
  const equationSpace = explorer.querySelector('[data-equation-space]');
  if (equationBuilding?.firstChild) equationBuilding.firstChild.textContent = `${building} `;
  if (equationSpace?.firstChild) equationSpace.firstChild.textContent = `${available} `;
  setWidth('[data-building-bar]', building);
  setWidth('[data-charging-bar]', charging);
  setWidth('[data-remaining-bar]', unused);
  setText('[data-building-label]', String(building));
  setText('[data-charging-label]', String(charging));
  setText('[data-remaining-label]', String(unused));
  setText('[data-charge-detail]', en ? `${charging} of 70 kW requested for charging` : `${charging} van 70 kW gevraagd voor laden`);
  setText('[data-total]', `${total} kW`);
  const result = en
   ? reduction > 0
    ? `The building needs ${building} kW. There is ${charging} kW for charging. Charging temporarily uses ${reduction} kW less power, so delivering the same energy takes longer.`
    : `The building needs ${building} kW. The full charging request of 70 kW fits, leaving ${unused} kW unused.`
   : reduction > 0
    ? `Het gebouw vraagt ${building} kW. Er is ${charging} kW voor laden. Het laden gaat tijdelijk met ${reduction} kW minder vermogen; dezelfde hoeveelheid energie vraagt daardoor meer tijd.`
    : `Het gebouw vraagt ${building} kW. De volledige laadvraag van 70 kW past; er blijft ${unused} kW ruimte over.`;
  setText('[data-capacity-result]', result);
  setText('[data-capacity-desc]', en
   ? `The building uses ${building} kW. Charging receives ${charging} of the requested 70 kW. Total demand is ${total} kW, within the configured 100 kW power limit. ${unused} kW is unused.`
   : `Het gebouw gebruikt ${building} kW. Laden krijgt ${charging} van de gevraagde 70 kW. De totale afname is ${total} kW, binnen het ingestelde vermogensplafond van 100 kW. ${unused} kW blijft onbenut.`);
  slider.setAttribute('aria-valuetext', en
   ? `${building} kilowatts for the building; ${charging} kilowatts allocated to charging; ${unused} kilowatts unused`
   : `${building} kilowatt gebouwverbruik; ${charging} kilowatt toegewezen aan laden; ${unused} kilowatt onbenut`);
 };
 slider?.addEventListener('input', updateCapacity);
 updateCapacity();
});

document.querySelectorAll<HTMLElement>('[data-day-flow]').forEach(dayExplorer => {
 const copyElement = dayExplorer.querySelector('[data-day-copy-set]');
 if (!copyElement?.textContent) return;
 const periods = JSON.parse(copyElement.textContent) as DayPeriod[];
 const tabs = Array.from(dayExplorer.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
 const activate = (tab: HTMLButtonElement) => {
  const period = tab.dataset.period;
  const state = periods.find(item => item.key === period);
  if (!state) return;
  dayExplorer.dataset.period = state.key;
  tabs.forEach(item => { item.setAttribute('aria-selected', String(item === tab)); item.tabIndex = item === tab ? 0 : -1; });
  dayExplorer.querySelector('[role="tabpanel"]')?.setAttribute('aria-labelledby', tab.id);
  dayExplorer.querySelectorAll<HTMLElement>('[data-day-picture]').forEach(picture => picture.setAttribute('aria-hidden', String(picture.dataset.dayPicture !== state.key)));
  dayExplorer.querySelectorAll<HTMLElement>('[data-period-route]').forEach(route => { route.hidden = route.dataset.periodRoute !== state.key; });
  const replacements = { '[data-day-time]': state.time, '[data-day-heading]': state.heading, '[data-day-copy]': state.text };
  Object.entries(replacements).forEach(([selector, value]) => { const element = dayExplorer.querySelector(selector); if (element) element.textContent = value; });
 };
 tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activate(tab));
  tab.addEventListener('keydown', event => {
   let next = index;
   if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
   else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
   else if (event.key === 'Home') next = 0;
   else if (event.key === 'End') next = tabs.length - 1;
   else return;
   event.preventDefault();
   activate(tabs[next]);
   tabs[next].focus();
  });
 });
});

const motionToggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
motionToggle?.addEventListener('click', () => {
 const en = document.documentElement.lang.startsWith('en');
 const paused = document.body.classList.toggle('motion-paused');
 motionToggle.setAttribute('aria-pressed', String(paused));
 motionToggle.innerHTML = paused
  ? `${en ? 'Play animation' : 'Animatie afspelen'} <span aria-hidden="true">▷</span>`
  : `${en ? 'Pause animation' : 'Animatie pauzeren'} <span aria-hidden="true">Ⅱ</span>`;
});
