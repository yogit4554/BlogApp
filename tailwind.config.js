/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customHeaderBg: '#424874',
        customBorder:'#A6B1E1',
        customBodyBg:'#DCD6F7',
        customCardBg:'#A6B1E1',
        customHoverColor:'#F4EEFF',
        customTextColor:'#DCD6F7',
      }
    },
  },
  plugins: [],
}