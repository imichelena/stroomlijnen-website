# stroomlijnen.nl

De publieke marketingsite van **Stroomlijnen B.V.** — laadinfrastructuur voor
culturele locaties en transport.

Live: https://stroomlijnen.nl

## Stack

Astro 6 (static output) + Tailwind 4. Node ≥ 22.12.0.

## Lokaal draaien

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview   # bekijk de build lokaal
```

## Pagina's

| Route | Bestand |
|---|---|
| `/` | `src/pages/index.astro` |
| `/theaters/` | `src/pages/theaters.astro` |
| `/transport/` | `src/pages/transport.astro` |
| `/over-ons/` | `src/pages/over-ons.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/thanks/` | `src/pages/thanks.astro` (na contactformulier) |

Layout, navigatie en footer staan in `src/layouts/Layout.astro`. De
kleuren staan als CSS-variabelen in `src/styles/global.css`:

- `--cyan` `#00B0E4` · `--green` `#84BD00` · donkerblauw `#0C2340`

## Deployen

**Push naar `main`.** Meer niet — de deploy naar beide edge-VPS'en is
geautomatiseerd.

Upload **nooit** losse bestanden naar een server (geen SCP/rsync/SSH). Er
staan twee edge-VPS'en achter Cloudflare round-robin; een losse upload raakt
er maar één, waardoor de andere verouderde content serveert.

De volledige uitleg en agent-instructies staan in `AGENTS.md`.

## Content aanpassen zonder code

De pagina's zijn losse `.astro`-bestanden: tekst staat direct in de HTML,
met inline styling. Zoek de betreffende regel en pas hem aan. Er is geen CMS.


## Visual redesign — 6 November 2026

The Dutch homepage now tells a scroll-driven energy story. It uses an original
SVG energy campus, four illustrative working-day states, a keyboard-accessible
sector explorer and the repository’s original credited photography.

- Homepage layout: `src/layouts/StoryLayout.astro`
- Homepage motion and interactions: `src/scripts/energy-story.ts`
- Responsive art direction: `src/styles/story.css`
- Reusable campus illustration: `src/components/EnergyCampus.astro`
- Interactive visual explanations: `/kennisbank/`
- Reusable diagram components: `src/components/docs/`
- Portable SVG diagrams: `public/diagrams/`
- Inner-page styling: `src/styles/commercial-refresh.css`

All example power values are illustrative, not measurements or savings promises.
Animations respect reduced-motion preferences and have a pause control.
The existing English content, other routes and contact submission are retained.
The contact form was not submitted during verification.

### Using the diagrams in the documentation site

This repository does not contain the source of docs.stroomlijnen.nl.
The `/kennisbank/` page demonstrates the three diagrams. SVG files can be
embedded directly in that documentation repository; the interactive versions
need the accompanying markup, CSS and browser TypeScript ported to its framework.
Do not describe the documentation subdomain as updated until integrated there.

### Preview and deployment

Use Node 22.12+ and `npm ci`, then `npm run dev` or `npm run build`.
In restricted environments, prefix Astro commands with
`ASTRO_TELEMETRY_DISABLED=1` to avoid writing global telemetry preferences.
The separate private review deployment does not replace stroomlijnen.nl.
Production deployment remains the repository’s documented GitHub pipeline.
