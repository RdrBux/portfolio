/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        flat: '-5px 5px 0px rgba(0, 0, 0, 0.25)',
        'flat-r': '5px 5px 0px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      inter: ['"Inter Tight"', 'sans-serif'],
      playfair: ['"Playfair Display", serif'],
      noto: ['"Noto Serif Display", serif;'],
      respira: ['"Respira-Black"', '"Inter Tight"', 'sans-serif'],
      cabinet: ['"Cabinet Grotesk"', '"Inter Tight"', 'sans-serif'],
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
