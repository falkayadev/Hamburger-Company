/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        custom: {
          //1: "#9A3B3B",
          1: "#6C91BF",
          2: "#C08261",
          3: "#E2C799",
          4: "#6E7271",
          5: "#3A3E40",
          6: "#e1af5d",
          7: "#f8c869",
          8: "#d95b41",
        },
      },
      fontFamily: {
        logoFont: ["Pacifico", "cursive"],
        mainFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
  ],
};
