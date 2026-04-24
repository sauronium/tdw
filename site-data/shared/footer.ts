// ─────────────────────────────────────────────────────────────
//  SHARED › FOOTER
//  Controls the "Let's Jam" CTA section, social link cards,
//  team avatars, and footer layout used site-wide
// ─────────────────────────────────────────────────────────────
import { fonts } from "../tokens";

// ── Types ─────────────────────────────────────────────────────
export interface SocialLink {
  /** Display name shown at the bottom of each card */
  name: string;
  /** Text revealed on hover above the icon */
  hoverText: string;
  /** Link destination */
  href: string;
  /** Icon identifier — resolved to a JSX element in the component */
  iconKey: "awwwards" | "clutch" | "instagram" | "dribbble" | "substack" | "linkedin";
}

export interface TeamAvatar {
  /** DiceBear / image URL */
  src: string;
  alt: string;
}

// ── Call-to-Action Block ──────────────────────────────────────
export const footerCTA = {
  headline: "Let's Jam.",
  headlineFontFamily: fonts.heading,
  headlineFontSize: "text-[5rem] md:text-[8rem]",
  headlineFontWeight: "font-medium",
  headlineLetterSpacing: "tracking-tight",
  headlineColor: "#1a1a1a",
  headlineColorTailwind: "text-[#1a1a1a]",
  headlineLineHeight: "leading-none",

  button: {
    label: "Get Started",
    background: "#1a1a1a",
    backgroundTailwind: "bg-[#1a1a1a]",
    hoverBackground: "hover:bg-black",
    textColor: "text-white",
    paddingX: "px-10 md:px-12",
    paddingY: "py-5 md:py-6",
    borderRadius: "rounded-full",
    fontSize: "text-2xl md:text-3xl",
    fontWeight: "font-normal",
    letterSpacing: "tracking-wide",
    shadow: "shadow-xl",
    hoverScale: "hover:scale-[1.02]",
  },
};

// ── Social Links ──────────────────────────────────────────────
export const footerSocialLinks: SocialLink[] = [
  { name: "Awwwards",  hoverText: "Awards",     href: "#", iconKey: "awwwards"  },
  { name: "Clutch",    hoverText: "Reviews",    href: "#", iconKey: "clutch"    },
  { name: "Instagram", hoverText: "Social",     href: "#", iconKey: "instagram" },
  { name: "Dribbble",  hoverText: "Eye Candy",  href: "#", iconKey: "dribbble"  },
  { name: "Substack",  hoverText: "Newsletter", href: "#", iconKey: "substack"  },
  { name: "LinkedIn",  hoverText: "Connect",    href: "#", iconKey: "linkedin"  },
];

// ── Social Card Styles ────────────────────────────────────────
export const footerSocialCardStyles = {
  height: "h-[160px] md:h-[200px]",
  padding: "p-6 md:p-8",
  hoverBackground: "hover:bg-black/5",

  /** Tracking bubble that follows the cursor on hover */
  bubble: {
    size: "w-28 h-28",
    borderRadius: "rounded-full",
    background: "#f26522",
    backgroundTailwind: "bg-[#f26522]",
    springDamping: 25,
    springStiffness: 250,
    springMass: 0.5,
  },

  label: {
    fontSize: "text-[11px] md:text-[13px]",
    fontWeight: "font-medium",
    letterSpacing: "tracking-wide",
    textTransform: "uppercase",
  },

  hoverText: {
    fontSize: "text-xl",
    fontWeight: "font-medium",
    letterSpacing: "tracking-tight",
    color: "#000000",
  },

  /** Container for the full social links row */
  grid: {
    borderRadius: "rounded-2xl md:rounded-[24px]",
    border: "border border-black/10",
    background: "bg-[#fdf8f2]/50",
    backdropBlur: "backdrop-blur-sm",
    shadow: "shadow-sm",
  },
};

// ── Team Avatars ──────────────────────────────────────────────
export const footerTeamAvatars: TeamAvatar[] = [
  { src: "https://api.dicebear.com/7.x/notionists/svg?seed=Mia",    alt: "Team member Mia"    },
  { src: "https://api.dicebear.com/7.x/notionists/svg?seed=Liam",   alt: "Team member Liam"   },
  { src: "https://api.dicebear.com/7.x/notionists/svg?seed=Olivia", alt: "Team member Olivia" },
];

export const footerAvatarStyles = {
  size: "w-12 h-12 md:w-14 md:h-14",
  border: "border-2 border-white",
  borderRadius: "rounded-full",
  overlapMargin: "-space-x-4",
};

// ── Footer Contact Prompt ─────────────────────────────────────
export const footerContactPrompt = {
  text: "We're always up for a coffee and a chat,",
  linkLabel: "Send us a message",
  linkHref: "#",
  suffix: "and we'll get back to you!.",
  linkColor: "#8c6bf7",
  linkColorTailwind: "text-[#8c6bf7]",
  fontSize: "text-sm md:text-base",
  fontWeight: "font-medium",
  color: "#333333",
  colorTailwind: "text-[#333]",
  lineHeight: "leading-snug",
  maxWidth: "max-w-[280px]",
};

// ── Footer Background ─────────────────────────────────────────
export const footerBackground = {
  /** Mobile and desktop differ in the original */
  mobile: "#fdf8f2",
  desktop: "#fdf8f2",
  tailwind: "bg-[#fdf8f2]",
  borderTop: "border-t border-black/5",
  paddingTop: "pt-10",
  paddingBottom: "pb-8",
} as const;
