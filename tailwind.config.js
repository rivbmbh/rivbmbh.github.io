/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        'mn': '280px',
        // => @media (min-width: 280px) { ... }
        'lm': '420px',
        // => @media (min-width: 420px) { ... }
        '2xl': '1320px'
        // => @media (min-width: 1320px) { ... }
      },
      colors:{
        primary: '#22d3ee',
        darkText: '#0f172a',
        hover: '#67e8f9'
      },
      keyframes:{
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        leftRight: {
          '0%' : {width:'0%'},
          '100%' : {width:'max-content'},
        }
      },
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite',
        leftRight: 'leftRight 1s ease',
      }
    },
  },
  plugins: [],
}

