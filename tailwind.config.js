/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F4EDDF',
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
