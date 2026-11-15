import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { commercialOrigin, commercialPaths, legacyPaths, cultureOrigin, gatewayOrigin, previewCommercialHomes } from './public-sites.mjs';

// A static fallback keeps bookmarked links usable on hosts that only serve files.
// Set native HTTP redirects in the production proxy as described in DEPLOYMENT.md.
async function writeRedirect(output, path, destination, lang) {
  const folder = join(output, path.slice(1));
  await mkdir(folder, { recursive: true });
  const label = lang === 'en' ? 'Continue to Stroomlijnen' : 'Ga verder naar Stroomlijnen';
  const html = `<!doctype html>
<html lang="${lang}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${label}</title><meta name="robots" content="noindex, follow">
<link rel="canonical" href="${destination}">
<script>const target=new URL(${JSON.stringify(destination)},location.href); target.search=location.search; if (!target.hash) target.hash=location.hash; location.replace(target.href);</script>
<meta http-equiv="refresh" content="0;url=${destination}">
</head><body><a href="${destination}">${label}</a></body></html>\n`;
  await writeFile(join(folder, 'index.html'), html);
}

function sitemapUrl(location, alternates = {}) {
  const links = Object.entries(alternates).map(([lang, href]) =>
    `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`
  );
  return [`  <url>`, `    <loc>${location}</loc>`, ...links, '  </url>'].join('\n');
}

function bilingualUrls(origin, nlPath, enPath) {
  const nl = new URL(nlPath, origin).href;
  const en = new URL(enPath, origin).href;
  const alternates = { nl, en, 'x-default': nl };
  return [sitemapUrl(nl, alternates), sitemapUrl(en, alternates)];
}

export function buildTargetFiles(audience) {
  return {
    name: 'stroomlijnen-site-target',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const output = fileURLToPath(dir);
        const nativeRedirects = [];
        for (const lang of ['nl', 'en']) {
          const en = lang === 'en';
          const paths = commercialPaths[lang];
          const old = legacyPaths[lang];
          const commercial = audience === 'preview' ? '' : commercialOrigin;
          const home = audience === 'preview' ? previewCommercialHomes[lang] : paths.home;
          const about = cultureOrigin + (en ? '/en/about/' : '/over-ons/');
          for (const [from, to] of [
            [paths.technology, commercial + paths.hardware],
            [paths.applications, commercial + home + (en ? '#industries' : '#sectoren')],
            [paths.about, about], [old.story, about],
            [old.theatres, cultureOrigin + (en ? '/en/venues/' : '/podia/')],
            [old.touring, cultureOrigin + (en ? '/en/companies/' : '/gezelschappen/')]
          ]) {
            await writeRedirect(output, from, to, lang);
            nativeRedirects.push(from + ' ' + to + ' 301', from.slice(0, -1) + ' ' + to + ' 301');
          }
        }
        if (audience === 'preview') {
          await writeFile(join(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
          return;
        }
        await writeFile(join(output, '_redirects'), nativeRedirects.join('\n') + '\n');
        const isGateway = audience === 'gateway';
        const origin = isGateway ? gatewayOrigin : commercialOrigin;
        const urls = [];
        for (const lang of ['nl', 'en']) {
          const paths = commercialPaths[lang];
          await writeRedirect(output, previewCommercialHomes[lang], new URL(paths.home, commercialOrigin).href, lang);
          if (isGateway) {
            for (const path of [paths.hardware, paths.security]) {
              await writeRedirect(output, path, new URL(path, commercialOrigin).href, lang);
            }
          } else {
            for (const path of [paths.contact, legacyPaths[lang].receipt]) {
              await writeRedirect(output, path, new URL(path, gatewayOrigin).href, lang);
            }
          }
        }
        if (isGateway) {
          urls.push(...bilingualUrls(origin, '/', '/en/'));
          urls.push(...bilingualUrls(origin, commercialPaths.nl.contact, commercialPaths.en.contact));
        } else {
          for (const page of ['home', 'hardware', 'security']) {
            urls.push(...bilingualUrls(origin, commercialPaths.nl[page], commercialPaths.en[page]));
          }
        }
        const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...urls, '</urlset>', ''].join('\n');
        await writeFile(join(output, 'sitemap.xml'), sitemap);
        await writeFile(join(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
      }
    }
  };
}
