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
			background: '#F7F5ED',
			copy: '#222325',
			primary: '#FC7557',
			secondary: '#FFC73A',
			tertiary: '#6689FF',
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
	plugins: [],
};
