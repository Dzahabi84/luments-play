/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          "900": '#171717',
          "800": '#1c1c1c'
        }
      },
      height: {
        'card': "270px",
        'carousel': '500px'
      },

      width: {
        "card": "160px"
      },
      dropShadow: {
        'custom': "3px -1px 39px rgba(0,0,0,1)",
      }
    },
  },
  plugins: [],
})