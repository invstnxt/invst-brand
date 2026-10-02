// tailwind.brand.ts
// INVST Brand Standards 2026 v8 — design tokens.
// Import into tailwind.config.ts: theme.extend = { ...invstBrand }
// RULES: #08FF08 is RACING-ONLY. #002C5F is COLTS-ONLY. Neither belongs in INVST OS or Vela UI.
// "INVST" is always all caps in UI copy. Tagline: "Making Money Work For You".

export const invstBrand = {
  colors: {
    invst: {
      green: "#A9CF38",          // primary — CTAs, active states, accents, focus rings
      "green-dark": "#8FB32A",   // hover state for green
      "green-tint": "#F4F8E8",   // subtle fills, selected rows, zebra striping
      black: "#000000",          // headers, primary text
      grey: "#5A5A5A",           // secondary text, labels
      "grey-light": "#D3D3D3",   // borders, dividers, disabled
      white: "#FFFFFF",
      // Secondary palette — status + data-viz only, never as brand accents:
      red: "#D21404",            // errors, overdue SLA, NIGO
      "red-deep": "#B92222",     // destructive hover
      blue: "#4B9CD3",           // informational, links in dense tables
      yellow: "#FEE50F",         // warnings (sparingly)
      amber: "#FFBF00",          // pending / attention states
    },
  },
  fontFamily: {
    sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
  },
};

/* app/layout.tsx font wiring:

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});
// <html className={montserrat.variable}> ... — Montserrat everywhere, Montserrat Bold (700/800) for emphasis.
*/
