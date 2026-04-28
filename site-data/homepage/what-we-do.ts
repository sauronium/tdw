// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › WHAT WE DO SECTION
//  Edit service cards (title, description, color, image) here.
//  Card styles (sizes, fonts) are also centralised below.
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface ServiceCard {
  /** 2-digit sequential number displayed on the card */
  number: string;
  title: string;
  description: string;
  /** Full Tailwind background class — must be a literal for scanning */
  backgroundTailwind: string;
  /** Hex color for reference / style props */
  backgroundColor: string;
  /** Route for the "Know more" button */
  href: string;
  /** Illustration image shown on the right side of the card */
  image: string;
  /** Alt text for the illustration image */
  imageAlt: string;
}

// ── Service Cards ─────────────────────────────────────────────
// To reorder, move items. To add/remove, add/delete entries.
// Keep `number` in sync with position if order matters visually.
export const services: ServiceCard[] = [
  {
    number:             "01",
    title:              "Web Design & Development",
    description:        "• We design and develop custom websites that combine stunning UI/UX design with fast, SEO-friendly, mobile-responsive development. From business websites and e-commerce stores to web applications — every site we build is crafted to captivate your audience, strengthen your online presence, and turn visitors into paying customers.",
    backgroundTailwind: "bg-[#65C495]",
    backgroundColor:    "#65C495",
    href:               "/services/web-design-and-development",
    image:              "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
    imageAlt:           "Web design and development workspace",
  },
  {
    number:             "02",
    title:              "Digital Marketing",
    description:        "• We create and execute data-driven digital marketing campaigns — from search engine optimisation and Google Ads to social media marketing, social media management, and email automation. Whether it's building your brand on Instagram, running high-performing ad campaigns on Meta, or growing an engaged community across platforms — every strategy we build is focused on putting your brand in front of the right audience at the right time, delivering measurable ROI and sustainable business growth.",
    backgroundTailwind: "bg-[#F7C518]",
    backgroundColor:    "#F7C518",
    href:               "/services/digital-marketing",
    image:              "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
    imageAlt:           "Digital marketing strategy illustration",
  },
  {
    number:             "03",
    title:              "Social Media Management",
    description:        "• We craft high-impact graphic design — from logo and brand identity to social media creatives, packaging, print collateral, and marketing materials. Every design we produce is rooted in strategy, built for consistency, and designed to make your brand stand out in a crowded market across every platform and touchpoint.",
    backgroundTailwind: "bg-[#FD6824]",
    backgroundColor:    "#FD6824",
    href:               "/services/social-media-management",
    image:              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    imageAlt:           "Social media management on mobile",
  },
  {
    number:             "04",
    title:              "Brand Strategy",
    description:        "• We produce professional motion graphics and video content — social media Reels and Shorts, explainer videos, advertising video ads, product demos, and brand films. Every video we create is optimised for the platforms that matter — Instagram, YouTube, Facebook, LinkedIn — and designed to capture attention in the first second.",
    backgroundTailwind: "bg-[#408BF7]",
    backgroundColor:    "#408BF7",
    href:               "/services/brand-strategy",
    image:              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    imageAlt:           "Brand strategy and identity design",
  },
];

// ── Section Heading ───────────────────────────────────────────
export const whatWeDoHeading = {
  text:         "What We Do",
  fontFamily:   fonts.heading,
  fontSize:     "text-5xl md:text-6xl lg:text-8xl text-balance",
  fontWeight:   "font-medium",
  letterSpacing:"tracking-tight",
  color:        "#000000",
  colorTailwind:"text-black",
  lineHeight:   "leading-tight",
  paddingTop:   "pt-32",
  paddingBottom:"pb-20",
};

// ── Card Styles ───────────────────────────────────────────────
// These match what's rendered on screen — adjust here to change
// the look of all service cards at once.
export const serviceCardStyles = {
  // Overall card shape
  borderRadius: "rounded-[40px]",
  width:        "w-[90vw]",
  height:       "h-[85vh]",
  padding:      "p-6 md:p-10",

  // Large watermark number (top-right corner)
  number: {
    fontSize:     "text-6xl md:text-[120px]",
    fontWeight:   "font-medium",
    opacity:      "opacity-40",
    letterSpacing:"tracking-tighter",
    lineHeight:   "leading-none",
  },

  // Service title (h3)
  title: {
    fontFamily:   fonts.heading,
    fontSize:     "text-3xl sm:text-4xl md:text-5xl lg:text-[76px] break-words",
    fontWeight:   "font-normal",
    letterSpacing:"tracking-tight",
    lineHeight:   "leading-[0.95] md:leading-[1]",
    marginBottom: "mb-5 md:mb-6",
    color:        "text-white",
  },

  // Service description paragraph
  description: {
    fontSize:   "text-sm sm:text-base md:text-lg lg:text-xl",
    fontWeight: "font-light",
    opacity:    "opacity-90",
    lineHeight: "leading-relaxed",
    maxWidth:   "max-w-full md:max-w-[85%] lg:max-w-[75%] xl:max-w-[70%]",
    color:      "text-white",
  },

  // "Expertise" badge (top-left)
  badge: {
    text:         "Expertise",
    background:   "bg-white",
    textColor:    "text-black",
    paddingX:     "px-6",
    paddingY:     "py-2",
    borderRadius: "rounded-full",
    fontSize:     "text-base",
    fontWeight:   "font-semibold",
    letterSpacing:"tracking-wide",
    marginBottom: "mb-4",
  },

  // "Know more" CTA button (bottom-left)
  button: {
    label:           "Know more",
    background:      "bg-white",
    textColor:       "text-black",
    hoverBackground: "hover:bg-gray-100",
    paddingLeft:     "pl-8",
    paddingRight:    "pr-2",
    paddingY:        "py-3",
    borderRadius:    "rounded-full",
    fontSize:        "text-lg",
    fontWeight:      "font-bold",
    position:        "absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-16 md:left-16",
    arrowSize:       "w-12 h-12",
    arrowBg:         "bg-black",
    arrowColor:      "text-white",
  },

  // Illustration image (bottom-right, desktop only)
  illustration: {
    visibility:   "hidden md:block",
    position:     "absolute right-8 bottom-8 lg:right-16 lg:bottom-12",
    width:        "w-[180px] lg:w-[260px] xl:w-[300px]",
    aspectRatio:  "aspect-[3/4]",
    borderRadius: "rounded-[30px]",
    border:       "border-4 md:border-8 border-black/10",
    zIndex:       "z-10",
  },

  /** How much each stacked card scales down beneath the active one */
  stackScaleStep: 0.1,
};

// ── Background ────────────────────────────────────────────────
export const whatWeDoBackground = {
  color:   "#fdf8f2",
  tailwind:"bg-[#fdf8f2]",
} as const;
