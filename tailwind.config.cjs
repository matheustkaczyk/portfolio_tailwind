/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#0F1117',
      },
      screens: {
        'xsm': '412px'
      }
    },
  },
  plugins: [],
}
