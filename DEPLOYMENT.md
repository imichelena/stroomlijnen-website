# Releasing the Stroomlijnen sites

Build from the same Git revision with the root commands in [README.md](README.md). Serve each hostname from its matching directory in `release/`. The existing apex job can continue using `npm ci`, `npm run build` and the repository-root `dist/`. The four subdomains require their own host bindings. Pointing every hostname at the apex document root would serve the sector selector on all five sites.

For a host that builds directly from Git, set its repository root to this repository, its build command to `npm run build`, and its output directory to the corresponding `release/<hostname>`. On shared web servers, the host routing must select those same independent document roots on every origin. Support directory indexes and both variants of paths with a trailing slash. Serve the docs site's own 404 page for missing documentation routes.

The sector selector links to the matching Dutch or English edition of each site. Historical business routes on the apex forward to commercial. All sites link back to the gateway, and contact requests go to the two localized pages on the apex. The former contact and thank-you pages on commercial and Cultuur forward to those apex pages. The static redirects preserve incoming query strings and fragments. Keep these rules when configuring native redirects.

After publication, confirm the origin bindings, DNS and certificates for each hostname. Verify `/`, `/en/`, both contact routes, a deep link in each language and representative image and script assets through the public HTTPS addresses. The root verification command runs offline against the release, independently of DNS.

For a rollback, use the preceding release revision for all five document roots. See [ROLLBACK.md](ROLLBACK.md) for the older November 6 redesign history.
