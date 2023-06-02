/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blueChess':'#3B58DD',
        'text-gray':'#9b9a9a',
        'border-color': '#dee2e6',
        'icons-color': '#6c757d'
      },

      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, #3b58dd, #6279e4, #b1bcf1)'
      },

      boxShadow: {
        '3xl': '0 6px 24px #0000000d, 0 0 0 1px #00000014',
        '4xl': '0 7px 29px #64646f33',
      },
      maxWidth: {
        '1200': '1200px',
      },
      borderRadius: {
        'roundedTeamPhoto':'[calc(0.375rem_-_1px)]',
      },
      fontSize: {
        '2xl': '2rem',
      },
      flex: {
        '100': '0 100%'
      },
      gridTemplateColumns: {
        'contact': '60% 40%'
      }
    },
  },
  plugins: [],
}

