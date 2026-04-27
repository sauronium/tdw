// ─────────────────────────────────────────────────────────────
//  GLOBAL › DESIGN TOKENS
//  Single source of truth for colors, typography, spacing,
//  and animation values used across the entire site.
//
//  HOW TO EDIT:
//  ┌─────────────────────────────────────────────────────┐
//  │ Colors     → edit hex values under `colors`         │
//  │ Font sizes → edit class strings under `fontSizes`   │
//  │ Layout     → edit values under `layout`             │
//  │ Fonts      → set in app/globals.css via CSS vars    │
//  └─────────────────────────────────────────────────────┘
//
//  IMPORTANT: Tailwind class strings (e.g. "text-5xl md:text-7xl")
//  must be written as full literals so Tailwind's scanner can
//  detect and include them. Never build class names dynamically
//  from color values (e.g. `bg-[${color}]`).
//  For dynamic inline styles use the `colors.*` hex values
//  with React's `style` prop instead.
// ─────────────────────────────────────────────────────────────

// ── Brand Colors ──────────────────────────────────────────────
// Use these hex values in `style={{ color: colors.primary }}`
// or `style={{ backgroundColor: colors.background }}`.
// For static Tailwind classes use the full string (e.g. "bg-[#fdf8f2]")
// stored in the section-specific data files.
export const colors = {
  // Primary brand
  primary:       "#f26522",   // Orange — CTAs, accents, shapes
  primaryAlt:    "#ff5a26",   // Brighter orange — header CTA button

  // Backgrounds
  background:    "#fdf8f2",   // Warm off-white — main page background
  dark:          "#0b1221",   // Deep navy — dark service cards

  // Text
  nearBlack:     "#1a1a1a",   // Near-black — body text and headings
  darkTitle:     "#171717",   // Slightly darker variant for headings

  // Accent palette (stat cards, image borders, tag colors)
  purple:        "#8c6bf7",   // Violet
  teal:          "#00c0b5",   // Cyan / teal
  blue:          "#008ff5",   // Blue
  green:         "#6bd4a1",   // Mint green
  pink:          "#ffcdfa",   // Soft pink — header icon button

  // Footer
  footerMobile:  "#fdf8f2",
  footerDesktop: "#fdf8f2",
} as const;

// ── Font Families ─────────────────────────────────────────────
// Reference these in `style={{ fontFamily: fonts.heading }}`.
// The CSS variables are defined via Next.js localFont() in layout.tsx
// and registered in app/globals.css using `@theme inline`.
export const fonts = {
  heading: "var(--font-bricolage)" as string,  // Bricolage Grotesque — all h1–h6
  body:    "var(--font-inter)"  as string,  // Inter — body, subtitles, labels
} as const;

// ── Responsive Font Sizes ─────────────────────────────────────
// Each value is a complete Tailwind responsive class chain.
// Use directly in className: className={`${fontSizes.pageTitle} font-medium`}
//
// Scale overview:
//   pageTitle  →  biggest heading on a page (h1)
//   sectionXL  →  large section h2 headings
//   sectionLG  →  standard section h2 headings
//   stepTitle  →  step / card h3 headings
//   cardTitle  →  smaller card headings
//   tagline    →  short bold phrase displayed large
//   subtitle   →  hero sub-headline
//   description→  section description paragraph
//   bodyXL/LG/MD/SM → paragraph text at different scales
//   workTitle  →  work page full-bleed heading
//   statNumber →  large stat/number displays
//   label*     →  small print, tags, captions
export const fontSizes = {
  // ─ Page hero (h1) ──────────────────────────────────────────
  /** Main page title: "The Designers World" */
  pageTitle:   "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]",
  /** Work page full-bleed title */
  workTitle:   "text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] xl:text-[8rem]",

  // ─ Section headings (h2) ───────────────────────────────────
  /** Largest section heading — "Why Brands Work With Us", "Our Work" */
  sectionXL:   "text-6xl md:text-8xl",
  /** Standard section heading — "How We Work", "Expert Support, Always" */
  sectionLG:   "text-5xl md:text-7xl",
  /** Section heading with extra-large desktop size — "What Makes Us Different" */
  sectionLGXL: "text-5xl md:text-7xl lg:text-[100px]",

  // ─ Content headings (h3) ───────────────────────────────────
  /** Step / process title — "Triangle", "Discovery" */
  stepTitle:   "text-5xl md:text-6xl lg:text-7xl",
  /** Standard card heading */
  cardTitle:   "text-[22px] md:text-[26px] lg:text-[30px]",

  // ─ Taglines & subtitles ────────────────────────────────────
  /** Short bold tagline: "Less Noise, More Impact" */
  tagline:     "text-2xl md:text-5xl",
  /** Hero sub-headline under pageTitle */
  subtitle:    "text-lg sm:text-xl md:text-2xl lg:text-3xl",
  /** Section description paragraph under a heading */
  description: "text-lg md:text-2xl",

  // ─ Body text ───────────────────────────────────────────────
  /** Extra-large body: long pull-quote paragraphs */
  bodyXL:      "text-xl md:text-3xl",
  /** Medium body: step descriptions, card copy */
  bodyLG:      "text-base md:text-lg lg:text-xl",
  /** Standard body: secondary descriptions */
  bodySM:      "text-base md:text-[17px]",

  // ─ Stat display ────────────────────────────────────────────
  /** Big number in stat cards: "10M+", "99%" */
  statNumber:  "text-6xl",

  // ─ Labels & captions ───────────────────────────────────────
  label:       "text-sm",
  labelXS:     "text-xs",
} as const;

