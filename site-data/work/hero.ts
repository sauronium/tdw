// ─────────────────────────────────────────────────────────────
//  WORK PAGE › HERO SECTION
//  Controls the headline, inner card background, and layout
//  for the full-bleed hero on the Work page
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes, colors } from "../tokens";

// ── Heading ───────────────────────────────────────────────────
export const workHeroHeading = {
  text:         "Our work. Your result.",
  fontFamily:   fonts.heading,
  fontSize:     fontSizes.workTitle,   // "text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] xl:text-[8rem]"
  fontWeight:   "font-medium",
  letterSpacing:"tracking-tight",
  lineHeight:   "leading-[1.05]",
  color:        colors.darkTitle,
  colorTailwind:"text-[#171717]",
};

// ── Layout ────────────────────────────────────────────────────
export const workHeroLayout = {
  /** Outer section background */
  background: { color: colors.background, tailwind: "bg-[#fdf8f2]" },

  /** The colorful inner card */
  innerCard: {
    backgroundColor: "#67c494",       // Mint green
    tailwind:        "bg-[#67c494]",
    borderRadius:    "rounded-[32px] md:rounded-[40px]",
  },

  /** Outer container — clears the fixed header */
  paddingTop:    "pt-28 md:pt-32",
  paddingBottom: "pb-4 md:pb-8",
  paddingX:      "px-4 sm:px-6 md:px-8 lg:px-10",
} as const;
