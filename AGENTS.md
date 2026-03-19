# AGENTS.md — Cultuurstroom.org

## Project Overview
Website for **Cultuurstroom** — an initiative connecting cultural venues (theaters, concert halls, museums) with sustainable EV charging infrastructure. Part of the Stroomlijnen ecosystem.

**Domain:** https://cultuurstroom.org
**Stack:** Astro 6 (static site generator)
**Repo:** https://github.com/imichelena/cultuurstroom-website (private)

## Relationship to Stroomlijnen
- Stroomlijnen is the CPO (Charge Point Operator) — the technical/commercial entity
- Cultuurstroom is the cultural program — aimed at venue managers, artistic directors, sustainability officers
- Different audience, different tone, same underlying infrastructure

## Brand & Tone
- **Audience:** Cultural venue managers, theater technical directors, municipality sustainability teams
- **Tone:** Cultureel, inspirerend, duurzaam — more cultural/artistic than Stroomlijnen's corporate tone
- **Language:** Dutch (primary)
- **Key message:** "Culturele locaties als duurzame energiehubs" — Cultural venues as sustainable energy hubs
- **Theme:** The intersection of culture, sustainability, and technology

## Technical Setup
- **Framework:** Astro 6, static output
- **Node:** ≥ 22.12.0
- **Build:** `npm run build` → `./dist/`
- **Dev:** `npm run dev` → `localhost:4321`
- **Deploy:** Static files to slm-edge via Caddy (same as stroomlijnen.nl)
- **DNS:** Cloudflare (cultuurstroom.org) → slm-edge (46.224.113.157)

## Deployment
**Auto-deploy via Cloudflare Pages.** Every push to `main` triggers a build and deploy.
- **Live URL:** https://cultuurstroom.org
- **Workers dev URL:** https://cultuurstroom-website.ignaciomichelena.workers.dev
- **Build:** `npm run build` → `./dist/`
- Just push to `main` — Cloudflare handles the rest.

## Content Owner
**Jacco Patist** manages content via his Telegram agent. Workflow:
1. Edit files in `src/pages/` and `src/layouts/`
2. Commit and push to `main`
3. Auto-deploys in ~30 seconds

## Content Ideas (from Stroomlijnen context)
- Why theaters are perfect for EV charging (idle grid capacity during daytime)
- Revenue model: €0.10/kWh passive income for venues
- Case study: Lichtwerk Theater (first partner)
- SPRILA subsidy — covers hardware cost
- ESS (Energy Storage) — "The Show Must Go On" with battery backup
- Solar + battery + EV charging = energy hub
- Zero-emission zone compliance for tour buses/logistics

## Team
- **Jacco Patist** — Content owner, commercial lead (jacco@stroomlijnen.nu)
- **Ignacio Michelena** — Technical support (ignacio@stroomlijnen.nu)

## Related Resources
- Stroomlijnen website: https://stroomlijnen.nl (repo: stroomlijnen-website)
- Logo assets: coordinate with Ignacio for Cultuurstroom branding
- Photos: Lichtwerk venue photos available in stroomlijnen-website/public/photos/

## Git Workflow
- Branch: `main`
- Commit messages: descriptive, English
- Push directly to main
