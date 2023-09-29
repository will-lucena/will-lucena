/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,css,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        xxxs: '220px',
        xxs: '300px'
      },
      fontFamily: {
        sans: ['Mooli', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
