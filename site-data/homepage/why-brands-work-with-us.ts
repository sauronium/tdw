// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › WHY BRANDS WORK WITH US SECTION
//  Controls all card data (stat cards + video cards),
//  colors, interaction styles, and copy
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface StatCard {
  type: "stat";
  /** Large number displayed at the top of the card */
  value: string;
  label: string;
  subLabel: string;
  /** Tailwind background class */
  backgroundTailwind: string;
  /** Hex value for reference */
  backgroundColor: string;
  /** Initial CSS rotation class (Tailwind) */
  rotation: string;
  /** Base z-index class (Tailwind) */
  zIndex: string;
}

export interface VideoCard {
  type: "video";
  /** Video source URL */
  src: string;
  alt: string;
  /** Initial CSS rotation class (Tailwind) */
  rotation: string;
  /** Base z-index class (Tailwind) */
  zIndex: string;
}

export type WhyBrandsCard = StatCard | VideoCard;

// ── Cards Data ────────────────────────────────────────────────
export const whyBrandsCards: WhyBrandsCard[] = [
  {
    type: "stat",
    value: "10M+",
    label: "Lorem Ipsum",
    subLabel: "Lorem Ipsum lorem ipsum lorem",
    backgroundTailwind: "bg-[#008ff5]",
    backgroundColor: "#008ff5",
    rotation: "-rotate-6",
    zIndex: "z-10",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    alt: "Team collaboration",
    rotation: "-rotate-3",
    zIndex: "z-20",
  },
  {
    type: "stat",
    value: "30+",
    label: "Lorem Ipsum",
    subLabel: "Lorem Ipsum lorem ipsum lorem",
    backgroundTailwind: "bg-[#6bd4a1]",
    backgroundColor: "#6bd4a1",
    rotation: "rotate-3",
    zIndex: "z-30",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/853789/853789-hd_1920_1080_25fps.mp4",
    alt: "Workspace",
    rotation: "rotate-6",
    zIndex: "z-40",
  },
];

// ── Section Heading Copy ────────────────────────────────────────────
export const whyBrandsHeading = {
  title: "Why Brands \nWork With Us",
  titleFontFamily: fonts.heading,
  titleFontSize: "text-6xl md:text-8xl",
  titleFontWeight: "font-medium",
  titleLetterSpacing: "tracking-tight",
  titleColor: "#000000",
  titleColorTailwind: "text-black",
  titleLineHeight: "leading-tight",
  titleMarginBottom: "mb-8",

  subtitle:
    "The Designers World is built on a mix of creative thinking and clear systems, so projects feel inspiring but also stay under control.",
  subtitleFontSize: "text-xl md:text-2xl",
  subtitleColor: "#1f2937",
  subtitleColorTailwind: "text-gray-800",
  subtitleLineHeight: "leading-relaxed",
};

// ── Card Shared Styles ────────────────────────────────────────
export const whyBrandsCardStyles = {
  /** Base card dimensions (mobile / desktop) */
  width: "w-[340px] md:w-[375px]",
  height: "h-[430px] md:h-[475px]",
  borderRadius: "rounded-[19px]",

  /** Hover state: card straightens, scales up */
  hoverRotation: "rotate-0",
  hoverScale: "scale-110",

  /** Non-hovered sibling dimming */
  siblingScale: "scale-95",

  /** Default overlap between stacked cards on desktop */
  overlapMargin: "md:-ml-12",

  // ── Stat card text styles ─────────────────────────────────
  stat: {
    valueFontSize: "text-6xl",
    valueFontWeight: "font-medium",
    valueLetterSpacing: "tracking-tighter",
    labelFontSize: "text-2xl",
    labelFontWeight: "font-medium",
    labelMarginBottom: "mb-3",
    subLabelFontSize: "text-sm",
    subLabelOpacity: "opacity-80",
    textColor: "text-white",
    dividerColor: "bg-white/30",
    padding: "p-8",
  },
};

// ── Section Layout ────────────────────────────────────────────
export const whyBrandsLayout = {
  background: {
    color: "#fdf8f2",
    tailwind: "bg-[#fdf8f2]",
  },
  paddingY: "py-24 md:py-32",
  /** Width of the section content area */
  contentWidth: "w-[85vw]",
  /** Card row height on desktop */
  cardRowHeight: "md:h-[600px]",
} as const;
