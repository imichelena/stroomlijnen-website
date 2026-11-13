import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {READING_EVENT, listBookmarks, listRecentReading} from '../utils/readingStorage.mjs';
import '../css/home.css';

type Locale = 'en' | 'nl';
type Article = {path: string; title: string; updatedAt: number; progress?: number};
const COPY = {
  en: {
    title: 'Knowledge Base', heading: 'Charging, clearly explained.',
    description: 'Everything about EV charging, power and grid congestion — for drivers, fleet managers and site owners. By Stroomlijnen B.V., Dutch CPO and eMSP.',
    subtitle: 'Understand charging, energy management and the infrastructure behind them. Start with the basics or explore a topic.',
    searchLabel: 'What would you like to understand?', searchPlaceholder: 'Search charging, power, the portal…', searchButton: 'Search',
    rolesLabel: 'Find your starting point', owner: 'For site owners', driver: 'For drivers', start: 'Getting started',
    directory: 'Explore the knowledge base', directoryNote: 'Start with a topic. Get the practical details.',
    library: 'Your reading space', saved: 'Saved articles', recent: 'Recently read',
    privacy: 'Your reading space stays in this browser. Nothing is synced between devices.',
    savedEmpty: 'Keep useful explanations close. Save an article while reading and it will appear here.',
    recentEmpty: 'Open an article to start. Your recent reading will appear here, so you can find your way back.',
    progress: 'Reading progress',
    note: 'This knowledge base is written to be correct rather than promotional. Where something is still being built, it says so.',
    topics: [
      {heading: 'Energy and power', body: 'Why power is the real constraint, what grid congestion means, how an EMS divides the available capacity and what a battery actually buys you.', to: '/docs/energie/netcongestie', link: 'Start with grid congestion'},
      {heading: 'Plug & Charge', body: 'Plug in and charge without a card. What happens technically, the two variants in the market, and what we do and do not deliver today.', to: '/docs/plug-and-charge/what-is-pnc', link: 'What is Plug & Charge?'},
      {heading: 'Security and architecture', body: 'How the cloud, site gateway and charger software work together, and where their security boundaries lie.', to: '/docs/security/architecture', link: 'Explore the architecture'},
      {heading: 'Customer portal', body: 'Sessions, vehicles, tariffs and invoices. What you manage yourself, what we handle, and where to go with a question.', to: '/docs/klantportaal/overview', link: 'About the portal'},
      {heading: 'For site owners', body: 'Your connection is sized for the peak and sits idle the rest of the day. What placing, earning and subsidising actually involves.', to: '/docs/pandeneigenaren/overzicht', link: 'Placing charge points'},
    ],
  },
  nl: {
    title: 'Kennisbank Elektrisch Laden', heading: 'Laden, helder uitgelegd.',
    description: 'Alles over elektrisch laden, vermogen en netcongestie — voor chauffeurs, vlootbeheerders en locatie-eigenaren. Door Stroomlijnen B.V., Nederlandse CPO en eMSP.',
    subtitle: 'Lees hoe laden, energiemanagement en de achterliggende infrastructuur werken. Begin bij de basis of kies een onderwerp.',
    searchLabel: 'Waar wilt u meer over weten?', searchPlaceholder: 'Zoek naar laden, vermogen, het portaal…', searchButton: 'Zoeken',
    rolesLabel: 'Vind uw startpunt', owner: 'Voor locatie-eigenaren', driver: 'Voor chauffeurs', start: 'Aan de slag',
    directory: 'Ontdek de kennisbank', directoryNote: 'Begin bij een onderwerp. Lees hoe het werkt.',
    library: 'Uw leesplek', saved: 'Bewaarde artikelen', recent: 'Recent gelezen',
    privacy: 'Uw leesplek blijft in deze browser. Er wordt niets tussen apparaten gesynchroniseerd.',
    savedEmpty: 'Houd nuttige uitleg bij de hand. Bewaar een artikel tijdens het lezen en het verschijnt hier.',
    recentEmpty: 'Open een artikel om te beginnen. Wat u recent heeft gelezen verschijnt hier, zodat u het makkelijk terugvindt.',
    progress: 'Leesvoortgang',
    note: 'Deze kennisbank is geschreven om te kloppen, niet om te verkopen. Waar iets nog in ontwikkeling is, staat dat erbij.',
    topics: [
      {heading: 'Energie en vermogen', body: 'Waarom vermogen het echte knelpunt is, wat netcongestie betekent, hoe een EMS het verbruik verdeelt en wat een batterij oplevert.', to: '/docs/energie/netcongestie', link: 'Begin bij netcongestie'},
      {heading: 'Plug & Charge', body: 'Inpluggen en laden zonder pas. Wat er technisch gebeurt, welke twee varianten er zijn en wat wij vandaag wel en niet leveren.', to: '/docs/plug-and-charge/what-is-pnc', link: 'Wat is Plug & Charge?'},
      {heading: 'Beveiliging en architectuur', body: 'Hoe cloud, locatiegateway en laadpaalsoftware samenwerken, en waar de beveiligingsgrenzen liggen.', to: '/docs/security/architecture', link: 'Bekijk de architectuur'},
      {heading: 'Klantportaal', body: 'Sessies, voertuigen, tarieven en facturen. Wat u zelf beheert, wat wij doen en waar u terechtkomt bij een vraag.', to: '/docs/klantportaal/overview', link: 'Naar het portaal'},
      {heading: 'Voor locatie-eigenaren', body: 'Uw aansluiting is gedimensioneerd op de piek en staat de rest van de dag stil. Wat er komt kijken bij plaatsen, verdienen en subsidiëren.', to: '/docs/pandeneigenaren/overzicht', link: 'Laadpunten plaatsen'},
    ],
  },
};

