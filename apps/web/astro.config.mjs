// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import { buildTargetFiles } from './config/build-targets.mjs';
import { commercialOrigin, gatewayOrigin } from './config/public-sites.mjs';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'PUBLIC_');
const audience = env.PUBLIC_SITE_AUDIENCE || 'preview';
if (!['gateway', 'commercial', 'preview'].includes(audience)) {
  throw new Error('PUBLIC_SITE_AUDIENCE must be gateway, commercial or preview.');
}
if (audience === 'preview') {
  for (const key of ['PUBLIC_DOCS_PREVIEW_ORIGIN', 'PUBLIC_HOSPITALITY_PREVIEW_ORIGIN', 'PUBLIC_CULTUUR_PREVIEW_ORIGIN']) {
    if (!env[key]) continue;
    const origin = new URL(env[key]);
    if (origin.protocol !== 'https:' || origin.pathname !== '/' || origin.search || origin.hash || origin.username || origin.password) {
      throw new Error(`${key} must be a complete HTTPS origin.`);
    }
  }
}

export default defineConfig({
  site: audience === 'commercial' ? commercialOrigin : gatewayOrigin,
  outDir: audience === 'commercial' ? './dist-commercial' : './dist',
  integrations: [buildTargetFiles(audience)],
  vite: { plugins: [tailwindcss()] }
});
