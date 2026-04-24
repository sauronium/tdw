// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › HERO SECTION
//  Edit this file to change the hero heading, subtitle, and layout
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes, layout } from "../tokens";

export const heroData = {
  // ── Main Heading ──────────────────────────────────────────
  heading: {
    text: "Creative Design, Marketing & Web Development Studio for Growing Brands.",
    fontSize: fontSizes.pageTitle,    // "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]"
    fontWeight: "font-medium",
    color: "text-black",
    letterSpacing: "tracking-tighter",
    lineHeight: "leading-none",
  },

  // ── Sub-headline ──────────────────────────────────────────
  subheadline: {
    text: "One Studio. Four Powerful Services. Results That Speak for Themselves.",
    fontFamily: fonts.heading,
    fontSize: fontSizes.subtitle,     // "text-lg sm:text-xl md:text-2xl lg:text-3xl"
    fontWeight: "font-light",
    color: "text-black",
    marginTop: "mt-8",
    letterSpacing: "tracking-tight",
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
    text: "We are The Designers World — a full-service creative studio that brings together graphic design, web development, digital marketing, and motion graphics under one roof. With over 10 years of combined industry experience, we help businesses build brands that stand out, websites that convert, and campaigns that deliver measurable growth.",
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
