// ─────────────────────────────────────────────────────────────
//  HOMEPAGE › SOCIAL MEDIA SPECIALISTS SECTION
//  Controls all content, image sources, colors, and layout
//  for the scroll-driven stacking image + copy section
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface StackImage {
  /** Unique label used for accessibility / keys */
  id: string;
  /** Image URL (remote or local /public path) */
  src: string;
  alt: string;
  /** Solid background color shown during the circle-reveal transition */
  placeholderColor: string;
  /** Tailwind class for placeholder background */
  placeholderColorTailwind: string;
  /** z-index layer (1 = bottom, 3 = top) */
  zIndex: 1 | 2 | 3;
  /** Whether this image gains a slight rotation as the next card arrives */
  hasRotation: boolean;
}

// ── Stacking Images ───────────────────────────────────────────
export const socialMediaImages: StackImage[] = [
  {
    id: "image-1-office",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    alt: "Office meeting room",
    placeholderColor: "#f26522",
    placeholderColorTailwind: "bg-[#f26522]",
    zIndex: 1,
    hasRotation: false,
  },
  {
    id: "image-2-team",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    alt: "Team collaboration",
    placeholderColor: "#8c6bf7",
    placeholderColorTailwind: "bg-[#8c6bf7]",
    zIndex: 2,
    hasRotation: true,
  },
  {
    id: "image-3-analytics",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    alt: "Analytics and growth",
    placeholderColor: "#00c0b5",
    placeholderColorTailwind: "bg-[#00c0b5]",
    zIndex: 3,
    hasRotation: true,
  },
];

// ── Right Side Copy ───────────────────────────────────────────
export const socialMediaCopy = {
  heading: {
    text: "we are social media specialists.",
    fontFamily: fonts.heading,
    fontSize: "text-5xl md:text-6xl lg:text-[4.5rem]",
    fontWeight: "font-bold",
    letterSpacing: "tracking-tighter",
    lineHeight: "leading-[1]",
    color: "#1a1a1a",
    colorTailwind: "text-[#1a1a1a]",
    /** Heading is lowercase by design */
    textTransform: "lowercase",
    marginBottom: "mb-8",
  },

  body: [
    "Dorst & Lesser is a global social media agency based in Amsterdam, driven by a team of over 50 social media enthusiasts. Our mission is to make brands more social by fostering meaningful connections with their communities and enhancing brand loyalty through the power of AI social data.",
    "Since our founding in 2011, we have been leaders in the social media space. We all love what we do, which is why we've made our work our playground—a place where friendships begin and grow.",
  ],

  bodyStyles: {
    fontSize: "text-base md:text-[17px]",
    color: "#222222",
    colorTailwind: "text-[#222]",
    lineHeight: "leading-[1.6] md:leading-relaxed",
    fontWeight: "font-medium",
  },
};

// ── Section Layout ────────────────────────────────────────────
export const socialMediaLayout = {
  /** Total scroll height driving the animation */
  scrollHeight: "h-[400vh]",

  background: {
    color: "transparent",
    tailwind: "bg-transparent",
  },

  /** Internal sticky panel padding */
  stickyPadding: "py-12 md:py-24",

  /** Max width of the content row */
  maxWidth: "max-w-[1440px]",

  imageSide: {
    /** Tailwind width classes for left image column */
    width: "w-full md:w-5/12 lg:w-1/2",
    /** Image container max width */
    imageMaxWidth: "max-w-[380px]",
    /** Image container height (mobile / desktop) */
    imageHeight: "h-[60vh] md:h-[85vh]",
    borderRadius: "rounded-[20px]",
  },

  contentSide: {
    /** Tailwind width classes for right content column */
    width: "w-full md:w-7/12 lg:w-1/2",
  },
} as const;

// ── Scroll Animation Keyframes ────────────────────────────────
// scrollYProgress fractions that trigger each image animation phase
export const socialMediaAnimationKeyframes = {
  image1: { slideIn: [0, 0.10],    reveal: [0.10, 0.28], imageShow: [0.28, 0.33], scale: [0.43, 0.61, 0.76, 0.94] },
  image2: { slideIn: [0.33, 0.43], reveal: [0.43, 0.61], imageShow: [0.61, 0.66], scale: [0.76, 0.94], rotate: [0.43, 0.61] },
  image3: { slideIn: [0.66, 0.76], reveal: [0.76, 0.94], imageShow: [0.94, 0.99], rotate: [0.76, 0.94] },
} as const;
