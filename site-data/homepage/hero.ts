// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › HERO SECTION
//  Edit this file to change the hero heading, subtitle, and layout
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes, layout } from "../tokens";

export const heroData = {
  // ── Main Heading ──────────────────────────────────────────
  heading: {
    text:         "The Designers World",
    fontSize:     fontSizes.pageTitle,    // "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]"
    fontWeight:   "font-medium",
    color:        "text-black",
    letterSpacing:"tracking-tighter",
    lineHeight:   "leading-none",
  },

  // ── Sub-headline ──────────────────────────────────────────
  subheadline: {
    text:         "Creative Design, Marketing, and Web Development Studio",
    fontFamily:   fonts.heading,
    fontSize:     fontSizes.subtitle,     // "text-lg sm:text-xl md:text-2xl lg:text-3xl"
    fontWeight:   "font-light",
    color:        "text-black",
    marginTop:    "mt-8",
    letterSpacing:"tracking-tight",
  },

  // ── Punchline ─────────────────────────────────────────────
  punchline: {
    text:         "One Studio. Infinite Possibilities. Delivered with Precision.",
    fontSize:     "text-md sm:text-lg md:text-xl",
    fontWeight:   "font-semibold",
    color:        "text-black",
    marginTop:    "mt-4",
  },

  // ── Paragraph ─────────────────────────────────────────────
  paragraph: {
    text:         "At The Designers World, we are a team of creative professionals with 7+ years of experience delivering exceptional results for high-end clients. Now united in New Delhi, India, we bring together design, content, and code under one powerful studio. We know what premium clients expect — and we know how to exceed it. Your brand deserves nothing less than the best, and that's exactly what we're here to deliver.",
    fontSize:     "text-base md:text-lg",
    fontWeight:   "font-light",
    color:        "text-gray-700",
    marginTop:    "mt-6",
    maxWidth:     "max-w-4xl",
  },

  // ── Section Layout ────────────────────────────────────────
  layout: {
    minHeight:     "min-h-[50vh]",
    paddingX:      layout.pagePaddingX,   // "px-4 md:px-8"
    paddingTop:    "pt-20",
    paddingBottom: "pb-24 md:pb-32",
    maxWidth:      layout.maxWidth,       // "max-w-[1440px]"
  },

  // ── Background ────────────────────────────────────────────
  background: {
    color:   "#fdf8f2",
    tailwind:"bg-[#fdf8f2]",
  },
} as const;
