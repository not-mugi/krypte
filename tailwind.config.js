import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pkgs/**/src/*.{ts,tsx}", "./pkgs/core/tailwind/src/*.{ts,tsx}"],
  safelist: [
    {
      pattern: /bg-(mugi|straw)-(100|200|300|400|500)/,
      variants: ["dark", "light", "mugi", "hocus", "hover", "focus"],
    },
    {
      pattern:
        /bg-(slate|gray|zinc|neutral|stone|red|orange|yellow|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(400|500|600|700|800)/,
      variants: ["dark", "light", "mugi", "hocus", "hover", "focus"],
    },
    {
      pattern: /text-(mugi|straw)-(100|200|300|400|500)/,
      variants: ["dark", "light", "mugi", "hocus", "hover", "focus"],
    },
    {
      pattern:
        /text-(slate|gray|zinc|neutral|stone|red|orange|yellow|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(400|500|600|700|800)/,
      variants: ["dark", "light", "mugi", "hocus", "hover", "focus"],
    },
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
