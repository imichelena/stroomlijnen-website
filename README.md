# Stroomlijnen websites

The sector gateway, commercial website, Cultuur, Hospitality and technical documentation share a release. Dutch is the default on every host and the English edition starts at `/en/`.

| Website | Source | Production document root |
| --- | --- | --- |
| stroomlijnen.nl | apps/web | release/stroomlijnen.nl |
| commercieel.stroomlijnen.nl | apps/web | release/commercieel.stroomlijnen.nl |
| cultuur.stroomlijnen.nl | apps/cultuur | release/cultuur.stroomlijnen.nl |
| hospitality.stroomlijnen.nl | apps/hospitality | release/hospitality.stroomlijnen.nl |
| docs.stroomlijnen.nl | apps/docs | release/docs.stroomlijnen.nl |

Use Node.js 22.12 or newer. From the repository root:

```sh
npm ci
npm run build
npm run verify
```

The build installs the dependencies declared by each application's lockfile and verifies all five static document roots before replacing the release. It also emits the gateway in `dist/` for the existing apex hosting job. To work on an individual site, use the development or build scripts in its own directory.

All sectors share the existing contact form at `https://stroomlijnen.nl/contact/` and its English counterpart at `/en/contact/`. The same Formspree endpoint receives both languages. Contact and confirmation pages are maintained in `apps/web`.

See [deployment](DEPLOYMENT.md) for hosting and live checks.
