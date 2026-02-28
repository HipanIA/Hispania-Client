import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import { mode } from "@chakra-ui/theme-tools";

import "./App.css";

import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// Hispania palette — inspirado en LessWrong/Alignment Forum
// Light: warmth + legibility | Dark: readable without strain
const colors = {
  // Brand accent — verde sobrio
  brand: {
    50:  "#f0f7f0",
    100: "#d6ead6",
    200: "#aad1aa",
    300: "#76b376",
    400: "#4e9a4e",
    500: "#3a7d3a",  // primary green
    600: "#2e6430",
    700: "#234d25",
    800: "#183619",
    900: "#0d1f0e",
  },
  // Grises cálidos para texto y fondos
  warm: {
    50:  "#FAFAF7",  // background light
    100: "#F3F3EE",  // sidebar / card
    200: "#E8E8E1",  // dividers
    300: "#C9C9BF",  // secondary text light
    400: "#8C8C82",  // muted
    500: "#5C5C52",  // body text secondary
    600: "#3D3D35",  // body text
    700: "#2A2A22",  // headings light mode
    800: "#1A1A14",  // primary text
    900: "#0F0F0A",
  },
  // Dark mode backgrounds
  dark: {
    50:  "#3A3A32",
    100: "#2E2E26",
    200: "#252520",
    300: "#1E1E19",
    400: "#181813",
    500: "#131310",
    600: "#0F0F0C",
    700: "#0A0A08",
  },
};

const fonts = {
  // Interfaz (nav, botones, etiquetas)
  body:    `'Inter', system-ui, -apple-system, sans-serif`,
  heading: `'Playfair Display', Georgia, 'Times New Roman', serif`,
  mono:    `'IBM Plex Mono', 'Fira Code', monospace`,
};

const styles = {
  global: (props) => ({
    body: {
      background: mode(colors.warm[50], colors.dark[400])(props),
      color:      mode(colors.warm[800], '#EAEAE0')(props),
      lineHeight: "1.7",
    },
    "h1, h2, h3, h4": {
      fontFamily: fonts.heading,
      fontWeight: "700",
      lineHeight: "1.3",
    },
    // Artículos — tipografía de lectura larga
    ".article-body": {
      fontFamily: `'Playfair Display', Georgia, serif`,
      fontSize:   "1.05rem",
      lineHeight: "1.85",
      color:      mode(colors.warm[700], '#DEDED2')(props),
    },
    ".article-body p": { marginBottom: "1.2em" },
    ".article-body h1": { fontSize: "2rem",   marginTop: "1.8em", marginBottom: "0.5em" },
    ".article-body h2": { fontSize: "1.5rem", marginTop: "1.5em", marginBottom: "0.4em" },
    ".article-body h3": { fontSize: "1.2rem", marginTop: "1.2em", marginBottom: "0.3em" },
    ".article-body blockquote": {
      borderLeft: `3px solid ${colors.brand[400]}`,
      paddingLeft: "1em",
      color:       mode(colors.warm[500], '#AAA')(props),
      fontStyle:   "italic",
    },
    // Scrollbar discreta
    "::-webkit-scrollbar":       { width: "6px" },
    "::-webkit-scrollbar-track": { background: "transparent" },
    "::-webkit-scrollbar-thumb": {
      background:   mode(colors.warm[200], colors.dark[100])(props),
      borderRadius: "3px",
    },
  }),
};

const components = {
  Button: {
    defaultProps: { colorScheme: "brand" },
    variants: {
      ghost: (props) => ({
        _hover: { bg: mode(colors.warm[100], colors.dark[200])(props) },
      }),
    },
  },
  Link: {
    baseStyle: (props) => ({
      color:           mode(colors.brand[600], colors.brand[300])(props),
      textDecoration:  "none",
      _hover: { textDecoration: "underline" },
    }),
  },
  Heading: {
    baseStyle: {
      fontFamily: fonts.heading,
    },
  },
  // Cards de artículo
  Box: {
    variants: {
      articleCard: (props) => ({
        background:   mode("white", colors.dark[300])(props),
        borderRadius: "4px",
        border:       `1px solid ${mode(colors.warm[200], colors.dark[100])(props)}`,
        padding:      "1.5rem",
        _hover: {
          borderColor: mode(colors.brand[400], colors.brand[600])(props),
          boxShadow:   "sm",
        },
      }),
    },
  },
};

export default extendTheme({ config, styles, colors, fonts, components });