export function PersonalLibrary({locale, bookmarks, recent}: {locale: Locale; bookmarks: Article[]; recent: Article[]}) {
  const c = COPY[locale];
  return (
    <section className="kb-library" aria-labelledby="kb-library-title">
      <div className="kb-section-heading">
        <h2 id="kb-library-title">{c.library}</h2>
        <p>{c.privacy}</p>
      </div>
      <div className="kb-library-grid">
        {([{title: c.saved, empty: c.savedEmpty, articles: bookmarks, kind: 'saved'},
          {title: c.recent, empty: c.recentEmpty, articles: recent, kind: 'recent'}]).map(group => (
          <section className="kb-library-panel" key={group.kind} aria-labelledby={`kb-${group.kind}`}>
            <h3 id={`kb-${group.kind}`}>{group.title}</h3>
            {group.articles.length === 0 ? <p className="kb-empty">{group.empty}</p> : (
              <ul className="kb-reading-list">
                {group.articles.map(article => <li key={article.path}>
                  <Link to={article.path}>{article.title}<span aria-hidden="true">→</span></Link>
                  {group.kind === 'recent' && typeof article.progress === 'number' && (
                    <progress max={1} value={article.progress} aria-label={`${c.progress}: ${article.title}`} />
                  )}
                </li>)}
              </ul>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale: Locale = i18n.currentLocale === 'en' ? 'en' : 'nl';
  const prefix = locale === 'en' ? '/en' : '';
  const c = COPY[locale];
  // Empty on the server and first client render: local storage is browser-only.
  const [library, setLibrary] = useState<{bookmarks: Article[]; recent: Article[]}>({bookmarks: [], recent: []});
  useEffect(() => {
    const refresh = () => setLibrary({bookmarks: listBookmarks(locale), recent: listRecentReading(locale)});
    refresh();
    window.addEventListener(READING_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(READING_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, [locale]);
  return (
    <Layout title={c.title} description={c.description}>
      <main className="kb-home">
        <div className="kb-shell">
          <header className="kb-hero">
            <p className="kb-kicker">Stroomlijnen <span aria-hidden="true">/</span> {locale === 'en' ? 'Knowledge base' : 'Kennisbank'}</p>
            <h1>{c.heading}</h1>
            <p className="kb-intro">{c.subtitle}</p>
            <form className="kb-search" role="search" action={`${prefix}/search`} method="get">
              <label htmlFor="kb-search">{c.searchLabel}</label>
              <div className="kb-search-row">
                <input id="kb-search" name="q" type="search" placeholder={c.searchPlaceholder} required />
                <button type="submit">{c.searchButton}<span aria-hidden="true"> →</span></button>
              </div>
            </form>
            <nav className="kb-roles" aria-label={c.rolesLabel}>
              <p>{c.rolesLabel}</p>
              <div className="kb-role-links">
                <Link to={`${prefix}/docs/pandeneigenaren/overzicht`}>{c.owner}<span aria-hidden="true">→</span></Link>
                <Link to={`${prefix}/docs/chauffeurs/elektrisch-touren`}>{c.driver}<span aria-hidden="true">→</span></Link>
                <Link to={`${prefix}/docs/getting-started/intro`}>{c.start}<span aria-hidden="true">→</span></Link>
              </div>
            </nav>
          </header>
          <section className="kb-directory" aria-labelledby="kb-directory-title">
            <div className="kb-section-heading"><h2 id="kb-directory-title">{c.directory}</h2><p>{c.directoryNote}</p></div>
            <ol className="kb-topics">
              {c.topics.map((topic, index) => <li key={topic.to}>
                <span className="kb-topic-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="kb-topic-content">
                  <h3>{topic.heading}</h3><p>{topic.body}</p>
                  <Link to={`${prefix}${topic.to}`}>{topic.link}<span aria-hidden="true"> →</span></Link>
                </div>
              </li>)}
            </ol>
          </section>
          <PersonalLibrary locale={locale} {...library} />
          <p className="kb-editorial-note">{c.note}</p>
        </div>
      </main>
    </Layout>
  );
}
