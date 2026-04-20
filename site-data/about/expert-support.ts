// ─────────────────────────────────────────────────────────────
//  ABOUT › EXPERT SUPPORT SECTION
//  Controls scrolling image cards, copy, background color
//  transition, and layout for the "Expert Support, Always" section
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes, colors } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface ExpertCard {
  src:   string;
  alt:   string;
  /** Absolute position within the scroll container (using vh units) */
  style: { top: string; left?: string; right?: string };
}

// ── Scrolling Image Cards ─────────────────────────────────────
// Cards are absolutely positioned across a 400vh scroll area.
// Adjust `top` to change when each card appears during scrolling.
// Adjust `left`/`right` to change horizontal placement.
// Layout: 3 rows of 2, alternating left/right positions.
export const expertCards: ExpertCard[] = [
  // Row 1
  {
    src:   "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    alt:   "Design workspace",
    style: { top: "80vh",  left: "2%" },
  },
  {
    src:   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    alt:   "Tech stack",
    style: { top: "95vh",  left: "57%" },
  },
  // Row 2
  {
    src:   "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop",
    alt:   "Product design",
    style: { top: "170vh", left: "22%" },
  },
  {
    src:   "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    alt:   "Team at work",
    style: { top: "165vh", right: "2%" },
  },
  // Row 3
  {
    src:   "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    alt:   "Creative process",
    style: { top: "250vh", left: "2%" },
  },
  {
    src:   "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    alt:   "Client collaboration",
    style: { top: "260vh", left: "57%" },
  },
];

// ── Section Copy ──────────────────────────────────────────────
export const expertCopy = {
  // Phase 1 — sticky title visible while cards scroll past
  stickyTitle: {
    text:         "Expert Support,\nAlways",
    fontFamily:   fonts.heading,
    fontSize:     fontSizes.sectionLG,           // "text-5xl md:text-7xl"
    fontWeight:   "font-normal",
    letterSpacing:"tracking-tight",
    lineHeight:   "leading-[1.1]",
    color:        colors.darkTitle,
    colorTailwind:"text-[#171717]",
  },

  // Phase 2 — paragraph that appears after all cards have scrolled
  paragraph: {
    text:         "Behind every great brand is a team that truly has your back. At The Designers World, our specialists in graphic design, web development, and digital marketing are always ready to support you — before, during, and long after your project goes live. You're never left figuring it out alone.",
    fontSize:     fontSizes.bodyXL,              // "text-xl md:text-3xl"
    fontWeight:   "font-medium",
    lineHeight:   "leading-relaxed",
    letterSpacing:"tracking-tight",
    color:        colors.darkTitle,
    colorTailwind:"text-[#171717]",
    maxWidth:     "max-w-4xl",
  },

  // "Great Results" closing title
  greatResults: {
    text:         "Great Results",
    fontFamily:   fonts.heading,
    fontSize:     fontSizes.sectionLG,           // "text-5xl md:text-7xl"
    fontWeight:   "font-normal",
    letterSpacing:"tracking-tight",
    color:        colors.darkTitle,
    colorTailwind:"text-[#171717]",
  },
};

// ── Background Color Transition ───────────────────────────────
// The section background morphs from pink → green at the end of Phase 2.
// Adjust start/end fractions to shift when the color change happens.
export const expertBackground = {
  startColor: "#ffb2f5",   // Pink (default / Phase 1)
  endColor:   "#00d68f",   // Green (Phase 2 complete)
  transition: { start: 0.7, end: 0.9 },  // scrollYProgress fractions
};

// ── Card Dimensions ───────────────────────────────────────────
export const expertCardStyles = {
  width:       "w-[176px] md:w-[240px] lg:w-[272px]",
  aspectRatio: "aspect-[3/4]",
  borderRadius:"rounded-2xl",
};

// ── Section Layout ────────────────────────────────────────────
export const expertLayout = {
  /** Border-radius of the outer section wrapper */
  outerRadius:    "3rem",
  containerWidth: "w-[95vw]",
  phase1Height:   "400vh",
  phase2Padding:  "px-6 py-24",
} as const;
