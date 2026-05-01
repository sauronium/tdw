// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › SOCIAL MEDIA SPECIALISTS SECTION
//  Edit heading, body copy, images, and scroll checkpoints here.
// ─────────────────────────────────────────────────────────────
import { fonts, fontSizes } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface StackImage {
  id:                       number;
  mediaType?:               'image' | 'video';
  src:                      string;
  alt:                      string;
  /** Background color shown during the circle-reveal entrance animation */
  placeholderColor:         string;
  /** Tailwind class for placeholder background */
  placeholderColorTailwind: string;
  zIndex:                   1 | 2 | 3;
  /** Rotation applied when the card settles (degrees) */
  rotate:                   number;
}

// ── Stacking Images ───────────────────────────────────────────
// Three images stack on top of each other as the user scrolls.
// Update `src` to swap images; update `rotate` for tilt angle.
export const socialMediaImages: StackImage[] = [
  {
    id:                       1,
    mediaType:                "video",
    src:                      "https://www.pexels.com/download/video/15463088/",
    alt:                      "Content strategy session",
    placeholderColor:         "#f26522",
    placeholderColorTailwind: "bg-[#f26522]",
    zIndex:                   1,
    rotate:                   0,
  },
  {
    id:                       2,
    mediaType:                "image",
    src:                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    alt:                      "Creative team at work",
    placeholderColor:         "#8c6bf7",
    placeholderColorTailwind: "bg-[#8c6bf7]",
    zIndex:                   2,
    rotate:                   -3,
  },
  {
    id:                       3,
    mediaType:                "image",
    src:                      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    alt:                      "Campaign analytics and results",
    placeholderColor:         "#00c0b5",
    placeholderColorTailwind: "bg-[#00c0b5]",
    zIndex:                   3,
    rotate:                   4,
  },
];

// ── Right Side Copy ───────────────────────────────────────────
export const socialMediaCopy = {
  heading: {
    text:         "A Studio Built on Strategy, Creativity, and 10+ Years of Expertise.",
    fontFamily:   fonts.heading,
    fontSize:     "text-5xl md:text-6xl lg:text-[4.5rem]",
    fontWeight:   "font-bold",
    letterSpacing:"tracking-tighter",
    lineHeight:   "leading-[1]",
    color:        "#1a1a1a",
    colorTailwind:"text-[#1a1a1a]",
    textTransform:"lowercase",
    marginBottom: "mb-8",
  },

  body: [
    "The Designers World was founded with a clear mission — to give businesses access to world-class graphic design, custom web development, data-driven digital marketing, and professional motion graphics, all from a single creative team. Based in New Delhi, India, our studio brings together specialists who've spent over a decade working with brands across industries — from ambitious startups to established enterprises. We don't just make things look good. We build brand systems, digital experiences, and marketing strategies that are engineered to grow your business.",
    "",
    ""
  ],

  bodyStyles: {
    fontSize:     fontSizes.bodySM,           // "text-base md:text-[17px]"
    color:        "#222222",
    colorTailwind:"text-[#222]",
    lineHeight:   "leading-[1.6] md:leading-relaxed",
    fontWeight:   "font-medium",
  },
};

// ── Section Layout ────────────────────────────────────────────
export const socialMediaLayout = {
  scrollHeight:  "h-[400vh]",
  background:    { color: "transparent", tailwind: "bg-transparent" },
  stickyPadding: "py-12 md:py-24",
  maxWidth:      "max-w-[1440px]",

  imageSide: {
    width:        "w-full md:w-5/12 lg:w-1/2",
    imageMaxWidth:"max-w-[300px] lg:max-w-[320px]",
    imageHeight:  "h-[60vh] md:h-[80vh]",
    borderRadius: "rounded-[20px]",
  },

  contentSide: {
    width: "w-full md:w-7/12 lg:w-1/2",
  },
} as const;

// ── Scroll Checkpoints ────────────────────────────────────────
// smoothProgress fractions that control when each card appears.
// Adjust to speed up or slow down the card reveal sequence.
export const socialMediaScrollCheckpoints = {
  card1: { start: 0.20, end: 0.46 },
  card2: { start: 0.46, end: 0.72 },
  card3: { start: 0.72, end: 1.00 },
} as const;
