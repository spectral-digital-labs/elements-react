import chroma from "chroma-js";

export const shadeRange = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

type ColorShade = (typeof shadeRange)[number];

type HexColor = string;

type ColorShadeMapping = Record<ColorShade, HexColor>;

const generateShades = (baseColor: HexColor): ColorShadeMapping => {
  const lightestColor = chroma(baseColor).brighten(3.04).hex();
  const darkestColor = chroma(baseColor).darken(2.8).hex();

  const colors = chroma
    .scale([lightestColor, baseColor, darkestColor])
    .colors(shadeRange.length);

  const mappedShades: { [key in ColorShade]?: HexColor } = {};

  shadeRange.forEach((shade, i) => {
    mappedShades[shade] = colors[i];
  });

  return mappedShades as ColorShadeMapping;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const semanticColorKeys = [
  "primary",
  "secondary",
  "background",
  "info",
  "dark",
] as const;

type SemanticKey = (typeof semanticColorKeys)[number];

function createSemanticColors(semanticPalette: Record<SemanticKey, HexColor>) {
  const semanticColors = {} as Record<SemanticKey, ColorShadeMapping>;

  Object.keys(semanticPalette).forEach((key) => {
    const semanticKey = key as SemanticKey;
    semanticColors[semanticKey] = generateShades(semanticPalette[semanticKey]);
  });

  return semanticColors;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// @TODO: Come up with a real semantic palette
const semanticPalette: Record<SemanticKey, HexColor> = {
  primary: "#e63946", // crimson
  secondary: "#457B9D", // steelBlue
  background: "#f1faee", // mint
  info: "#A8DADC", // cyan
  dark: "#1D3557", // navyBlue
};

// @TODO: Create contrasting colors for text

// @TODO: Create light and dark variants, seen here:
// https://tailwindcss.com/docs/customizing-colors#color-object-syntax

const semanticColors = createSemanticColors(semanticPalette);

export default semanticColors;
