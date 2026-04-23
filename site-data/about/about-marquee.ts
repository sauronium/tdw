// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE › MARQUEE / STAGGERED GRID SECTION
//  Edit heading text and the images shown in the grid here.
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface MarqueeImage {
  /** Image URL or local path (e.g. "/crafts/branding.jpg") */
  src: string;
  alt: string;
}

// ── Section Heading ───────────────────────────────────────────
export const aboutMarqueeHeading = {
  text:         "Every craft,\nunder one roof.",
  fontFamily:   fonts.heading,
  fontSize:     "text-4xl md:text-5xl lg:text-6xl",
  fontWeight:   "font-medium",
  letterSpacing:"tracking-tight",
  color:        "#171717",
  colorTailwind:"text-[#171717]",
  lineHeight:   "leading-[1.1]",
  textAlign:    "text-center",
  marginBottom: "mb-12 md:mb-16",
};

// ── Grid Images ───────────────────────────────────────────────
// Replace the placeholder entries with real craft/portfolio images.
// The StaggeredGrid component expects image `src` strings,
// so the component maps this array to src values.
export const aboutMarqueeImages: MarqueeImage[] = Array.from(
  { length: 40 },
  () => ({
    src: "/tdw-logo.svg",
    alt: "The Designers World craft",
  })
);

// ── Grid Config ───────────────────────────────────────────────
export const aboutMarqueeGridConfig = {
  centerText: "CRAFTS",
  showFooter: false,
};

// ── Section Layout ────────────────────────────────────────────
export const aboutMarqueeLayout = {
  background: { color: "#fdf8f2", tailwind: "bg-[#fdf8f2]" },
  paddingTop: "pt-20",
} as const;
