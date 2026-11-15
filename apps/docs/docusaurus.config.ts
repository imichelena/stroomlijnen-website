import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isEnglish = process.env.DOCUSAURUS_CURRENT_LOCALE === 'en';
const siteTitle = isEnglish ? 'Stroomlijnen Knowledge Base' : 'Stroomlijnen Kennisbank';
const websiteHome = isEnglish ? 'https://stroomlijnen.nl/en/' : 'https://stroomlijnen.nl/';

const config: Config = {
  title: siteTitle,
  tagline: isEnglish ? 'Electric charging for fleets and sites' : 'Alles over elektrisch laden voor vloten en locaties',
  favicon: 'img/favicon-docs.svg',

  future: {
    v4: false,
  },

  url: 'https://docs.stroomlijnen.nl',
  baseUrl: '/',

  organizationName: 'imichelena',
  projectName: 'stroomlijnen-docs',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'nl'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  clientModules: [require.resolve('./src/clientModules/reading.js')],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Stroomlijnen B.V.',
        url: 'https://docs.stroomlijnen.nl',
        description: 'Dutch CPO and eMSP specializing in electric truck charging at theaters and logistics sites.',
        sameAs: [
          'https://www.linkedin.com/company/stroomlijnen',
        ],
      }),
    },
  ],

  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    localeConfigs: {
      nl: { label: 'Nederlands', htmlLang: 'nl-NL' },
      en: { label: 'English', htmlLang: 'en-GB' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom', 'json'],
            xslt: true,
            title: 'Stroomlijnen Blog',
            description: 'Insights on electric fleet charging, Plug & Charge, and EV infrastructure',
            copyright: `Copyright © ${new Date().getFullYear()} Stroomlijnen B.V.`,
          },
          blogTitle: 'Stroomlijnen Blog',
          blogDescription: 'Insights on electric fleet charging, Plug & Charge, and EV infrastructure in the Netherlands and Europe.',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Recent posts',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: ['./src/css/fonts.css', './src/css/custom.css', './src/css/editorial.css'],
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/stroomlijnen-social-card.png',
    metadata: [
      { name: 'keywords', content: 'EV charging, electric trucks, fleet charging, Plug and Charge, OCPP, ISO 15118, Netherlands, CPO, eMSP, theater charging' },
      { name: 'author', content: 'Stroomlijnen B.V.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteTitle },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Stroomlijnen',
        href: websiteHome,
        target: '_self',
        src: 'img/stroomlijnen-logo.png',
        srcDark: 'img/stroomlijnen-logo.png',
        width: 180,
        height: 30,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentatie',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: websiteHome,
          label: 'stroomlijnen.nl',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentatie',
          items: [
            { label: 'Aan de slag', to: '/docs/getting-started/intro' },
            { label: 'Plug & Charge', to: '/docs/plug-and-charge/what-is-pnc' },
            { label: 'Klantportaal', to: '/docs/klantportaal/overview' },
            { label: 'Technisch', to: '/docs/technical/ocpp-overview' },
          ],
        },
        {
          title: 'Meer',
          items: [
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Bedrijf',
          items: [
            { label: 'stroomlijnen.nl', href: websiteHome },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stroomlijnen' },
            { label: isEnglish ? 'About us' : 'Over ons', href: isEnglish ? 'https://cultuur.stroomlijnen.nl/en/about/' : 'https://cultuur.stroomlijnen.nl/over-ons/' },
            { label: 'Contact', href: `${websiteHome}contact/` },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stroomlijnen B.V. — The Show Must Go On.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
