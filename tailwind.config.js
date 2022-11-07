/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* gold: {
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
        }, */
        gold: {
          50: '#FAF7EA',
          100: '#F6EED5',
          200: '#EEDFAF',
          300: '#E5CF85',
          400: '#DDBF60',
          500: '#D4AF37',
          600: '#B09026',
          700: '#826A1C',
          800: '#584813',
          900: '#2A2209',
        },
        /* bronzegold: {
          50: '#FAF7F0',
          100: '#F5F0E0',
          200: '#E9DEBE',
          300: '#DFCF9F',
          400: '#D4BE7D',
          500: '#C9AE5D',
          600: '#B0933B',
          700: '#86702D',
          800: '#58491D',
          900: '#2E260F',
        }, */
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
