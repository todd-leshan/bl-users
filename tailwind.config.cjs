/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#FF526B",
      secondary: "#AD0A0A",
      third: "#00004C",
      theme: {
        1: "#FFDACD",
        2: "#FFFAEE",
        3: "#FFED91",
        4: "#31C7BF",
      }
    }
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
        },
      });
    },
  ],
};
