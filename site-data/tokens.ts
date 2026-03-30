// ─────────────────────────────────────────────────────────────
//  GLOBAL › DESIGN TOKENS
//  Single source of truth for colors, typography, spacing,
//  and animation easings used across the entire site
// ─────────────────────────────────────────────────────────────

// ── Brand Colors ──────────────────────────────────────────────
export const colors = {
  /** Primary brand orange used for CTAs, accents, and shapes */
  primary:    "#f26522",
  /** Slightly brighter variant used in the header CTA */
  primaryAlt: "#ff5a26",

  /** Background: warm off-white used for most page backgrounds */
  background: "#fdf8f2",

  /** Deep navy used for dark service cards */
  dark:       "#0b1221",
  /** Near-black for body text and heading text */
  nearBlack:  "#1a1a1a",

  /** Accent purple / violet used in links and stack images */
  purple:     "#8c6bf7",
  /** Accent cyan / teal for stack images */
  teal:       "#00c0b5",
  /** Accent blue used in stat cards */
  blue:       "#008ff5",
  /** Accent mint green used in stat cards */
  green:      "#6bd4a1",
  /** Soft pink used in header icon button */
  pink:       "#ffcdfa",

  /** Footer mobile background */
  footerMobile:  "#f4ecef",
  /** Footer desktop background */
  footerDesktop: "#f6f6fb",
} as const;

// ── Typography ────────────────────────────────────────────────
export const fonts = {
  /** Hagrid — used for ALL headings (h1–h6) */
  heading: "var(--font-hagrid)" as string,
  /** Inter — used for body copy, subtitles, labels, captions */
  body: "var(--font-inter)" as string,
} as const;

export const typography = {
  /** Base body font — Inter */
  fontFamily: fonts.body,
  /** Heading font — Hagrid */
  headingFontFamily: fonts.heading,

  sizes: {
    /** Section hero headings (desktop) */
    displayXL: "text-8xl",
    displayLG: "text-7xl",
    displayMD: "text-6xl",
    displaySM: "text-5xl",

    /** Body text */
    bodyLG: "text-2xl",
    bodyMD: "text-xl",
    bodySM: "text-lg",
    bodyXS: "text-base",

    /** Labels / tags / small print */
    label:   "text-sm",
    labelXS: "text-xs",
  },

  weights: {
    light:    "font-light",
    normal:   "font-normal",
    medium:   "font-medium",
    semibold: "font-semibold",
    bold:     "font-bold",
  },

  tracking: {
    tight:   "tracking-tight",
    tighter: "tracking-tighter",
    normal:  "tracking-normal",
    wide:    "tracking-wide",
  },
} as const;

// ── Spacing ───────────────────────────────────────────────────
export const spacing = {
  /** Horizontal page padding */
  pagePaddingX: "px-4 md:px-8",
  /** Common section vertical padding */
  sectionPaddingY: "py-24 md:py-32",
  /** Max width used by all content containers */
  contentMaxWidth: "max-w-[1440px]",
} as const;

// ── Border Radius ─────────────────────────────────────────────
export const radii = {
  sm:    "rounded-lg",
  md:    "rounded-2xl",
  lg:    "rounded-[24px]",
  xl:    "rounded-[30px]",
  xxl:   "rounded-[40px]",
  pill:  "rounded-full",
} as const;

// ── Shadows ───────────────────────────────────────────────────
export const shadows = {
  sm:  "shadow-sm",
  md:  "shadow-md",
  lg:  "shadow-lg",
  xl:  "shadow-xl",
  xxl: "shadow-2xl",
} as const;

// ── Animation Easings ─────────────────────────────────────────
export const easings = {
  /** Standard ease for hover transitions */
  standard:     "ease-out",
  /** GSAP morph easing */
  morphEase:    "power1.inOut",
  /** Framer Motion spring for cursor tracking */
  cursorSpring: { damping: 25, stiffness: 250, mass: 0.5 },
} as const;

// ── Z-Index Scale ─────────────────────────────────────────────
export const zIndex = {
  base:    "z-0",
  raised:  "z-10",
  overlay: "z-20",
  modal:   "z-50",
} as const;
