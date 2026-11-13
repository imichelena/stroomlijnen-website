export type Locale = 'nl' | 'en';

export const sectorOrigin = 'https://cultuur.stroomlijnen.nl';
export const gatewayOrigin = 'https://stroomlijnen.nl';

export const pages = [
  {nl: '/', en: '/en/', label: {nl: 'Home', en: 'Home'}},
  {nl: '/podia/', en: '/en/venues/', label: {nl: 'Podia', en: 'Venues'}},
  {nl: '/gezelschappen/', en: '/en/companies/', label: {nl: 'Gezelschappen', en: 'Touring companies'}},
  {nl: '/over-ons/', en: '/en/about/', label: {nl: 'Over ons', en: 'About us'}},
] as const;

export function sharedFormPage(lang: Locale, page: 'contact' | 'thanks' = 'contact') {
  return gatewayOrigin + (lang === 'nl' ? '/' : '/en/') + page + '/';
}
