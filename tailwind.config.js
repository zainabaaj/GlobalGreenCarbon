import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors";

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],

  darkMode: ["class"],
  safelist: [
    {
      pattern: /border-(sky|pink|purple)-500\/40/,
    },
    {
      pattern: /text-(sky|pink|purple)-500/,
    },
    {
      pattern: /bg-(sky|pink|purple)-500\/20/,
    },
    {
      pattern: /border-(sky|pink|purple)-500\/20/,
      variants: ["hover"],
    },
    {
      pattern: /bg-(sky|pink|purple)-500\/5/,
      variants: ["hover"],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    fontFamily: {
      body: ["REM", "sans-serif"],
    },

    extend: {
      colors: {
        primary: {
          50:  '#e6f4ea',
          100: '#cce9d5',
          200: '#99d3ab',
          300: '#66bd82',
          400: '#33a758',
          500: '#318741', // base
          600: '#266b33',
          700: '#1c5026',
          800: '#113419',
          900: '#07190d',
          DEFAULT: '#318741',
        },
        beige: '#f9f5f0',
      },

      zIndex: {
        60: "60",
        70: "70",
      },

      keyframes: {
        load: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },

  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    createThemes(
      {
        light: {
          default: colors.zinc,
        },

        dark: {
          default: {
            50:  "#0c1c13", // very dark green-tinted
            100: "#123c25",
            200: "#1a5c38",
            300: "#227d4b",
            400: "#2a9e5d",
            500: "#31b96c", // lighter version of your primary
            600: "#37d27b",
            700: "#5ee69a",
            800: "#a7f1c5",
            900: "#d7fae5",
            950: "#f4fdf7",
          },
        },
      },
      {
        defaultTheme: "light",
      }
    ),
  ],
};
export default config;
