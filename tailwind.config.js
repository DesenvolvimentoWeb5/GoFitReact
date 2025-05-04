/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo_padrao': '#7369ff',
        'roxo-gradiente': '#8679ff'
      }
    },
  },
  plugins: [],
};