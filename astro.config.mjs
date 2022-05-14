import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	experimental: {
		integrations: true,
	},
	integrations: [compress({ html: false }), tailwind()],
	site: 'https://tacomaporchfest.org',
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
