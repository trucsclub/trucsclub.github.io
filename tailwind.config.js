/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        text: '#e6e7f4',
        background: '#090a15',
        primary: '#beaada',
        secondary: '#331735',
        accent: '#b25fb9',
      }
    },
    fontFamily: {
      body: ['Inter', 'Charm', 'Italianno']
    }
  },
  plugins: [],
}

