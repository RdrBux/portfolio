/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        flat: '-5px 5px 0px rgba(0, 0, 0, 0.25)',
        'flat-r': '5px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        pulso: 'pulso 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      keyframes: {
        pulso: {
          '0%, 65%, 85%, 100%': { opacity: 0.1 },
          '75%': { opacity: 1 },
        },
      },
    },
    fontFamily: {
      cabinet: ['"Cabinet Grotesk"', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
