# Stroomlijnen Hospitality

Static Dutch and English website for hospitality.stroomlijnen.nl. Node.js 22 or newer is sufficient. The build has no external packages.

Run `npm run build` to generate the contents of the production document root in `dist-production/`. Run `npm run build:preview` for the private Sites preview, with review links to the matching Dutch and English gateway and documentation. The preview is emitted in `dist/`.

The homepage is served at `/` and `/en/`. The ESS guide is at `/batterijveiligheid/` and `/en/battery-safety/`. Edit the bilingual copy in `src/` and the layout in `build.mjs`. Charging requests and room packages are illustrative examples. The booking-system integration is on the 2027–2028 roadmap.
