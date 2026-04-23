// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › OUR CLIENTS (LOGOS STAGGERED GRID) SECTION
//  Controls heading, logo images, and grid configuration
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Section Heading ───────────────────────────────────────────
export const clientsHeading = {
  text: "Our Clients",
  fontFamily: fonts.heading,
  fontSize: "text-5xl md:text-7xl",
  fontWeight: "font-normal",
  letterSpacing: "tracking-tight",
  color: "#000000",
  colorTailwind: "text-black",
  lineHeight: "leading-tight",
};

// ── Types ─────────────────────────────────────────────────────
export interface ClientLogo {
  src: string;
  alt: string;
}

// ── Logo Images ───────────────────────────────────────────────
// Replace placeholder entries with actual client logo paths.
// Update `src` (image URL or local path) and `alt` (client name) for each.
export const clientLogos: ClientLogo[] = Array.from(
  { length: 40 },
  (_, i) => ({
    src: `https://placehold.co/400x300/e9ecef/adb5bd?text=LOGO+${i + 1}`,
    alt: `Client logo ${i + 1}`,
  })
);

// ── Grid Config ───────────────────────────────────────────────
export const clientsGridConfig = {
  /** Text rendered at the visual center of the staggered grid */
  centerText: "PARTNERS",
  /** Show the built-in footer row inside the grid component */
  showFooter: false,
};

// ── Section Layout ────────────────────────────────────────────
export const clientsLayout = {
  background: {
    color: "#fdf8f2",
    tailwind: "bg-[#fdf8f2]",
  },
  paddingTop: "pt-20",
} as const;
