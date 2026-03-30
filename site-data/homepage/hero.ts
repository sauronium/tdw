// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › HERO SECTION
//  Controls all content, styles, and assets for the Hero section
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

export const heroData = {
  // ── Section Layout ────────────────────────────────────────
  layout: {
    /** Minimum viewport height of the section */
    minHeight: "50vh",
    /** Horizontal padding */
    paddingX: "px-4",
    /** Top padding */
    paddingTop: "pt-20",
    /** Bottom padding (mobile / desktop) */
    paddingBottom: "pb-24 md:pb-32",
    /** Max width constraint */
    maxWidth: "max-w-[1440px]",
  },

  // ── Heading SVG Image ─────────────────────────────────────
  headingSvg: {
    /** Path to the SVG heading asset in /public */
    src: "/heading.svg",
    alt: "We build websites",
    /** Rendered width hint for Next.js Image */
    width: 1200,
    /** Rendered height hint */
    height: 300,
    /** Should the image be eagerly loaded */
    priority: true,
  },

  // ── Sub-headline ────────────────────────────────────────────────
  subheadline: {
    text: "that actually work",
    fontFamily: fonts.heading,
    /** Tailwind font-size classes (mobile / desktop) */
    fontSize: "text-3xl md:text-5xl",
    fontWeight: "font-light",
    color: "text-black",
    marginTop: "mt-6",
    letterSpacing: "tracking-tight",
  },

  // ── Section Background ────────────────────────────────────
  background: {
    color: "#fdf8f2",
    tailwind: "bg-[#fdf8f2]",
  },
} as const;
