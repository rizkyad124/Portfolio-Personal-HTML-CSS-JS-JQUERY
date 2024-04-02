/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        primary: '#EEBF63',
        secondary: '#ffffff',
      },
      screens: {
        '2xl': "1320px"
      },
      
    },
  },
  plugins: [],
}

