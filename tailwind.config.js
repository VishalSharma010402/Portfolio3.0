/** @type {import('tailwindcss').Config} */
/**@type{import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'logo':[ "Protest Guerrilla", 'sans-serif']
      }
    },
  },
  plugins: [],
}