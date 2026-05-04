// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › HERO SECTION
//  Edit this file to change the hero heading, subtitle, and layout
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes, layout } from "../tokens";

export const heroData = {
  // ── Main Heading ──────────────────────────────────────────
  heading: {
    text: "Where Creative Meets Conversion.",
    fontSize: "text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    fontWeight: "font-medium",
    color: "text-black",
    letterSpacing: "tracking-tighter",
    lineHeight: "leading-none text-balance",
  },

  // ── Sub-headline ──────────────────────────────────────────
  subheadline: {
    text: "Because beautiful design should also deliver results. We craft brands, websites, and campaigns built to grow.",
    fontFamily: fonts.heading,
    fontSize: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
    fontWeight: "font-light",
    color: "text-black",
    marginTop: "mt-8",
    letterSpacing: "tracking-tight text-balance",
  },

  // ── Punchline ─────────────────────────────────────────────
  punchline: {
    text: "",
    fontSize: "text-md sm:text-lg md:text-xl",
    fontWeight: "font-semibold",
    color: "text-black",
    marginTop: "mt-4",
  },

  // ── Paragraph ─────────────────────────────────────────────
  paragraph: {
    text: "",
    fontSize: "text-base md:text-lg",
    fontWeight: "font-light",
    color: "text-gray-700",
    marginTop: "mt-6",
    maxWidth: "max-w-4xl",
  },

  // ── Section Layout ────────────────────────────────────────
  layout: {
    minHeight: "min-h-[50vh]",
    paddingX: layout.pagePaddingX,   // "px-4 md:px-8"
    paddingTop: "pt-20",
    paddingBottom: "pb-24 md:pb-32",
    maxWidth: layout.maxWidth,       // "max-w-[1440px]"
  },

  // ── Background ────────────────────────────────────────────
  background: {
    color: "#fdf8f2",
    tailwind: "bg-[#fdf8f2]",
  },
} as const;
