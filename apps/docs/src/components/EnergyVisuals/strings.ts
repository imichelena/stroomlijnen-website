export type Locale = 'nl' | 'en';

export const strings = {
 nl: {
  model: 'Rekenvoorbeeld',
  capacity: {
   eyebrow: 'Laadvermogen verdelen', title: 'Wat gebeurt er als het gebouw meer stroom vraagt?',
   label: 'Vermogen van het gebouw', quiet: 'Rustig moment', busy: 'Drukke werkdag',
   help: 'Verhoog het gebouwverbruik. Zodra de gezamenlijke vraag boven 100 kW komt, verlaagt de regelaar het laadvermogen.',
   connection: 'kW plafond', building: 'kW gebouw', available: 'kW ruimte voor laden',
   requested: 'Gevraagd', allocated: 'Na regeling', limit: 'Plafond 100 kW',
   buildingLabel: 'Gebouw', charging: 'Laden', headroom: 'Ruimte onder het plafond', reduced: 'Laadvermogen begrensd met',
   value: (building: number, charging: number) => `${building} kW gebouwverbruik en ${charging} kW voor laden`,
   description: (building: number, charging: number) => `${building} kW voor het gebouw en ${charging} kW voor de voertuigen`,
   result: (charging: number, reduction: number, headroom: number) => reduction > 0
    ? `De voertuigen vragen 70 kW en krijgen ${charging} kW. Bij deze verdeling duurt het langer om dezelfde hoeveelheid energie te laden.`
    : `De volledige laadvraag van 70 kW past. Onder het ingestelde plafond blijft ${headroom} kW over.`,
   note: 'Het voorbeeld gebruikt een ingesteld vermogensplafond van 100 kW en een vaste laadvraag van 70 kW. In de praktijk bepalen onder andere de fysieke aansluiting, het contract, de krapste fase en veiligheidsmarges welk plafond past.'
  },
  day: {
   eyebrow: 'Batterijopslag', title: 'Vergelijk drie momenten met en zonder inzet van de batterij.',
   tabsLabel: 'Moment op de werkdag', storageEnabled: 'Batterij inzetten',
   supply: 'Geleverd', use: 'Verdeeld', gridImport: 'Van het net', gridExport: 'Naar het net',
   solar: 'Zonnedak', building: 'Gebouw', vehicles: 'Voertuigen',
   batteryCharge: 'Naar de batterij', batterySupply: 'Uit de batterij', scale: 'Beide balken lopen van 0 tot 80 kW.',
   imageAlt: 'Bedrijfslocatie met een zonnedak, twee afzonderlijke ESS 261-batterijkasten, een truck aan de DC-snellader en twee voertuigen aan AC-laders.',
   periodLabels: ['Opstarten', 'Zon benutten', 'Avondpiek'],
   descriptions: [
    ['Het zonnedak levert 8 kW van de gevraagde 48 kW. Het net vult de overige 40 kW aan.', 'De batterij staat klaar voor de avond. Het zonnedak levert 8 kW en het net 40 kW aan het gebouw en de voertuigen.'],
    ['Gebouw en voertuigen gebruiken samen 48 kW van de 80 kW zonnestroom. De overige 32 kW gaat terug naar het net.', 'Na het voeden van het gebouw en de voertuigen blijft 32 kW zonnestroom over. Dat vermogen gaat naar de batterij.'],
    ['Het zonnedak levert op dit moment 0 kW. Het net levert alle 72 kW voor het gebouw en de voertuigen.', 'Het gebouw en de voertuigen vragen samen 72 kW. De batterij levert 24 kW. Daardoor daalt de netafname van 72 naar 48 kW.']
   ],
   quarterHour: (power: number, charging: boolean) => charging
    ? `Blijft dit laadvermogen een kwartier gelijk, dan neemt de batterij ${power / 4} kWh op.`
    : `Blijft dit ontlaadvermogen een kwartier gelijk, dan levert de batterij ${power / 4} kWh.`,
   note: 'De waarden zijn momentopnames in kW. Het voorbeeld veronderstelt voldoende ruimte voor afname en teruglevering, en voldoende laadruimte en lading in de batterij. De kwartierberekening laat omzettingsverliezen buiten beschouwing.'
  },
  architecture: {
   model:'Functioneel schema',eyebrow:'Meten & besturen',title:'De kabel levert stroom. Het EMS verdeelt het laadbudget.',
   power:'Elektrisch vermogen',control:'Meting / besturing',data:'Gegevens voor beheer',
   scroll:'Veeg horizontaal om het volledige schema te bekijken.',region:'Schema van elektrisch vermogen, lokale besturing en platformgegevens; horizontaal te verkennen',
   svgTitle:'Elektrisch vermogen en lokale besturing hebben een eigen route.',
   description:'Elektrisch vermogen loopt van het net via de meter en verdeler naar gebouw en laders. Het lokale EMS ontvangt metingen en begrenst het laadvermogen. Gegevens gaan via de lokale netwerkgrens naar het platform voor inzicht en beheer. Dit schema toont geen directe besturing van laders vanuit de cloud.',
   local:'OP UW LOCATIE',platform:'PLATFORM',meter:'Net + meter',distribution:'Verdeler',ems:'Lokaal EMS',emsSub:'Meten → sturen',building:'Gebouw',chargers:'Laders',overview:'Inzicht & beheer',boundary:'Netwerkgrens',measurement:'Metingen',budget:'Laadbudget',
   platformLines:['Sessies en locatiegegevens','maken gebruik zichtbaar.','De regeling blijft lokaal.'],
   steps:[
    ['De meter meet.','Actuele metingen maken de beschikbare ruimte zichtbaar.'],
    ['Het EMS verdeelt.','De lokale besturing past het laadbudget aan de locatiegrenzen aan.'],
    ['Het platform toont.','Sessies en locatiegegevens ondersteunen het beheer.']
   ],
   imageAlt:'De Stroomlijnen-regelaar op de UniPi Edge E410 verbindt de meter, zonne-omvormer en gebouwinstallaties met de 120 kW DC-snellader, de ESS 261 en het klantportaal.',
   contextLabel:'Eén locatie, drie verschillende routes',contextTitle:'Wat levert stroom? Wat geeft een opdracht?',
   contextText:'De regelaar leest de meter en stemt het laden en de batterij af op de opwek en het gebouwverbruik. Het portaal toont de gegevens. De regeling werkt op locatie.',
   layerTitles:['Elektrisch vermogen','Lokale besturing','Gegevens voor beheer'],
   layerDescriptions:['Stroom loopt via de elektrische installatie naar de verbruikers.','Metingen worden vertaald naar een lokaal laadbudget.','Locatiegegevens gaan via de netwerkgrens naar het platform.'],
   nodes:[
    [['Net + meter','Aanvoer en meting'],['Verdeler','Elektrische installatie'],['Gebouw + laders','Verbruik op locatie']],
    [['Metingen','Actuele situatie'],['Lokaal EMS','Berekent het laadbudget'],['Laadbudget','Laders passen zich aan']],
    [['Locatiegegevens','Sessies en gebruik'],['Netwerkgrens','Gescheiden communicatie'],['Inzicht & beheer','Overzicht in het platform']]
   ],
   note:'Illustratieve locatie met een functioneel schema, geen bedradings- of netwerktekening. Alleen de besproken routes zijn getoond; zon en opslag zijn niet uitgewerkt. De platformroute toont gegevens voor beheer, geen directe besturing van laders vanuit de cloud. Protocolpaden, autorisatie en storingsgedrag verschillen per installatie.'
  }
 },
 en: {
  model: 'Worked example',
  capacity: {
   eyebrow: 'Allocating charging power', title: 'What changes when the building needs more power?',
   label: 'Building demand', quiet: 'Quiet period', busy: 'Busy working day',
   help: 'Increase building demand. Once combined demand passes 100 kW, the controller reduces charging power.',
   connection: 'kW limit', building: 'kW building', available: 'kW room for charging',
   requested: 'Requested', allocated: 'After control', limit: '100 kW limit',
   buildingLabel: 'Building', charging: 'Charging', headroom: 'Headroom below the limit', reduced: 'Charging power reduced by',
   value: (building: number, charging: number) => `${building} kW building demand and ${charging} kW for charging`,
   description: (building: number, charging: number) => `${building} kW for the building and ${charging} kW for vehicles`,
   result: (charging: number, reduction: number, headroom: number) => reduction > 0
    ? `The vehicles request 70 kW and receive ${charging} kW. Charging the same amount of energy takes longer at this power level.`
    : `The full 70 kW charging request fits, leaving ${headroom} kW below the configured limit.`,
   note: 'The example uses a configured site power limit of 100 kW and a fixed 70 kW charging request. The physical connection, contract, most constrained phase and safety margins all help determine an appropriate limit on site.'
  },
  day: {
   eyebrow: 'Battery storage', title: 'Compare three moments with and without battery support.',
   tabsLabel: 'Time of day', storageEnabled: 'Use the battery',
   supply: 'Supply', use: 'Allocation', gridImport: 'From the grid', gridExport: 'To the grid',
   solar: 'Rooftop solar', building: 'Building', vehicles: 'Vehicles',
   batteryCharge: 'Into storage', batterySupply: 'Out of storage', scale: 'Both bars run from 0 to 80 kW.',
   imageAlt: 'Business site with rooftop solar, two separate ESS 261 battery cabinets, a truck at the DC fast charger and two vehicles at AC chargers.',
   periodLabels: ['Starting up', 'Using solar', 'Evening peak'],
   descriptions: [
    ['The roof supplies 8 kW of the 48 kW needed. The grid supplies the remaining 40 kW.', 'The battery is held in reserve for the evening. The roof supplies 8 kW and the grid supplies 40 kW to the building and vehicles.'],
    ['The building and vehicles use 48 kW of the 80 kW generated on the roof. The remaining 32 kW is exported to the grid.', 'After serving the building and vehicles, 32 kW of solar power is available to charge the battery.'],
    ['The roof supplies 0 kW at this time. The grid provides all 72 kW for the building and vehicles.', 'The building and vehicles need 72 kW. The battery supplies 24 kW, reducing grid draw from 72 to 48 kW.']
   ],
   quarterHour: (power: number, charging: boolean) => charging
    ? `If charging continues at this rate for 15 minutes, the battery receives ${power / 4} kWh.`
    : `If discharge continues at this rate for 15 minutes, the battery supplies ${power / 4} kWh.`,
   note: 'The figures are snapshots of power in kW. The example assumes sufficient grid import and export capacity, space to charge the battery at midday and enough stored energy in the evening. The quarter-hour calculation excludes conversion losses.'
  },
  architecture: {
   model:'Functional diagram',eyebrow:'Measurement & control',title:'Cables carry power. The EMS allocates charging.',
   power:'Electrical power',control:'Measurement / control',data:'Management data',
   scroll:'Swipe horizontally to explore the full diagram.',region:'Diagram of electrical power, local control and platform data; scroll horizontally to explore',
   svgTitle:'Electrical power and local control follow different routes.',
   description:'Electrical power flows from the grid through the meter and distribution board to the building and chargers. The local EMS receives measurements and limits charging power. Data passes through the local network boundary to the platform for visibility and management. This diagram does not show direct cloud control of chargers.',
   local:'ON YOUR SITE',platform:'PLATFORM',meter:'Grid + meter',distribution:'Distribution',ems:'Local EMS',emsSub:'Measure → control',building:'Building',chargers:'Chargers',overview:'Visibility & management',boundary:'Network boundary',measurement:'Measurements',budget:'Charging budget',
   platformLines:['Sessions and site data','make usage visible.','Control remains local.'],
   steps:[
    ['The meter measures.','Current measurements reveal the available capacity.'],
    ['The EMS allocates.','Local control adapts the charging budget to site limits.'],
    ['The platform shows.','Sessions and site data support management.']
   ],
   imageAlt:'The Stroomlijnen controller on the UniPi Edge E410 connects the meter, solar inverter and building systems to the 120 kW DC charger, ESS 261 battery and customer portal.',
   contextLabel:'One site, three different routes',contextTitle:'What carries power? What gives an instruction?',
   contextText:'The controller reads the meter and coordinates charging and storage with solar generation and building demand. The portal displays the data. Control runs on site.',
   layerTitles:['Electrical power','Local control','Management data'],
   layerDescriptions:['Power flows through the electrical installation to the loads.','Measurements are translated into a local charging budget.','Site data passes through the network boundary to the platform.'],
   nodes:[
    [['Grid + meter','Supply and measurement'],['Distribution','Electrical installation'],['Building + chargers','On-site consumption']],
    [['Measurements','Current site conditions'],['Local EMS','Calculates charging budget'],['Charging budget','Chargers adapt their power']],
    [['Site data','Sessions and usage'],['Network boundary','Separated communication'],['Visibility & management','Platform overview']]
   ],
   note:'Illustrative site with a functional overview, not a wiring or network diagram. Only the discussed routes are shown; solar and storage are not detailed. The platform route shows management data, not direct cloud control of chargers. Protocols, authorisation and fault behaviour vary by installation.'
  }
 }
};
