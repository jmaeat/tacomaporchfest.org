const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			inherit: 'inherit',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			background: '#f0ecc9',
			copy: '#463529',
			primary: '#cf4219',
			secondary: '#df9d29',
			tertiary: '#097c7e',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '0px',
			},
			screens: {
				sm: '100%',
				lg: '1080px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Recoleta', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
