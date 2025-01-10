import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pkgs/**/src/*.{ts,tsx}",
    "./pkgs/**/src/**/*.{ts,tsx}",
    "./pkgs/**/core/*.{ts,tsx}",
    "./pkgs/**/core/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mugi: {
          100: "#FEEFB0",
          200: "#FED775",
          300: "#F1C071",
          400: "#FECB3A",
          500: "#FEBE00",
        },
        hat: {
          100: "E18E5A",
          200: "D35A50",
          300: "C12C47",
          400: "9E2E2C",
          500: "7E1D1A",
        },
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
