// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › WHY BRANDS WORK WITH US SECTION
//  Edit stat values, labels, videos, and heading copy here.
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface StatCard {
  type: "stat";
  value:    string;
  label:    string;
  subLabel: string;
  backgroundTailwind: string;
  backgroundColor:    string;
  rotation: string;
  zIndex:   string;
}

export interface ImageCard {
  type: "image";
  src:      string;
  alt:      string;
  rotation: string;
  zIndex:   string;
}

export type WhyBrandsCard = StatCard | ImageCard;

// ── Cards ─────────────────────────────────────────────────────
// Six cards alternate stat → video → stat → video → stat → video.
// z-[1] to z-[6] stack bottom to top; hover sets z-[20].
export const whyBrandsCards: WhyBrandsCard[] = [
  {
    type:               "stat",
    value:              "10+",
    label:              "Years of Combined Team Experience",
    subLabel:           "Our designers developers, and marketers bring over a decade of industry expertise to every project.",
    backgroundTailwind: "bg-[#008ff5]",
    backgroundColor:    "#008ff5",
    rotation:           "-rotate-6",
    zIndex:             "z-[1]",
  },
  {
    type:     "image",
    src:      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt:      "Team collaboration",
    rotation: "-rotate-3",
    zIndex:   "z-[2]",
  },
  {
    type:               "stat",
    value:              "100%",
    label:              "On Time Project Delivery",
    subLabel:           "Every project ships on schedule with quality that meets our standards and exceeds your expectations.",
    backgroundTailwind: "bg-[#6bd4a1]",
    backgroundColor:    "#6bd4a1",
    rotation:           "rotate-3",
    zIndex:             "z-[3]",
  },
  {
    type:     "image",
    src:      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    alt:      "Creative workspace",
    rotation: "rotate-6",
    zIndex:   "z-[4]",
  },
  {
    type:               "stat",
    value:              "98%",
    label:              "Client Satisfaction",
    subLabel:           "Our clients trust us for consistent quality, on time delivery, and creative work that genuinely moves their business forward.",
    backgroundTailwind: "bg-[#a364ff]",
    backgroundColor:    "#a364ff",
    rotation:           "-rotate-2",
    zIndex:             "z-[5]",
  },
  {
    type:     "image",
    src:      "https://images.unsplash.com/photo-1542744094-24638ea0b56c?auto=format&fit=crop&w=800&q=80",
    alt:      "Creative process in action",
    rotation: "rotate-4",
    zIndex:   "z-[6]",
  },
];

// ── Section Heading ───────────────────────────────────────────
export const whyBrandsHeading = {
  title:              "Why Brands \nWork With Us",
  titleFontFamily:    fonts.heading,
  titleFontSize:      "text-5xl md:text-6xl lg:text-8xl text-balance",
  titleFontWeight:    "font-medium",
  titleLetterSpacing: "tracking-tight",
  titleColor:         "#000000",
  titleColorTailwind: "text-black",
  titleLineHeight:    "leading-tight",
  titleMarginBottom:  "mb-8",

  subtitle:              "We combine creative precision with commercial thinking — so your brand doesn't just look good, it works hard.",
  subtitleFontSize:      "text-base md:text-xl lg:text-2xl text-balance",
  subtitleColor:         "#1f2937",
  subtitleColorTailwind: "text-gray-800",
  subtitleLineHeight:    "leading-relaxed",
};

// ── Card Shared Styles ────────────────────────────────────────
export const whyBrandsCardStyles = {
  width:  "w-[280px] md:w-[240px] lg:w-[280px] xl:w-[320px]",
  height: "aspect-[2/3] h-auto", // using aspect ratio to keep ratio same on all screens and making it taller

  borderRadius:  "rounded-[19px]",
  overlapMargin: "ml-0 md:-ml-16 lg:-ml-20 xl:-ml-24 md:first:ml-0 my-4 md:my-0",
  hoverRotation: "rotate-0",
  hoverScale:    "scale-110",
  hoverMargin:   "mx-6 md:mx-8 lg:mx-10 xl:mx-12 my-4 md:my-0",
  siblingScale:  "scale-95",

  stat: {
    valueFontSize:     fontSizes.statNumber,      // "text-6xl"
    valueFontWeight:   "font-medium",
    valueTracking:     "tracking-tighter",
    labelFontSize:     "text-2xl",
    labelFontWeight:   "font-medium",
    labelMarginBottom: "mb-3",
    subLabelFontSize:  fontSizes.label,           // "text-sm"
    subLabelOpacity:   "opacity-80",
    textColor:         "text-white",
    dividerColor:      "bg-white/30",
    padding:           "p-8",
  },
};

// ── Section Layout ────────────────────────────────────────────
export const whyBrandsLayout = {
  background:    { color: "#fdf8f2", tailwind: "bg-[#fdf8f2]" },
  paddingY:      "py-24 md:py-32",
  contentWidth:  "w-[85vw]",
  cardRowHeight: "md:h-[600px]",
} as const;
