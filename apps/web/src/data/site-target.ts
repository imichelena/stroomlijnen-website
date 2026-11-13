import { commercialOrigin, commercialPaths, cultureOrigin, gatewayOrigin, docsOrigin, hospitalityOrigin, previewCommercialHomes } from '../../config/public-sites.mjs';

type Language = 'nl' | 'en';
export type SiteAudience = 'gateway' | 'commercial' | 'preview';
export const siteAudience: SiteAudience = import.meta.env.PUBLIC_SITE_AUDIENCE || 'preview';

export function commercialEntry(lang: Language) {
  if (siteAudience === 'preview') return previewCommercialHomes[lang];
  return new URL(commercialPaths[lang].home, commercialOrigin).href;
}

export function commercialHome(lang: Language) {
  if (siteAudience === 'commercial') return commercialPaths[lang].home;
  return commercialEntry(lang);
}

function localizedSiteEntry(lang: Language, production: string, preview?: string) {
  const origin = siteAudience === 'preview' && preview ? preview : production;
  return new URL(lang === 'en' ? '/en/' : '/', origin).href;
}

export function gatewayHome(lang: Language) {
  const path = lang === 'en' ? '/en/' : '/';
  return siteAudience === 'preview' ? path : new URL(path, gatewayOrigin).href;
}

export function contactEntry(lang: Language) {
  const path = commercialPaths[lang].contact;
  return siteAudience === 'preview' ? path : new URL(path, gatewayOrigin).href;
}

export function cultureEntry(lang: Language) {
  return localizedSiteEntry(lang, cultureOrigin, import.meta.env.PUBLIC_CULTUUR_PREVIEW_ORIGIN);
}

export function docsEntry(lang: Language) {
  return localizedSiteEntry(lang, docsOrigin, import.meta.env.PUBLIC_DOCS_PREVIEW_ORIGIN);
}

export function hospitalityEntry(lang: Language) {
  return localizedSiteEntry(lang, hospitalityOrigin, import.meta.env.PUBLIC_HOSPITALITY_PREVIEW_ORIGIN);
}

export function commercialCanonical(path: string) {
  return new URL(path, commercialOrigin).href;
}
