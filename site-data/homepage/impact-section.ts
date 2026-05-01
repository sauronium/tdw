// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › IMPACT SECTION
//  Controls content, animation values, and styling for the
//  scroll-driven "Less Noise, More Impact" section
// ─────────────────────────────────────────────────────────────

export const impactSectionData = {
  // ── Primary Tagline ───────────────────────────────────────
  tagline: {
    text: "The Designers World | Creative Design, Marketing & Web Development Studio",
    /** Background pill color */
    backgroundColor: "#f26522",
    backgroundTailwind: "bg-[#f26522]",
    textColor: "text-black",
    /** Pill padding (mobile / desktop) */
    paddingX: "px-9 md:px-16",
    paddingY: "py-3 md:py-6",
    borderRadius: "rounded-md",
    /** Font sizing */
    fontSize: "text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl",
    fontWeight: "font-medium",
    letterSpacing: "tracking-normal",
    whiteSpace: "whitespace-normal md:whitespace-nowrap text-center",
  },

  // ── Section Background ────────────────────────────────────
  background: {
    color: "#fdf8f2",
    tailwind: "bg-[#fdf8f2]",
  },

  // ── Outer Rotating Circle ─────────────────────────────────
  outerCircle: {
    /** Overall width relative to viewport */
    width: "w-[135vw]",
    maxWidth: "max-w-[1050px]",
    /** Unsplash background image shown inside the rotating circle */
    backgroundImage: {
      src: "home/header_tdw.png",
      alt: "Design Collage",
      opacity: "opacity-80",
    },
    /** Total rotation during scroll (degrees) */
    rotationDegrees: 160,
  },

  // ── Inner White Expanding Circle ──────────────────────────
  innerCircle: {
    /** Starting size as percentage of outer circle */
    startSizePercent: 35,
    /** Max scale multiplier (covers the full outer circle) */
    maxScale: 3.2,
    backgroundColor: "#fdf8f2",
    tailwind: "bg-[#fdf8f2]",
  },

  // ── Scroll Animation Keyframes ────────────────────────────
  // All values are fractions of scrollYProgress (0 → 1)
  animation: {
    outerRotation: { from: 0, to: 1 },
    textSlideUp: { start: 0.15, end: 0.45 },
    textSlideYPx: { from: 0, to: -100 },
    innerScale: { start: 0.40, end: 0.80 },
  },

  // ── Down Arrow ────────────────────────────────────────────
  arrow: {
    stroke: "#f26522",
    strokeWidth: 2.5,
    /** SVG dimensions */
    width: 24,
    height: 60,
  },

  // ── Scroll Height ─────────────────────────────────────────
  /** Height of the scrollable container driving the animation */
  scrollHeight: "h-[300vh]",
  topPadding: "pt-8 md:pt-16",
} as const;
