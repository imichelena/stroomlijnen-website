# Energy visuals

Reusable React visual explanations for Docusaurus MDX. Components use the current Docusaurus locale by default and accept an explicit `locale="nl"` or `locale="en"` override.

```mdx
import {CapacityExplorer, DayFlow, ControlArchitecture} from '@site/src/components/EnergyVisuals';

<CapacityExplorer />
<DayFlow locale="nl" />
<ControlArchitecture />
```

- **CapacityExplorer** compares requested power with allocated power on a fixed 0–160 kW scale. Both bars show the same configured 100 kW limit. The slider adjusts building demand from 10 to 90 kW while the vehicles request 70 kW. The localized status explains how much charging power is available and why the charging time changes.
- **DayFlow** shows three power snapshots with the same campus render under morning, midday and evening light. Readers select a time with the tabs and toggle battery support. Supply and allocation share an 80 kW scale. At midday, a 32 kW solar surplus goes into storage or back to the grid. In the evening, 24 kW from storage reduces grid import from 72 to 48 kW. The optional 15-minute interpretation is conditional on the selected power staying constant. The model assumes sufficient grid capacity, battery headroom and state of charge. Transitions respond to the reader’s controls and respect reduced-motion settings.
- **ControlArchitecture** uses a rendered campus for context and three compact, semantic flow bands: electrical power, local control and platform data. It does not imply direct cloud control of chargers. On narrow screens, the cards stack vertically and their arrows follow the reading direction.

Images live at `static/images/scenes/campus-{morning,midday,evening}-{640,960,1536}.webp`. Image URLs use Docusaurus `useBaseUrl`; no remote image service is required. React `useId` keeps labels and controls unique across multiple instances and server rendering. Styling is scoped through a CSS module, including dark mode. Detailed protocol diagrams in `ArchitectureDiagram` are separate and unchanged.

Validate both locales and light/dark themes in the parent documentation build. The associated article remains the source for installation-specific boundaries.

Run `node --test tests/energy-visuals.test.mjs` to check conservation across all six storage scenarios and the full charging-demand slider range.
