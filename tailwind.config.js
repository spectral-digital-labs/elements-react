// From https://tailwindcss.com/docs/guides/vite

import semanticColors from "./theme";

/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: semanticColors,
      colors: semanticColors,
    },
  },
  plugins: [],
};
