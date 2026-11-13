# Deployment

The gateway and commercial site are published as part of the five-host release. See the [root deployment guide](../../DEPLOYMENT.md) for production document roots and the shared contact form.

Within this directory, `npm run build` builds the gateway, `npm run build:commercial` builds the commercial site and `npm run build:preview` builds a combined local review. In preview mode, the PUBLIC_DOCS_PREVIEW_ORIGIN and PUBLIC_HOSPITALITY_PREVIEW_ORIGIN settings can point to HTTPS preview hosts.
