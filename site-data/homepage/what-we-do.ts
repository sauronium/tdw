// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › WHAT WE DO SECTION
//  Controls all service card data, colors, fonts, and layout
//  for the sticky scroll-stack card section
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface ServiceCard {
  /** 2-digit sequential number displayed on the card */
  number: string;
  title: string;
  description: string;
  /** Tailwind background class for the card */
  backgroundTailwind: string;
  /** Hex value for reference / dynamic usage */
  backgroundColor: string;
  /** Optional deep-link for the "Know more" button */
  href: string;
  /** Image URL for the placeholder card */
  image: string;
}

// ── Service Cards ─────────────────────────────────────────────
export const services: ServiceCard[] = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Creating stunning, high-performance websites that capture your brand's essence and convert visitors into customers.",
    backgroundTailwind: "bg-[#0b1221]",
    backgroundColor: "#0b1221",
    href: "/services/web-design",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Data-driven strategies to boost your online presence, drive traffic, and generate qualified leads for your business.",
    backgroundTailwind: "bg-[#ff5a26]",
    backgroundColor: "#ff5a26",
    href: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Social Media Management",
    description: "Campaigns that move the needle, not just the metrics.",
    backgroundTailwind: "bg-[#008ff5]",
    backgroundColor: "#008ff5",
    href: "/services/social-media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Brand Strategy",
    description:
      "Defining your unique voice and position in the market to build a lasting connection with your audience.",
    backgroundTailwind: "bg-[#6bd4a1]",
    backgroundColor: "#6bd4a1",
    href: "/services/brand-strategy",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  },
];

// ── Section Heading ───────────────────────────────────────────────
export const whatWeDoHeading = {
  text: "What We Do",
  fontFamily: fonts.heading,
  fontSize: "text-6xl md:text-8xl",
  fontWeight: "font-medium",
  letterSpacing: "tracking-tight",
  color: "#000000",
  colorTailwind: "text-black",
  lineHeight: "leading-tight",
  paddingTop: "pt-32",
  paddingBottom: "pb-20",
};

// ── Card Styles (shared across all cards) ─────────────────────
export const serviceCardStyles = {
  /** Card corner radius */
  borderRadius: "rounded-[40px]",
  /** Card dimensions relative to viewport */
  width: "w-[90vw]",
  height: "h-[85vh]",

  /** Number overlay */
  number: {
    fontSize: "text-6xl md:text-[120px]",
    fontWeight: "font-medium",
    opacity: "opacity-40",
    letterSpacing: "tracking-tighter",
  },

  /** Service title */
  title: {
    fontFamily: fonts.heading,
    fontSize: "text-5xl md:text-8xl",
    fontWeight: "font-normal",
    letterSpacing: "tracking-tight",
    lineHeight: "leading-[1]",
    marginBottom: "mb-6",
    color: "text-white",
  },

  /** Service description */
  description: {
    fontSize: "text-xl md:text-3xl",
    fontWeight: "font-light",
    opacity: "opacity-90",
    lineHeight: "leading-snug",
    maxWidth: "max-w-xl",
    color: "text-white",
  },

  /** "Expertise" badge */
  badge: {
    text: "Expertise",
    background: "bg-white",
    textColor: "text-black",
    paddingX: "px-6",
    paddingY: "py-2",
    borderRadius: "rounded-full",
    fontSize: "text-base",
    fontWeight: "font-semibold",
    letterSpacing: "tracking-wide",
  },

  /** "Know more" button */
  button: {
    label: "Know more",
    background: "bg-white",
    textColor: "text-black",
    hoverBackground: "hover:bg-gray-100",
    borderRadius: "rounded-full",
    fontSize: "text-lg",
    fontWeight: "font-bold",
    arrowBg: "bg-black",
    arrowColor: "text-white",
  },

  /** Scale-down step per stacked card (creates depth illusion) */
  stackScaleStep: 0.05,
};

// ── Section Background ────────────────────────────────────────
export const whatWeDoBackground = {
  color: "#fdf8f2",
  tailwind: "bg-[#fdf8f2]",
} as const;
