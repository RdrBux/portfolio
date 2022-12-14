/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        flat: '-5px 5px 0px rgba(0, 0, 0, 0.25)',
        'flat-r': '5px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 },
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
  plugins: [],
};
