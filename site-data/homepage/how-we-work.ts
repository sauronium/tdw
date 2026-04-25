// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › HOW WE WORK SECTION
//  Edit process steps (title, description, svgPath) here.
//  The SVG paths are consumed by GSAP MorphSVGPlugin to animate
//  one shape smoothly into the next as the user scrolls.
//
//  All shapes must fit within a 350×350 viewBox.
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface WorkStep {
  id: string;
  title: string;
  description: string;
  svgPath: string;
  /** Shape fill color for this step */
  color: string;
}

// ── Process Steps ─────────────────────────────────────────────
// Five steps that describe TDW's end-to-end creative process.
// Each step morphs into the next shape as the user scrolls down.
export const workSteps: WorkStep[] = [
  {
    id: "discover",
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and challenges. This deep-dive ensures every decision we make is aligned with your brand and built on a strong strategic foundation.",
    svgPath: "M 175 10 L 335 310 L 15 310 Z",
    color: "#65C495",
  },
  {
    id: "strategy",
    title: "Strategy",
    description: "We define a clear roadmap — the right approach, timeline, deliverables, and creative direction tailored specifically to your brand objectives and market positioning.",
    svgPath: "M 35 35 L 315 35 L 315 315 L 35 315 Z",
    color: "#F7C518",
  },
  {
    id: "creation",
    title: "Creation",
    description: "Our team gets to work — designing, developing, and producing content with precision, creativity, and attention to every detail. Nothing ships without meeting our quality standards.",
    svgPath: "M 175 5 L 336.7 122.5 L 274.9 312.5 L 75.1 312.5 L 13.3 122.5 Z",
    color: "#408BF7",
  },
  {
    id: "review",
    title: "Review",
    description: "We present the work, gather your feedback, and refine until every element feels right. Collaboration is at the heart of our process — your input shapes the final result.",
    svgPath: "M 175 5 L 322.2 90 L 322.2 260 L 175 345 L 27.8 260 L 27.8 90 Z",
    color: "#a364ff",
  },
  {
    id: "launch",
    title: "Launch",
    description: "Your project goes live with a smooth delivery process. We don't disappear after launch — we stay by your side with dedicated support to make sure everything performs perfectly.",
    svgPath: "M 175 5 C 268.9 5 345 81.1 345 175 C 345 268.9 268.9 345 175 345 C 81.1 345 5 268.9 5 175 C 5 81.1 81.1 5 175 5 Z",
    color: "#FD6824",
  },
];

// ── Section Heading ───────────────────────────────────────────
export const howWeWorkHeading = {
  title: "How We Work — From Brief to Launch.",
  titleFontFamily: fonts.heading,
  titleFontSize: "text-4xl md:text-5xl lg:text-7xl text-balance",
  titleFontWeight: "font-normal",
  titleLetterSpacing: "tracking-tight",
  titleColor: "#000000",
  titleColorTailwind: "text-black",
  titleLineHeight: "leading-tight",
  titleMarginBottom: "mb-6 md:mb-10",
  paddingTop: "pt-20 md:pt-32",
  paddingBottom: "pb-10 md:pb-16",

  subtitle: "We follow a structured creative process that keeps your project on track, on budget, and on brand — from the first conversation to the final delivery.",
  subtitleFontSize: "text-base md:text-lg lg:text-2xl text-balance",
  subtitleColor: "#000000",
  subtitleColorTailwind: "text-black",
  subtitleLineHeight: "leading-relaxed",
};

// ── Morphing Shape Color ──────────────────────────────────────
export const howWeWorkShapeColor = {
  fill: "#f26522",
  tailwind: "text-[#f26522]",
};

// ── Arrow Between Shape and Description ───────────────────────
export const howWeWorkArrow = {
  stroke: "#f26522",
  strokeWidth: 2,
  width: 60,
  height: 20,
};

// ── Step Text Styles ──────────────────────────────────────────
export const howWeWorkStepText = {
  title: {
    fontFamily: fonts.heading,
    fontSize: "text-4xl md:text-5xl lg:text-7xl break-words",
    fontWeight: "font-normal",
    color: "#000000",
    colorTailwind: "text-black",
    letterSpacing: "tracking-tight",
  },
  description: {
    fontSize: "text-sm md:text-base lg:text-xl",
    fontWeight: "font-normal",
    color: "#000000",
    colorTailwind: "text-black",
    lineHeight: "leading-snug",
  },
};

// ── Section Background ────────────────────────────────────────
export const howWeWorkBackground = {
  color: "#fdf8f2",
  tailwind: "bg-[#fdf8f2]",
} as const;
