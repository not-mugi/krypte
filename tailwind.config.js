import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pkgs/**/src/*.{ts,tsx}", "./pkgs/**/src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        straw: "#F1C071",
        strawRed: "#D25950",
        strawPale: "#FEE989",
        strawRedPale: "#D25A50",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("mugi", ".mugi &");
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
