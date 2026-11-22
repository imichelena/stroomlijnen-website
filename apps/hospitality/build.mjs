import {brochureLinks} from './src/brochures.mjs';
import {readFile, mkdir, writeFile, cp, rm} from 'node:fs/promises';
import {resolve, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {copy} from './src/copy.mjs';
import {emsSection} from './src/ems.mjs';

const root = fileURLToPath(new URL('.', import.meta.url));
const safetyCopy = JSON.parse(await readFile(join(root,'src/safety.json'), 'utf8'));
const preview = process.argv.includes('--preview');
const output = resolve(root, preview ? 'dist' : 'dist-production');
const canonical = 'https://hospitality.stroomlijnen.nl';
const gateway = preview ? 'https://stroomlijnen-in-beweging.frizzyjasmine.chatgpt.site' : 'https://stroomlijnen.nl';
const docs = preview ? 'https://stroomlijnen-kennis-in-beeld.frizzyjasmine.chatgpt.site' : 'https://docs.stroomlijnen.nl';
const routes = {nl:{home:'/', safety:'/batterijveiligheid/'}, en:{home:'/en/', safety:'/en/battery-safety/'}};
const arrow = '<span aria-hidden="true">↗</span>';
const heading = words => words[0]+' <em>'+words[1]+'</em>';
const contact = lang => 'https://lemnion.nl' + (lang === 'en' ? '/en/' : '/');

function header(lang, page) {
  const t=copy[lang], here=routes[lang], other=lang==='nl'?'en':'nl';
  return `<a class="skip" href="#main">${t.skip}</a><header class="mast"><div class="frame mast-inner">
    <a href="${gateway + here.home}" class="brand" aria-label="Stroomlijnen home"><img src="/assets/wordmark.png" alt="Stroomlijnen" width="480" height="73"><span>Hospitality</span></a>
    <nav class="topnav" aria-label="${t.nav}"><a href="${here.home}#laden">${t.charge}</a><a href="${here.home}#ems">${t.ems}</a><a href="${here.safety}" ${page==='safety'?'aria-current="page"':''}>${t.safety}</a></nav>
    <div class="mast-right"><nav class="langs" aria-label="${t.language}">${['nl','en'].map(l=>`<a lang="${l}" hreflang="${l}" aria-label="${l==='nl'?'Nederlands':'English'}" href="${routes[l][page]}" ${l===lang?'aria-current="page"':''} ${l===other?'data-language-switch':''}>${l.toUpperCase()}</a>`).join('<i aria-hidden="true">/</i>')}</nav><a class="top-contact" href="${contact(lang)}">${t.contact} ${arrow}</a></div>
    </div></header>
    <aside class="partner-notice" aria-label="${t.partnerLabel}">
      <div class="frame partner-inner">
        <p><strong>${t.partnerStatement}</strong> ${t.partnerIntro}</p>
        <a class="inline" href="${contact(lang)}">${t.partnerCta} ${arrow}</a>
      </div>
    </aside>`;
}

function footer(lang) {
  const t=copy[lang], base=lang==='en'?'/en/':'/';
  return `<footer id="contact"><div class="frame"><div class="contact-flex"><div><h2>${t.ctaTitle}</h2><p>${t.ctaText}</p></div><a class="btn light" href="${contact(lang)}">${t.partnerCta} ${arrow}</a></div>
  <div class="foot-end"><div><strong>Stroomlijnen</strong> Hospitality</div><nav><a href="${gateway+base}">${t.gateway}</a><a target="_blank" rel="noopener noreferrer" href="${docs+base}">${t.docs}</a><a href="https://cultuur.stroomlijnen.nl${lang==='en'?'/en/about/':'/over-ons/'}">${lang==='en'?'About us':'Over ons'}</a></nav><a href="${contact(lang)}">${t.partner}</a></div></div></footer>`;
}

function home(lang) {
  const t=copy[lang], s=safetyCopy[lang], info=lang==='en'?'/en':'';
  return `<section class="hero frame"><div class="hero-text">
    <h1>${heading(t.title)}</h1><p class="deck">${t.lead}</p><div class="actions"><a class="btn mainbtn" href="#business">${t.tour} <span aria-hidden="true">↓</span></a><a class="inline" href="${contact(lang)}">${t.consult} ${arrow}</a></div>
  </div><figure class="hotel-view"><img src="/assets/hotel-960.webp" srcset="/assets/hotel-640.webp 640w, /assets/hotel-960.webp 960w, /assets/hotel-1536.webp 1536w" sizes="(min-width: 840px) 54vw, 100vw" width="1536" height="1024" alt="${t.illustrated}" fetchpriority="high"></figure></section>
  <div class="chapter-nav"><nav class="frame" aria-label="${lang==='en'?'Explore the hotel site':'Onderwerpen voor hotels'}"><a href="#business">${t.businessNav} <span>↓</span></a><a href="#laden">${t.charge} <span>↓</span></a><a href="#ems">${t.ems} <span>↓</span></a><a href="#opslag">${t.storage} <span>↓</span></a><a href="#roadmap">Roadmap 2027–2028 <span>↓</span></a></nav></div>
  <section id="business" class="section hotel-business" aria-labelledby="business-heading">
    <div class="frame two-columns">
      <div class="business-copy">
        <h2 id="business-heading">${heading(t.businessTitle)}</h2>
        <p class="intro">${t.businessLead}</p>
        <h3>${t.expansionTitle}</h3><p>${t.expansionBody}</p>
        <h3>${t.chargingTitle}</h3><p>${t.chargingBody}</p><p>${t.visitorBody}</p>
      </div>
      <figure class="storage-plate charger-plate">
        <img src="https://commercieel.stroomlijnen.nl/images/hardware/dc-120.webp" width="960" height="640" loading="lazy" alt="${t.fastChargerAlt}">
        <figcaption><strong>${t.fastCharger}</strong><p>${t.fastChargerCaption}</p>
          ${brochureLinks('120kW-DC-snellader', lang, 'inline')}
        </figcaption>
      </figure>
    </div>
  </section>
  <section id="laden" class="guest section"><div class="frame two-columns"><div class="guest-story"><p class="eyebrow">${t.charge}</p><h2>${heading(t.guestTitle)}</h2><p class="intro">${t.guestLead}</p><ol class="steps">${t.steps.map(([label,body])=>`<li><h3>${label}</h3><p>${body}</p></li>`).join('')}</ol><a class="inline" target="_blank" rel="noopener noreferrer" href="${docs+info}/docs/energie/energiebudget/">${t.reserveDocs} ${arrow}</a></div>
  <figure class="folio"><figcaption>${t.receipt}</figcaption><div class="big-num">30 <span>kWh</span></div><p class="folio-label">${t.requested}</p>
  <div class="ruler"><div><b>19:00</b><small>${t.arrival}</small></div><div><b>07:00</b><small>${t.next}</small></div></div><p class="folio-caption">${t.ticketNote}</p></figure></div></section>
  ${emsSection(lang,docs)}
  <section class="section storage" id="opslag"><div class="frame two-columns"><figure class="storage-plate"><img src="/assets/ess-261.webp" loading="lazy" width="990" height="660" alt="${t.productAlt}"><figcaption>ESS 261 <span>${t.perUnit}</span></figcaption><dl class="specpair"><div><dt>${t.capacity}</dt><dd>261 <small>kWh</small></dd></div><div><dt>${t.inverter}</dt><dd>125 <small>kW</small></dd></div></dl></figure>
  <div><p class="eyebrow">${t.storage}</p><h2>${heading(t.storageHead)}</h2><p class="intro">${t.storageText}</p><p>${t.storageSafety}</p>${brochureLinks('ESS-261', lang, 'inline')}<a class="btn linebtn" href="${routes[lang].safety}">${t.safetyLink} ${arrow}</a></div></div></section>
  <section id="roadmap" class="section roadmap"><div class="frame two-columns"><div><p class="eyebrow">${t.roadLabel}</p><h2>${heading(t.roadTitle)}</h2><p class="intro">${t.roadText}</p><p>${t.roadNote}</p></div><figure class="amenity"><figcaption>${t.mock}</figcaption><div class="amenity-title">${t.room}</div><dl><div><dt>${t.bookedWindow}</dt><dd>22:00 – 06:00</dd></div><div><dt>${t.power}</dt><dd>7 kW</dd></div></dl><p>${t.unitsNote}</p></figure></div></section>`;
}

function safety(lang) {
  const t=copy[lang], s=safetyCopy[lang];
  return `<div class="frame crumbs"><a href="${routes[lang].home}">${t.back}</a><span aria-hidden="true">/</span>${t.safety}</div>
  <section class="safety-top frame"><div><p class="eyebrow">Stroomlijnen ESS 261</p><h1>${heading(t.safetyHead)}</h1><p class="deck">${t.safetyIntro}</p><a class="inline" href="#veiligheid">${t.toLayers} <span aria-hidden="true">↓</span></a></div><figure><img src="/assets/ess-detail.webp" width="1100" height="733" alt="${s.imageAlt}"></figure></section>
  <section id="veiligheid" class="layers section"><div class="frame safety-layout"><div><p class="eyebrow">ESS 261</p><h2>${t.layersTitle}</h2><p class="intro">${s.intro}</p></div>
  <ol class="layer-list">${s.layers.map(([title,body],i)=>`<li><span class="layer-idx" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><div><small>${i===5?t.onSite:t.built}</small><h3>${title}</h3><p>${body}</p></div></li>`).join('')}</ol></div></section>
  <section class="dossier section"><div class="frame two-columns"><div><p class="eyebrow">${t.storage}</p><h2>${t.assessment}</h2><p class="intro">${s.siteAssessment}</p><dl class="data-lines"><div><dt>${t.size}</dt><dd>${s.dimensions}</dd></div><div><dt>${t.capacity}</dt><dd>261 kWh</dd></div><div><dt>${t.inverter}</dt><dd>125 kW</dd></div></dl><p>${s.capacityNote}</p>${brochureLinks('ESS-261', lang, 'inline')}</div><div class="evidence"><p class="eyebrow">${t.inDossier}</p><h3>${s.evidenceTitle}</h3><p>${s.evidence}</p><a class="inline" target="_blank" rel="noopener noreferrer" href="${docs}${lang==='en'?'/en':''}/docs/energie/ess/">${t.docsEss} ${arrow}</a></div></div></section>`;
}

function render(lang,page) {
  const t=copy[lang], title=(page==='home'?t.mainTitle:t.safetyTitle)+' | Stroomlijnen Hospitality';
  const desc=page==='home'?t.description:t.safetyIntro;
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description" content="${desc}"><link rel="canonical" href="${canonical+routes[lang][page]}">
  ${['nl','en','x-default'].map(l=>`<link rel="alternate" hreflang="${l}" href="${canonical+routes[l==='en'?'en':'nl'][page]}">`).join('')}
  <meta property="og:title" content="${title}"><meta property="og:description" content="${desc}"><meta property="og:image" content="${canonical}/assets/${page==='home'?'hotel-1536':'ess-detail'}.webp"><meta property="og:url" content="${canonical+routes[lang][page]}"><meta name="theme-color" content="#f5f4ef"><link rel="icon" href="/assets/favicon-hospitality.svg"><link rel="stylesheet" href="/assets/site.css">${page==='home'?'<link rel="stylesheet" href="/assets/ems.css"><script src="/assets/ems.js" defer></script>':''}<script src="/assets/nav.js" defer></script></head>
  <body>${header(lang,page)}<main id="main">${page==='home'?home(lang):safety(lang)}</main>${footer(lang)}</body></html>`;
}
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
await cp(join(root,'assets'), join(output,'assets'), {recursive:true});
for(const lang of ['nl','en']) for(const page of ['home','safety']){
  const dir=join(output,routes[lang][page]);
  await mkdir(dir,{recursive:true});
  await writeFile(join(dir,'index.html'),render(lang,page));
}
await writeFile(join(output,'sitemap.xml'), '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.values(routes).flatMap(Object.values).map(p=>'<url><loc>'+canonical+p+'</loc></url>').join('')+'</urlset>');
await writeFile(join(output,'robots.txt'), preview?'User-agent: *\nDisallow: /\n':'User-agent: *\nAllow: /\nSitemap: '+canonical+'/sitemap.xml\n');
