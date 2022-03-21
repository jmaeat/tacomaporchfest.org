import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  renderers: [],
  integrations: [tailwind()],
  buildOptions: {
    site: 'https://tacomaporchfest.org',
    sitemap: true,
  },
});
