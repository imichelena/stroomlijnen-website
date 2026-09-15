# AGENTS.md — stroomlijnen.nl

Instructies voor AI-agents die aan deze repository werken.

## Project

De publieke marketingsite van **Stroomlijnen B.V.** (CPO — laadinfrastructuur
voor culturele locaties en transport).

- **Domein:** https://stroomlijnen.nl (canonical; `.nl`, niet `.nu`)
- **Stack:** Astro 6 (static output) + Tailwind 4 via `@tailwindcss/vite`
- **Node:** ≥ 22.12.0
- **Repo:** https://github.com/imichelena/stroomlijnen-website (private)

## Relatie tot Cultuurstroom

Er is een zustersite: **cultuurstroom.org** (repo
`imichelena/cultuurstroom-website`) — het culturele programma, gericht op
venue-managers en artistiek directeuren, met een cultureler toon.

Dit is **niet** die site. Kom je hier een `AGENTS.md` tegen die over
Cultuurstroom of `cultuurstroom.org` gaat, dan is dat een vergissing — meld
het en werk door met dit bestand.

## Structuur

```
src/pages/       index, theaters, transport, over-ons, contact, thanks
src/layouts/     Layout.astro (nav, footer, <head>)
src/styles/      global.css (CSS-variabelen: --cyan #00B0E4,
                 --green #84BD00, --white, --text; donkerblauw #0C2340)
public/          logo's, teamfoto's, public/images/charger-*.jpg
```

Pagina's zijn losse `.astro`-bestanden; er is geen CMS. Content wijzigen =
het bestand aanpassen en pushen.

## Deploy — dit is de belangrijkste regel

**Push naar `main`. Nooit bestanden direct naar een server uploaden.**

Geen SCP, geen rsync, geen SSH naar `/var/www/`.

Waarom: er staan **twee edge-VPS'en** achter Cloudflare DNS round-robin
(slm-edge `46.224.113.157` + slm-edge-2 `91.107.213.172`, beide serveren uit
`/var/www/stroomlijnen/`). Een directe upload raakt maar één server → de
andere serveert verouderde content → de helft van de bezoekers ziet een
kapotte of oude site. Dit heeft al eens een outage veroorzaakt.

Werkwijze:

1. Wijzig in `src/`
2. `npm install` (eenmalig) en `npm run build` — controleer dat het bouwt
3. Commit en push naar `main`
4. De pipeline deployt naar beide edges

Push je naar `main`, dan staat het binnen enkele ogenblikken live. Er is geen
staging-omgeving; test dus lokaal met `npm run dev` (poort 4321) of
`npm run preview`.

## Conventies

- **Taal:** alle content in het Nederlands.
- **Terminologie:** altijd **"lader"**, nooit "laadpaal".
- **Commit-boodschappen:** beschrijvend, in het Nederlands of Engels
  (bestaande historie is gemengd).
- **`dist/` staat in `.gitignore`** — build-output hoort niet in git. Bouw
  lokaal of laat de pipeline bouwen.
- Geen secrets, tokens of persoonsgegevens in de repo.

## Merk & toon

- Klantgericht, concreet, met echte cijfers per locatie. Geen holle claims.
- Doelgroep: theatertechnici, venue-managers, gemeentelijke
  duurzaamheidsafdelingen, transportbedrijven.
- Vermijd zelfpromotie bovenop het verhaal; open met het probleem van de
  klant.

## Aanverwante bronnen

- **Wiki:** http://100.70.17.124:8088 — o.a. #7 (Brand Guide — voice, stijl,
  templates), #15 (Company Context), #20 (Git Repositories)
- **Zustersite:** https://cultuurstroom.org
- **Content-eigenaar:** Jacco Patist (jacco@stroomlijnen.nl)
- **Techniek:** Ignacio Michelena (ignacio@stroomlijnen.nl)
