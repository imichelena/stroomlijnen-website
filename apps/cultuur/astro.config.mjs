import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cultuur.stroomlijnen.nl',
  trailingSlash: 'always',
  vite: {plugins: [tailwindcss()]},
});
