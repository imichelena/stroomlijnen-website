// Without scripting the three scenarios are available in an ordinary HTML table.
for (const figure of document.querySelectorAll('[data-hotel-ems]')) {
  const controls = figure.querySelector('.hotel-ems__choices');
  const display = figure.querySelector('.hotel-ems__display');
  const table = figure.querySelector('.hotel-ems__data');
  const rows = Array.from(table.tBodies[0].rows);
  const bar = figure.querySelector('.hotel-ems__bar');
  function showSnapshot(choice) {
    const selected = rows[Number(choice.value)].dataset;
    for (const node of figure.querySelectorAll('[data-ems-value]')) {
      node.textContent = node.dataset.emsValue === 'hotel' ? selected.emsHotel : selected.emsFlexible;
    }
    bar.style.setProperty('--ems-hotel', selected.emsHotel + '%');
    figure.querySelector('[data-ems-note]').textContent = selected.emsDescription;
  }
  controls.addEventListener('change', event => {
    if (event.target.matches('input[type="radio"]')) showSnapshot(event.target);
  });
  showSnapshot(controls.querySelector('input:checked'));
  table.hidden = true;
  controls.hidden = false;
  display.hidden = false;
}
