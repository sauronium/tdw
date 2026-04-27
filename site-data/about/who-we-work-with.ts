// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE › WHO WE WORK WITH SECTION
//  Edit client-type cards (title, description, color) here.
//  The SVG icon for each card is resolved by `iconKey` in the component.
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────
export interface ClientTypeCard {
  title: string;
  desc: string;
  /** Full Tailwind background class — must be a literal for scanning */
  bg: string;
  /** Hex color for reference / style props */
  color: string;
  /** Icon identifier — resolved to a JSX element in the component */
  iconKey: "startup" | "small-business" | "premium-brand";
  /** Tailwind margin-top offset for staggered column layout */
  offset: string;
}

// ── Client Type Cards ─────────────────────────────────────────
// To reorder: move items. To change colors: update both `bg` and `color`.
export const clientTypeCards: ClientTypeCard[] = [
  {
    title: "Startups",
    desc: "From brand identity and logo design to website development and social media setup — we help startups build a professional digital presence that attracts investors, wins customers, and sets the foundation for long-term growth.",
    bg: "bg-[#ed6e33]",
    color: "#ed6e33",
    iconKey: "startup",
    offset: "mt-0",
  },
  {
    title: "Small Businesses",
    desc: "We help small businesses go beyond a basic logo — building complete brand systems, high-performing websites, SEO strategies, and digital marketing campaigns that drive real visibility, leads, and local growth.",
    bg: "bg-[#4a88f5]",
    color: "#4a88f5",
    iconKey: "small-business",
    offset: "mt-10 md:mt-16",
  },
  {
    title: "Premium Brands",
    desc: "For established brands that demand the best — we deliver refined graphic design, flawless custom web development, premium motion graphics, and strategic digital marketing that reflects your brand's true market value.",
    bg: "bg-[#6bb88b]",
    color: "#6bb88b",
    iconKey: "premium-brand",
    offset: "mt-0",
  },
];

// ── Section Heading ───────────────────────────────────────────
export const whoWeWorkWithHeading = {
  text: "Built for Businesses Like Yours",
  fontSize: "text-5xl md:text-6xl lg:text-7xl",
  fontWeight: "font-normal",
  letterSpacing: "tracking-tight",
  color: "#171717",
  colorTailwind: "text-[#171717]",
  lineHeight: "leading-[1.1]",
  textAlign: "text-center",
  marginBottom: "mb-16 md:mb-24",
};

// ── Card Styles ───────────────────────────────────────────────
export const clientTypeCardStyles = {
  borderRadius: "rounded-3xl",
  padding: "p-8",
  minHeight: "min-h-[420px] md:min-h-[480px]",
  textColor: "text-white",

  title: {
    fontSize: "text-3xl md:text-4xl",
    fontWeight: "font-semibold",
    lineHeight: "leading-tight",
    marginBottom: "mb-4",
  },
  desc: {
    fontSize: "text-base md:text-lg",
    fontWeight: "font-light",
    lineHeight: "leading-snug",
    opacity: "opacity-90",
  },
  icon: {
    size: "w-16 h-16",
    opacity: "opacity-80",
    margin: "mt-auto",
  },
};

// ── Section Layout ────────────────────────────────────────────
export const whoWeWorkWithLayout = {
  background: { color: "#fdf8f2", tailwind: "bg-[#fdf8f2]" },
  paddingY: "py-20 md:py-28",
  paddingX: "px-4 md:px-8",
  maxWidth: "max-w-6xl",
  gridGap: "gap-6",
} as const;
