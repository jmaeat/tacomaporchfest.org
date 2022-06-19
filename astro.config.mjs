import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import critters from 'astro-critters';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	experimental: {
		integrations: true,
	},
	integrations: [
		compress({
			html: false,
			svg: false,
		}),
		critters(),
		robotsTxt(),
		sitemap(),
		tailwind(),
	],
	site: 'https://www.tacomaporchfest.org',
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
