import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pkgs/core/tailwind/src/classes/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mugi: {
          100: "#f9eadb",
          200: "#f2d2b6",
          300: "#eab487",
          400: "#e18c56",
          500: "#da6e35",
          600: "#cc582a",
          700: "#a94325",
          800: "#873725",
          900: "#6d2f21",
        },
        hat: {
          100: "#fae7e6",
          200: "#f6d4d2",
          300: "#efb6b2",
          400: "#e48c85",
          500: "#d25950",
          600: "#c14a41",
          700: "#a23b33",
          800: "#86342e",
          900: "#70312c",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("mugi", ".mugi &");
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
    require("@tailwindcss/forms")({
      strategy: "class",
    })
  ],
};
