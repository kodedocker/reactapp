/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        custom: "#abcdef",
        primary: colors.purple,
        secondary: colors.gray,
        info: colors.indigo,
        success: colors.green,
      },
    },
  },
  plugins: [],
};
