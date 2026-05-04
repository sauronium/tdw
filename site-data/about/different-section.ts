// ─────────────────────────────────────────────────────────────
//  ABOUT › WHAT MAKES US DIFFERENT SECTION
//  Controls the flying card data (content + colors) and all
//  text styles for the scroll-animated card reveal section
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes, colors } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface DifferentCard {
  title: string;
  desc: string;
  /** Tailwind background class — full literal for Tailwind scanning */
  bg: string;
  /** Hex color for reference / style props */
  color: string;
}

// ── Card Data ─────────────────────────────────────────────────
// To change card order, reorder items in this array.
// To change card colors, update both `bg` (Tailwind class) and `color` (hex).
export const differentCards: DifferentCard[] = [
  {
    title: "Design, Development & Marketing, Under One Roof.",
    desc: "Our designers, developers, and marketers work as one team, keeping your brand vision consistent from concept to launch.",
    bg: "bg-[#6bb88b]",
    color: "#6bb88b",
  },
  {
    title: "Designed for Growth, Not Just Aesthetics.",
    desc: "Every logo, website, and campaign we create is built with purpose, blending creative excellence with conversion focused strategy that drives real results.",
    bg: "bg-[#ed6e33]",
    color: "#ed6e33",
  },
  {
    title: "Premium Quality on Every Project.",
    desc: "From pixel perfect design to clean code and smart marketing, we never compromise on quality, no matter the project size.",
    bg: "bg-[#4a88f5]",
    color: "#4a88f5",
  },
  {
    title: "Fast Turnaround With Zero Compromise.",
    desc: "We move fast without cutting corners, delivering outstanding work on time, every time. Your deadlines are our deadlines.",
    bg: "bg-[#a364ff]",
    color: "#a364ff",
  },
];

// ── Section Heading ───────────────────────────────────────────
export const differentHeading = {
  text: "Why Brands Work With Us",
  fontFamily: fonts.heading,
  fontSize: fontSizes.sectionLGXL,         // "text-5xl md:text-7xl lg:text-[100px]"
  fontWeight: "font-medium",
  letterSpacing: "tracking-tight",
  lineHeight: "leading-[1.1]",
  color: colors.darkTitle,
  colorTailwind: "text-[#171717]",
};

// ── Card Styles ───────────────────────────────────────────────
export const differentCardStyles = {
  // Responsive card dimensions (mobile → lg)
  width: "w-[260px] md:w-[300px] lg:w-[340px]",
  height: "h-[340px] md:h-[390px] lg:h-[440px]",
  padding: "p-7 md:p-8 lg:p-10",
  borderRadius: "rounded-[32px]",

  title: {
    fontSize: fontSizes.cardTitle,          // "text-[22px] md:text-[26px] lg:text-[30px]"
    fontWeight: "font-medium",
    lineHeight: "leading-[1.2]",
    letterSpacing: "tracking-tight",
    color: "#fdf8f2",
    colorTailwind: "text-[#fdf8f2]",
  },
  desc: {
    fontSize: "text-sm md:text-base lg:text-lg",
    fontWeight: "font-light",
    opacity: "opacity-90",
    lineHeight: "leading-snug",
    color: "#fdf8f2",
    colorTailwind: "text-[#fdf8f2]",
  },
};

// ── Section Layout ────────────────────────────────────────────
export const differentLayout = {
  background: { color: "#fdf8f2", tailwind: "bg-[#fdf8f2]" },
  scrollHeight: "h-[500vh]",
  paddingX: "px-8 md:px-16",
  titleTopOffset: "top-24",
  cardsTopOffset: "calc(96px + 80px)",
  cardsHeight: "460px",
} as const;
