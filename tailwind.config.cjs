const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
