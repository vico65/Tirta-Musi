/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter : ['Inter'],
        nunito : ['Nunito']
      },
      borderWidth: {
          'custom' : '16px' 
      }
    },
  },
  plugins: [],
}