// ── Layout & Spacing ─────────────────────────────────────────
// Reusable class chains for consistent page structure.
// Apply `layout.maxWidth` + `mx-auto` on every content container.
export const layout = {
  /** Global content max-width — apply on all full-width containers */
  maxWidth:         "max-w-[1440px]",

  /** Standard horizontal padding (mobile → desktop) */
  pagePaddingX:     "px-4 md:px-8",

  /** Wider horizontal padding for about/work pages */
  widePaddingX:     "px-8 md:px-16",

  /** Standard section vertical padding */
  sectionPaddingY:  "py-24 md:py-32",

  /** Top padding that clears the fixed navigation bar */
  headerClearance:  "pt-20 md:pt-32",

  /** Content area widths */
  contentWidth:     "w-[85vw]",
  wideWidth:        "w-[95vw]",
} as const;

// ── Border Radius ─────────────────────────────────────────────
export const radii = {
  sm:   "rounded-lg",
  md:   "rounded-2xl",
  lg:   "rounded-[24px]",
  xl:   "rounded-[30px]",
  xxl:  "rounded-[40px]",
  pill: "rounded-full",
} as const;

// ── Box Shadows ───────────────────────────────────────────────
export const shadows = {
  sm:  "shadow-sm",
  md:  "shadow-md",
  lg:  "shadow-lg",
  xl:  "shadow-xl",
  xxl: "shadow-2xl",
} as const;

// ── Animation Easings ─────────────────────────────────────────
export const easings = {
  /** Standard ease for hover/focus transitions */
  standard:     "ease-out",
  /** GSAP easing for SVG morph transitions */
  morphEase:    "power1.inOut",
  /** Framer Motion spring config for cursor tracking */
  cursorSpring: { damping: 25, stiffness: 250, mass: 0.5 },
} as const;

// ── Z-Index Scale ─────────────────────────────────────────────
export const zIndex = {
  base:    "z-0",
  raised:  "z-10",
  overlay: "z-20",
  modal:   "z-50",
} as const;

// ── Legacy aliases (kept for backward compatibility) ──────────
// Prefer `fontSizes.*` and `layout.*` for new code.
export const spacing = {
  pagePaddingX:    layout.pagePaddingX,
  sectionPaddingY: layout.sectionPaddingY,
  contentMaxWidth: layout.maxWidth,
} as const;

export const typography = {
  fontFamily:        fonts.body,
  headingFontFamily: fonts.heading,
  sizes: {
    displayXL: "text-8xl",
    displayLG: "text-7xl",
    displayMD: "text-6xl",
    displaySM: "text-5xl",
    bodyLG:    "text-2xl",
    bodyMD:    "text-xl",
    bodySM:    "text-lg",
    bodyXS:    "text-base",
    label:     "text-sm",
    labelXS:   "text-xs",
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
