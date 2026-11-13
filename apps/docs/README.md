# Stroomlijnen Kennisbank — docs.stroomlijnen.nl

Source of the public knowledge base at **https://docs.stroomlijnen.nl**.
Built with **Docusaurus 3.9.2**, bilingual: Dutch is the default, English lives
under `/en/`.

## Development

```bash
npm install          # or `npm ci` for a clean, lockfile-exact install
npm start            # dev server on http://localhost:3000
npm run build        # production build → build/
npm run serve        # serve the production build locally
npm run typecheck    # tsc
```

Node ≥ 22 is required (built and verified on Node 22.23.2).

## Structure

```
docs/                Dutch documentation (default locale, route /docs)
i18n/en/             English translation of the same tree (route /en/docs)
src/pages/index.tsx  Bilingual landing page
src/components/      Reading tools, architecture diagrams, shared UI
src/css/             Design tokens, editorial layout, self-hosted fonts
static/img/          Brand assets, architecture SVGs
static/fonts/        Self-hosted Archivo / Inter / JetBrains Mono
docusaurus.config.ts Site config: URL, locales, nav, search, theme
sidebars.ts          Documentation sidebar structure
tests/               Content/link check scripts
```

## Content rules

- Dutch is written first; English is a translation of the same page, not a
  rewrite.
- Terminology: **lader**, never "laadpaal". Voice and tone follow the
  Stroomlijnen brand guide (wiki #7).
- Internal, non-public material does not belong in this repository.

## Deployment

Build this site as part of the [five-host release](../../DEPLOYMENT.md). The documentation is emitted in `release/docs.stroomlijnen.nl/`.
