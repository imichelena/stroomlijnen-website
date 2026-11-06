# Rollback — astra-redesign merge (2026-11-06)

## What happened
- `main` on `imichelena/stroomlijnen-website` moved from `39c12b7` → merge commit `6466c0a`
  (which brings in the homepage fixes `63f5295` + the Astra redesign `7da6e62`).
- `astra-redesign` branch remains in place and untouched.

## If the new site is broken and you want the old site back, NOW (~2 min):

From any machine with GitHub push access (agent-04: use the airig route):

```bash
git clone git@github.com:imichelena/stroomlijnen-website.git && cd stroomlijnen-website
git push --force origin 39c12b7:main   # instantly reverts main to the pre-redesign state
```

Cloudflare Pages will rebuild the previous site automatically (~1-2 min).

Non-force alternative (keeps history linear, same effect):
```bash
git revert -m 1 6466c0a && git push origin main
```

## Partial rollback (keep fixes, drop only the redesign)
```bash
git revert -m 1 6466c0a   # reverts merge but keeps 63f5295 (reveal-safety fixes)
```

## To re-apply later
```bash
git merge astra-redesign   # branch still exists; no work is lost
```

## Verification of the new build (done before merge)
- npm ci + clean Astro build, 17 pages
- 294 asset references checked across all 16 pages — 0 broken
- All images decode (scenes webp set generated from the imagegen PNGs)
- /kennisbank/, /en/, NL pages render; contact form flow untouched
