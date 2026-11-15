export function brochureLinks(product, lang, className) {
  const title = product === 'ESS-261' ? 'ESS 261' : 'EMS v6.2';
  const languages = lang === 'en' ? ['EN', 'NL'] : ['NL', 'EN'];
  const links = languages.map(code => {
    const label = code === 'EN' ? 'English' : 'Nederlands';
    const file = `https://docs.stroomlijnen.nl/brochures/Stroomlijnen-${product}-Brochure-${code}.pdf`;
    return `<a class="${className}" href="${file}" download hreflang="${code.toLowerCase()}" aria-label="${title} · ${label} (PDF)">${label} ↓</a>`;
  });
  return `<p><strong>${title} · Brochure (PDF)</strong><br>${links.join(' &nbsp;·&nbsp; ')}</p>`;
}
