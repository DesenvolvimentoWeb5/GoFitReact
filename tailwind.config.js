/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        '1000': '1000px',
      },
      colors: {
        'roxo_padrao': '#7369ff',
        'roxo-gradiente': '#8679ff'
      }
    },
  },
  variants: {
    extend: {
      transformStyle: ['responsive'],
      backfaceVisibility: ['responsive'],
      rotate: ['responsive'],
      perspective: ['responsive'],
    },
  },
  plugins: [],
};