// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › HOW WE WORK SECTION
//  Centralised data for the GSAP morphing-shapes process section.
//  The SVG paths here are consumed by MorphSVGPlugin to morph
//  one shape smoothly into the next as the user scrolls.
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface WorkStep {
  /** Unique identifier; also used as morphing target key */
  id: string;
  /** Short process step title displayed beside the shape */
  title: string;
  /** Longer description shown in the right column */
  description: string;
  /** SVG path data for MorphSVGPlugin */
  svgPath: string;
  /** Full raw SVG string (for visual reference / previewing) */
  rawSvg: string;
}

// ── Work Steps ────────────────────────────────────────────────
export const workSteps: WorkStep[] = [
  {
    id: "triangle",
    title: "Triangle",
    description:
      "Placeholder description for triangle. A short workshop to understand your goals, audience, challenges and existing assets.",
    svgPath:
      "M223.085 1.58842C225.713 -1.22381 230.4 -0.136588 231.521 3.54541L326.146 314.214C327.268 317.896 323.983 321.411 320.233 320.541L3.87388 247.155C0.124435 246.285 -1.2774 241.682 1.35056 238.87L223.085 1.58842Z",
    rawSvg: `<svg width="327" height="321" viewBox="0 0 327 321" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M223.085 1.58842C225.713 -1.22381 230.4 -0.136588 231.521 3.54541L326.146 314.214C327.268 317.896 323.983 321.411 320.233 320.541L3.87388 247.155C0.124435 246.285 -1.2774 241.682 1.35056 238.87L223.085 1.58842Z" fill="#FD6824"/>
</svg>`,
  },
  {
    id: "square",
    title: "Square",
    description:
      "Placeholder description for square. A short workshop to understand your goals, audience, challenges and existing assets.",
    svgPath: "M0 0 L295 0 L295 295 L0 295 Z",
    rawSvg: `<svg width="295" height="295" viewBox="0 0 295 295" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="295" height="295" fill="#FD6824"/>
</svg>`,
  },
  {
    id: "pentagon",
    title: "Pentagon",
    description:
      "Placeholder description for pentagon. A short workshop to understand your goals, audience, challenges and existing assets.",
    svgPath:
      "M183.079 0L366.157 131.287L296.227 343.713H69.93L0.000228882 131.287L183.079 0Z",
    rawSvg: `<svg width="367" height="344" viewBox="0 0 367 344" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M183.079 0L366.157 131.287L296.227 343.713H69.93L0.000228882 131.287L183.079 0Z" fill="#FD6824"/>
</svg>`,
  },
  {
    id: "hexagon",
    title: "Hexagon",
    description:
      "Placeholder description for hexagon. A short workshop to understand your goals, audience, challenges and existing assets.",
    svgPath:
      "M166.71 0L333.42 95V285L166.71 380L7.62939e-05 285V95L166.71 0Z",
    rawSvg: `<svg width="334" height="380" viewBox="0 0 334 380" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M166.71 0L333.42 95V285L166.71 380L7.62939e-05 285V95L166.71 0Z" fill="#FD6824"/>
</svg>`,
  },
  {
    id: "circle",
    title: "Circle",
    description:
      "Placeholder description for circle. A short workshop to understand your goals, audience, challenges and existing assets.",
    svgPath:
      "M175,0 C271.649,0 350,78.351 350,175 C350,271.65 271.649,350 175,350 C78.351,350 0,271.65 0,175 C0,78.351 78.351,0 175,0 Z",
    rawSvg: `<svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="175" cy="175" r="175" fill="#FD6824"/>
</svg>`,
  },
];

// ── Section Heading Copy ──────────────────────────────────────
export const howWeWorkHeading = {
  title: "How We Work",
  titleFontFamily: fonts.heading,
  titleFontSize: "text-5xl md:text-7xl",
  titleFontWeight: "font-normal",
  titleLetterSpacing: "tracking-tight",
  titleColor: "#000000",
  titleColorTailwind: "text-black",
  titleLineHeight: "leading-tight",
  titleMarginBottom: "mb-6 md:mb-10",
  paddingTop: "pt-20 md:pt-32",
  paddingBottom: "pb-10 md:pb-16",

  subtitle:
    "The Designers World is built on a mix of creative thinking and clear systems, so projects feel inspiring but also stay under control.",
  subtitleFontSize: "text-lg md:text-2xl",
  subtitleColor: "#000000",
  subtitleColorTailwind: "text-black",
  subtitleLineHeight: "leading-relaxed",
};

// ── Shape Colors ──────────────────────────────────────────────
export const howWeWorkShapeColor = {
  fill: "#f26522",
  tailwind: "text-[#f26522]",
};

// ── Arrow Separator ───────────────────────────────────────────
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
    fontSize: "text-5xl md:text-6xl lg:text-7xl",
    fontWeight: "font-normal",
    color: "#000000",
    colorTailwind: "text-black",
    letterSpacing: "tracking-tight",
  },
  description: {
    fontSize: "text-base md:text-lg lg:text-xl",
    fontWeight: "font-normal",
    color: "#000000",
    colorTailwind: "text-black",
    lineHeight: "leading-snug",
  },
};

// ── GSAP ScrollTrigger Config ─────────────────────────────────
export const howWeWorkScrollConfig = {
  /** When to start pinning (relative to the section) */
  triggerStart: "center center",
  /** Total scroll distance while pinned */
  scrollEnd: "+=800%",
  /** Scrub smoothness (seconds) */
  scrub: 0.5,
  /** Total animation timeline duration (hold + morphs) */
  timelineDuration: 6.5,
};

// ── Section Background ────────────────────────────────────────
export const howWeWorkBackground = {
  color: "#fdf8f2",
  tailwind: "bg-[#fdf8f2]",
} as const;
