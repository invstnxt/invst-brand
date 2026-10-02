// The brand palette, as data so the swatch grid renders from one source and
// updates are a one-file edit. Values are taken from the INVST Brand Standards
// 2026 (FINAL) — HEX + RGB are the sanctioned pairs. Per the requirements doc,
// CMYK stays "verify against print profile" until a print standard is chosen.

export type ColorGroup = "primary" | "secondary" | "neutral";

export interface BrandColor {
  name: string;
  hex: string;
  rgb: [number, number, number];
  pms: string; // closest Pantone Solid Coated match (verify against a Pantone book)
  role: string; // how/where it's used
  group: ColorGroup;
}

export const COLORS_SOURCE_NOTE =
  "Source: INVST Brand Standards 2026 (FINAL). HEX & RGB are the sanctioned values; CMYK is deferred until a print profile is chosen.";

export const BRAND_COLORS: BrandColor[] = [
  // Primary
  { name: "INVST Green", hex: "#A9CF38", rgb: [169, 207, 56], pms: "375 C", role: "Primary — the shared brand identifier.", group: "primary" },
  { name: "ADA Compliance", hex: "#435316", rgb: [67, 83, 22], pms: "574 C", role: "Primary — ADA-compliant deep green for accessible text and contrast on light backgrounds (ADA Web).", group: "primary" },

  // Secondary
  { name: "Light Blue", hex: "#4B9CD3", rgb: [75, 156, 211], pms: "279 C", role: "Secondary — accents and links.", group: "secondary" },
  { name: "Colts Navy", hex: "#002C5F", rgb: [0, 44, 95], pms: "540 C", role: "Secondary — Colts co-brand contexts.", group: "secondary" },
  { name: "Amber", hex: "#FFBF00", rgb: [255, 191, 0], pms: "7548 C", role: "Secondary — warning / pending states.", group: "secondary" },
  { name: "Yellow", hex: "#FEE50F", rgb: [254, 229, 15], pms: "102 C", role: "Secondary — bright accent.", group: "secondary" },
  { name: "Red", hex: "#D21404", rgb: [210, 20, 4], pms: "485 C", role: "Secondary — attention / error states.", group: "secondary" },
  { name: "Dark Red", hex: "#B92222", rgb: [185, 34, 34], pms: "187 C", role: "Secondary — deep red accent.", group: "secondary" },
  { name: "IU Crimson", hex: "#A90533", rgb: [169, 5, 51], pms: "201 C", role: "Secondary — IU crimson; deep crimson for co-brand contexts.", group: "secondary" },
  { name: "Racing Green", hex: "#08FF08", rgb: [8, 255, 8], pms: "802 C", role: "Secondary — racing livery / motorsport co-brand contexts.", group: "secondary" },

  // Neutrals
  { name: "White", hex: "#FFFFFF", rgb: [255, 255, 255], pms: "n/a (white)", role: "Neutral — the white-canvas base and negative space.", group: "neutral" },
  { name: "Light Gray", hex: "#D3D3D3", rgb: [211, 211, 211], pms: "Cool Gray 2 C", role: "Neutral — backgrounds and dividers.", group: "neutral" },
  { name: "Mid Gray", hex: "#5A5A5A", rgb: [90, 90, 90], pms: "Cool Gray 11 C", role: "Neutral — secondary text.", group: "neutral" },
  { name: "Black", hex: "#000000", rgb: [0, 0, 0], pms: "Process Black C", role: "Neutral — maximum contrast, body text.", group: "neutral" },
];

export const COLOR_GROUP_LABEL: Record<ColorGroup, string> = {
  primary: "Primary",
  secondary: "Secondary",
  neutral: "Neutrals",
};

export function rgbString(c: BrandColor): string {
  return `${c.rgb[0]}, ${c.rgb[1]}, ${c.rgb[2]}`;
}

// The type system from the Standards: Montserrat (primary), Myriad (secondary).
export const FONT_NOTE = "Primary: Montserrat · Secondary: Myriad";

export interface TypeStyle {
  name: string;
  sample: string;
  className: string;
  note: string;
}

export const TYPE_SCALE: TypeStyle[] = [
  { name: "Display", sample: "INVST", className: "text-3xl font-extrabold tracking-tight text-invst-ink", note: "Montserrat ExtraBold" },
  { name: "Heading", sample: "Section heading", className: "text-2xl font-extrabold tracking-tight text-invst-ink", note: "Montserrat ExtraBold" },
  { name: "Subheading", sample: "Subheading", className: "text-lg font-bold text-invst-ink", note: "Montserrat Bold" },
  { name: "Body", sample: "Body copy for everyday reading.", className: "text-sm text-neutral-700", note: "Montserrat Regular" },
  { name: "Label", sample: "OVERLINE LABEL", className: "text-xs font-bold uppercase tracking-wide text-neutral-500", note: "Montserrat Bold, uppercase" },
];
