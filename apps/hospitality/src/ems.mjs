// Each snapshot assumes a 100 kW grid import limit with no solar or battery contribution.
const siteLimit = 100;
const reservedPower = 11;
const hotelDemand = [55, 80, 35];
const clock = ['16:00', '19:00', '23:00'];

const copy = {
  nl: {
    label: 'Energiemanagement op maat',
    heading: 'Uw hotel bepaalt <em>de prioriteiten.</em>',
    intro: 'Een congres op dinsdag, een vol restaurant op zaterdag. U bepaalt samen met ons welke activiteiten voorrang krijgen. Wij vertalen die keuzes in regels voor uw energiemanagementsysteem (EMS). Per tijdvak, seizoen of evenement kunnen andere prioriteiten gelden.',
    policies: [
      ['Tijdens het diner', 'De keuken krijgt de ruimte die ze nodig heeft. Flexibele laadsessies kunnen tijdelijk langzamer laden. Eerder toegezegde laadruimte telt mee bij elke nieuwe aanvraag.'],
      ['Voor een vroeg vertrek', 'Geef de gewenste energie en vertrektijd op. Het EMS toetst de aanvraag en plant een haalbare reservering in. Auto’s die langer kunnen blijven, benutten de uren eromheen.'],
      ['Met eigen opwek of opslag', 'Laat zonnestroom naar het gebouw en de laders gaan. Met een geschikte batterij kan een overschot mee naar de avond. Bij een dynamisch tarief kunt u flexibel laden naar goedkopere uren verschuiven.'],
    ],
    basis: 'We toetsen de instellingen aan uw kwartiermetingen, de belasting per fase en de apparatuur op locatie. Bij opslag tellen ook de resterende lading en de afgesproken batterijreserve mee.',
    link: 'Hoe het EMS het vermogen verdeelt',
    figure: 'Dezelfde aansluiting, drie momenten',
    context: 'Rekenvoorbeeld met een aansluitgrens van 100 kW.',
    choose: 'Kies een moment',
    moments: ['Aankomst', 'Diner', 'Nacht'],
    flexible: 'beschikbaar voor flexibel laden',
    legend: ['Hotelverbruik', 'Gereserveerd laden', 'Flexibel laadbudget'],
    description: [
      'De eerste gasten komen aan. Na het hotelverbruik en de laadreservering blijft er ruimte voor de andere auto’s.',
      'De keuken draait op volle toeren. Het flexibele laadbudget daalt zolang het hotel meer vermogen vraagt.',
      'De keuken sluit. De vrijgekomen capaciteit kan nu naar auto’s die de nacht blijven staan.',
    ],
    caption: 'Momentopnames zonder zon of batterij, met gelijk belaste fasen. De getallen geven beschikbaar vermogen in kW. Hoeveel energie een auto in kWh laadt, hangt ook af van de laadtijd en de auto.',
    momentHeading: 'Moment',
  },
  en: {
    label: 'Configurable energy management',
    heading: 'Your hotel sets <em>the priorities.</em>',
    intro: 'A conference on Tuesday, a full restaurant on Saturday. You decide with us which activities take priority. We write those choices into the rules for your energy management system (EMS). Priorities can vary by time of day, season or event.',
    policies: [
      ['During dinner service', 'The kitchen takes the power it needs. Flexible charging sessions can slow down for a while. Capacity already promised to guests counts towards every new booking decision.'],
      ['Before an early departure', 'Specify the energy a guest needs and when they leave. The EMS checks the request and schedules a reservation it can accommodate. Cars staying longer can use the hours around it.'],
      ['With solar or storage', 'Use solar power in the building and at the chargers. A suitable battery can store the surplus for the evening. With a variable electricity tariff, you can move flexible charging to cheaper hours.'],
    ],
    basis: 'We check these settings against your 15-minute meter data, the load on each phase and the equipment on site. With storage, the available charge and the battery reserve also count.',
    link: 'How the EMS allocates power',
    figure: 'One grid connection, three moments',
    context: 'Illustrative hotel with a 100 kW import limit.',
    choose: 'Choose a time',
    moments: ['Arrivals', 'Dinner', 'Overnight'],
    flexible: 'available for flexible charging',
    legend: ['Hotel demand', 'Reserved charging', 'Flexible charging budget'],
    description: [
      'The first guests arrive. After hotel demand and the charging reservation, other cars can use the remaining capacity.',
      'The kitchen is in full service. Flexible charging has less power available while hotel demand is high.',
      'The kitchen closes. Cars staying overnight can now use the capacity released by the hotel.',
    ],
    caption: 'Snapshots assume balanced phases and no solar or battery contribution. Values show available power in kW. Energy delivered in kWh also depends on the charging time and the car.',
    momentHeading: 'Time',
  },
};

