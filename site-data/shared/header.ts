// ─────────────────────────────────────────────────────────────
//  SHARED › HEADER
//  Controls logo, navigation links, CTA buttons, and styling
//  for the site-wide header used on every page
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ── Logo ──────────────────────────────────────────────────────
export const headerLogo = {
  src: "/tdw-logo.svg",
  alt: "The Designers World",
  /** Hint dimensions for Next.js Image */
  width: 200,
  height: 50,
  /** Tailwind rendered size classes */
  sizeClass: "h-12 w-auto",
  href: "/",
  priority: true,
};

// ── Navigation Links ──────────────────────────────────────────
export const headerNavLinks: NavLink[] = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work" },
];

// ── CTA Buttons ───────────────────────────────────────────────
export const headerCTA = {
  primary: {
    label: "Start a project",
    href: "/start-project",
    /** Background / text colors */
    background: "#ff5a26",
    backgroundTailwind: "bg-[#ff5a26]",
    textColor: "text-white",
    fontWeight: "font-medium",
    paddingX: "px-6",
    paddingY: "py-3",
    borderRadius: "rounded-lg",
    hoverEffect: "hover:scale-105",
    fontSize: "text-lg",
  },

  iconButton: {
    href: "/start-project",
    /** Background color of the circular icon button */
    background: "#ffcdfa",
    backgroundTailwind: "bg-[#ffcdfa]",
    /** Arrow icon stroke color */
    arrowStroke: "#ff5a26",
    size: "w-12 h-12",
    borderRadius: "rounded-full",
    hoverEffect: "hover:translate-x-1 hover:-translate-y-1",
  },
};

// ── Navigation Container Styles ───────────────────────────────
export const headerNavStyles = {
  background: "bg-white",
  paddingX: "px-10",
  paddingY: "py-3",
  borderRadius: "rounded-full",
  shadow: "shadow-sm",
  gapBetweenLinks: "gap-10",

  link: {
    color: "text-foreground",
    fontWeight: "font-bold",
    hoverColor: "hover:text-gray-600",
    fontSize: "text-lg",
  },
};

// ── Header Layout ─────────────────────────────────────────────
export const headerLayout = {
  paddingX: "px-6",
  paddingY: "py-6",
  maxWidth: "max-w-[1440px]",
} as const;
