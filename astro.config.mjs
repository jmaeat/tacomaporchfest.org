import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	experimental: {
		integrations: true,
	},
	integrations: [
		compress({
			html: false,
		}),
		tailwind(),
		sitemap(),
	],
	site: 'https://www.tacomaporchfest.org',
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
