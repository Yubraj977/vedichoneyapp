/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
   "./components.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "/app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  
  ],
  theme: {
    extend: {
      
      colors: {
        first:'#333945',
        second:'#4C4B4B',
        whitee:'#EAF0F1',
        secondary: "#FD624B",
      },
      spacing:{
        side:'10',
        top:'20px'
      }
    },
  },
  plugins: [],
}

