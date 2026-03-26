# Deployment — stroomlijnen.nl

## The Rule

**Push to this repo. Never upload files directly to the server.**

No SCP, no rsync, no SSH into `/var/www/`. The repo is the single source of truth.

## Why

- We have **2 edge VPSes** (slm-edge + slm-edge-2) behind Cloudflare DNS round-robin
- Direct uploads only hit one server → the other serves stale content → half of visitors see broken site
- No version control = no rollback when something breaks
- This already caused a production outage on March 26, 2026

## How to Deploy

1. Make your changes locally
2. Build: `npm run build` (Astro → `dist/`)
3. Commit and push to `main`
4. Deployment to both edge servers is automated

## Infrastructure

| Server | IP | Role |
|--------|-----|------|
| slm-edge | 46.224.113.157 | Primary edge (Caddy + static files) |
| slm-edge-2 | 91.107.213.172 | HA mirror (identical config) |

Both servers serve from `/var/www/stroomlijnen/`.
Both are behind Cloudflare DNS (round-robin).
Both must always have identical content.

## Stack

- **Framework:** Astro 6 (static site generator)
- **Hosting:** Caddy on both edge VPSes
- **CDN:** Cloudflare (proxied)
- **TLS:** Caddy auto-cert via Cloudflare DNS challenge

## Domain

- `stroomlijnen.nl` is canonical (not .nu)
- `www.stroomlijnen.nl` → CNAME to root

## For AI Agents

If you are an AI agent working on this repo:
- **NEVER** deploy by uploading files to a server via SSH/SCP/rsync
- **ALWAYS** commit to this repo and push
- The deployment pipeline handles the rest
- If you don't have push access, ask your human to push for you
- Read `src/pages/` for the current site structure