export function emsSection(lang, docsOrigin = 'https://docs.stroomlijnen.nl') {
  const isEnglish = lang === 'en';
  const text = isEnglish ? copy.en : copy.nl;
  const docsPrefix = isEnglish ? '/en' : '';
  const snapshots = hotelDemand.map((demand, index) => ({
    time: clock[index],
    title: text.moments[index],
    flexible: siteLimit - demand - reservedPower,
    demand,
    description: text.description[index]
  }));
  const initial = snapshots[1];

  return `<section id="ems" class="hotel-ems" aria-labelledby="hotel-ems-heading">
    <div class="hotel-ems__inner">
      <header class="hotel-ems__header">
        <p class="hotel-ems__label">${text.label}</p>
        <h2 id="hotel-ems-heading">${text.heading}</h2>
        <p class="hotel-ems__intro">${text.intro}</p>
      </header>
      <div class="hotel-ems__columns">
        <div class="hotel-ems__settings">
          <figure class="hotel-ems__controller">
            <img src="${docsOrigin}/img/ems-edge-e410.webp" width="1536" height="1024" loading="lazy" decoding="async" alt="${isEnglish ? 'The Stroomlijnen controller on the UniPi Edge E410 connects the meter, solar inverter and building systems to the 120 kW DC charger, ESS 261 battery and customer portal.' : 'De Stroomlijnen-regelaar op de UniPi Edge E410 verbindt de meter, zonne-omvormer en gebouwinstallaties met de 120 kW DC-snellader, de ESS 261 en het klantportaal.'}">
            <figcaption>${isEnglish ? 'The controller reads the meter and coordinates charging and storage with solar generation and building demand. The portal displays the data. Control runs on site.' : 'De regelaar leest de meter en stemt het laden en de batterij af op de opwek en het gebouwverbruik. Het portaal toont de gegevens. De regeling werkt op locatie.'}</figcaption>
          </figure>
          <dl>${text.policies.map(([title, description]) => `<div><dt>${title}</dt><dd>${description}</dd></div>`).join('')}</dl>
          <p class="hotel-ems__basis">${text.basis}</p>
          <p><a class="hotel-ems__link" href="https://docs.stroomlijnen.nl/brochures/Stroomlijnen-EMS-v6.2-Brochure-${lang === 'en' ? 'EN' : 'NL'}.pdf" download>${lang === 'en' ? 'Download the EMS v6.2 brochure (PDF, English)' : 'Download de brochure over EMS v6.2 (PDF)'}</a></p>
          <a target="_blank" rel="noopener noreferrer" class="hotel-ems__link" href="${docsOrigin}${docsPrefix}/docs/energie/ems">${text.link}<span aria-hidden="true"> ↗</span></a>
        </div>
        <figure class="hotel-ems__figure" data-hotel-ems>
          <h3>${text.figure}</h3>
          <p class="hotel-ems__context">${text.context}</p>
          <fieldset class="hotel-ems__choices" hidden>
            <legend>${text.choose}</legend>
            <div>${snapshots.map((s, i) => `<label><input type="radio" name="hotel-ems-time" value="${i}"${i === 1 ? ' checked' : ''}><span><b>${s.time}</b> ${s.title}</span></label>`).join('')}</div>
          </fieldset>
          <div class="hotel-ems__display" hidden>
            <div class="hotel-ems__reading" aria-live="polite" aria-atomic="true">
              <strong><span data-ems-value="flexible">${initial.flexible}</span> <small>kW</small></strong>
              <span>${text.flexible}</span>
            </div>
            <div class="hotel-ems__bar" aria-hidden="true" style="--ems-hotel:${initial.demand}%;--ems-reserved:${reservedPower}%"><i></i><i></i><i></i></div>
            <dl class="hotel-ems__legend">
              <div><dt>${text.legend[0]}</dt><dd><span data-ems-value="hotel">${initial.demand}</span> kW</dd></div>
              <div><dt>${text.legend[1]}</dt><dd>${reservedPower} kW</dd></div>
              <div><dt>${text.legend[2]}</dt><dd><span data-ems-value="flexible">${initial.flexible}</span> kW</dd></div>
            </dl>
            <p class="hotel-ems__explanation" data-ems-note>${initial.description}</p>
          </div>
          <table class="hotel-ems__data">
            <thead><tr>${[text.momentHeading,...text.legend].map(label => `<th scope="col">${label}</th>`).join('')}</tr></thead>
            <tbody>${snapshots.map(s => `<tr data-ems-hotel="${s.demand}" data-ems-flexible="${s.flexible}" data-ems-description="${s.description}"><th scope="row">${s.time} ${s.title}</th><td>${s.demand} kW</td><td>${reservedPower} kW</td><td>${s.flexible} kW</td></tr>`).join('')}</tbody>
          </table>
          <figcaption>${text.caption}</figcaption>
        </figure>
      </div>
    </div>
  </section>`;
}
