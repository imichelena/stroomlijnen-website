# Stroomlijnen

Deze Astro-repository levert de Nederlands- en Engelstalige hoofdpagina van Stroomlijnen en de commerciële website. Bezoekers kiezen op `stroomlijnen.nl` voor Cultuur, Hospitality, Commercieel of Documentatie. De commerciële site heeft zijn eigen hoofdpagina op `commercieel.stroomlijnen.nl`. De kennisbank staat op `docs.stroomlijnen.nl`.

## Lokaal werken

Gebruik Node 22.12 of hoger en installeer de vastgelegde afhankelijkheden met `npm ci`. Start `npm run dev` voor de gecombineerde voorvertoning. De commerciële homepage staat daarin op `/commercieel/` en `/en/commercial/`. Taalwissels en navigatie houden de bezoeker bij de juiste versie.

| Commando | Doel | Uitvoer |
|---|---|---|
| `npm run build` | Hoofddomein, met de vier bestemmingen | `dist/` |
| `npm run build:commercial` | Commerciële website met eigen homepages op `/` en `/en/` | `dist-commercial/` |
| `npm run build:preview` | Gecombineerde voorvertoning met lokale commerciële homepages | `dist/` |

`npm run preview` serveert de laatst gebouwde `dist/`. Voor alleen de commerciële build gebruikt u `PUBLIC_SITE_AUDIENCE=commercial npm run preview`. De builds voor het hoofddomein en de preview gebruiken dezelfde uitvoermap. Publiceer de uitvoer van het bijbehorende commando.

## Inhoud en routes

- `src/components/SectorGateway.astro` bevat de sectorselectie.
- `src/components/HomeStory.astro` en `src/data/home-story.ts` bevatten het commerciële verhaal en de teksten voor beide talen.
- `src/components/CommercialPage.astro` en `src/data/commercial.ts` bevatten de pagina’s voor technologie, veiligheid, toepassingen, organisatie en contact.
- `config/public-sites.mjs` legt de publieke domeinen en commerciële routes vast. `src/data/site-target.ts` kiest de navigatie voor de betreffende build.
- `config/build-targets.mjs` genereert de sitemaps, `robots.txt` en de statische doorverwijzingen voor historische adressen.

De interactieve werkdag gebruikt voorbeeldwaarden. De locatiebeelden zijn conceptillustraties. De bestaande evenementfoto’s vermelden hun fotograaf.

De aparte documentatiesite beheert de technische artikelen en illustraties. Kennisbanklinks openen Nederlands op `docs.stroomlijnen.nl/` en Engels op `docs.stroomlijnen.nl/en/`. Voor een gezamenlijke private review kan `PUBLIC_DOCS_PREVIEW_ORIGIN` de HTTPS-origin van de bijbehorende documentatiepreview bevatten.

De productie-inrichting en de bestaande uitrol naar beide edge-servers staan in [DEPLOYMENT.md](DEPLOYMENT.md).
