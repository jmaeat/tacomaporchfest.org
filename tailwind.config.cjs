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
			background: '#F3EDCE',
			copy: '#2E282A',
			primary: '#FC7557',
			secondary: '#495867',
			tertiary: '#FFD275',
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
