/* eslint-env node */
/* eslint-disable no-undef */

const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  safelist: [
    'bg-unkd-section',
    "bg-[url('https://unkd.com.ua/wp-content/uploads/2022/04/bg-intro.svg')]",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Bricolage Grotesque Variable',
          'Inter Variable',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [typography],
};


