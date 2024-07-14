const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: { 'xs':{ 'min' :'425px', 'max': '640'}, ...defaultTheme.screens },
    extend: {},
  },
  plugins: [],
}

