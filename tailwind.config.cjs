const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
