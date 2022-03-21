import { defineConfig } from 'astro/config';

export default defineConfig({
  renderers: [],
  buildOptions: {
    site: 'https://tacomaporchfest.org',
    sitemap: true,
  },
});
