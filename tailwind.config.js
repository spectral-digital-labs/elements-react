// From https://tailwindcss.com/docs/guides/vite
import { createColorPalettes } from "palets";

const colorsFromPalets = createColorPalettes([
  {
    colorName: "black",
    // hex for pink: #f87171
    singleValue: " #f87171", // <-- whatever you put here will display when "black" is called
  },
  { colorName: "white", singleValue: "#ffffff" },
  {
    colorName: "blue",
    primaryValue: "#60a5fa",
    type: "alpha",
  },
  {
    colorName: "red",
    // hex for green: #34d399
    primaryValue: "#34d399",
  },
]);

console.log(colorsFromPalets);

/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colorsFromPalets,
    },
  },
  plugins: [],
};
