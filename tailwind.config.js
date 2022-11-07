/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbfaf4',
          100: '#f9f0bd',
          200: '#f1dd81',
          300: '#dcb84f',
          400: '#bd8e2a',
          500: '#9e6f15',
          600: '#80550d',
          700: '#62400c',
          800: '#432c0b',
          900: '#2c1b08',
        },
      },
    },
    fontFamily: {
      inter: ['"Inter Tight"', 'sans-serif'],
      respira: ['"Respira-Black"', '"Inter Tight"', 'sans-serif'],
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
