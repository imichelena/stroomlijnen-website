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
