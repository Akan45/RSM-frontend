/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {  
        'md': '880px',
        'lg' :'1025px'
      },},
    
        fontFamily: {
          led: ["Led-counter", "sans-serif"],
          Aeonik:["Aeonik","sans-serif"],
          Aeo:["Aeo","sans-serif"],
        },
      
          animation: {
            marquee: 'marquee 7s linear infinite',
            marquee2: 'marquee2 7s linear infinite',
          },
          keyframes: {
            marquee: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-100%)' },
            },
            marquee2: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(0%)' },
            },
          },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
