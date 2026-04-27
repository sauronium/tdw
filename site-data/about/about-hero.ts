// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE › HERO SECTION
//  Edit heading, body paragraphs, and parallax image here.
// ─────────────────────────────────────────────────────────────

// ── Heading ───────────────────────────────────────────────────
export const aboutHeroHeading = {
  text: "The Creative Studio Behind Brands That Stand Out.",
  fontSize: "text-4xl md:text-6xl lg:text-[6rem]",
  fontWeight: "font-bold",
  color: "#171717",
  colorTailwind: "text-[#171717]",
  letterSpacing: "tracking-tighter",
  lineHeight: "leading-[0.95]",
  textAlign: "text-center",
};

// ── Body Paragraphs ───────────────────────────────────────────
// Update or reorder paragraphs here. Each string is a <p> block.
export const aboutHeroParagraphs: string[] = [
  "The Designers World is a full-service creative agency specialising in graphic design, web design and development, digital marketing, and motion graphics. Founded by a team of creative professionals with over 10 years of combined experience, we set out to build a studio where strategy, design, and technology work together to deliver real business results. Based in New Delhi, India, we work with startups, small businesses, and premium brands — helping them build powerful digital identities, high-performing websites, and marketing campaigns that drive growth.",
  "",
];

export const aboutHeroBodyStyles = {
  fontSize: "text-lg md:text-xl",
  fontWeight: "font-light",
  color: "#171717",
  opacity: "opacity-80",
  colorTailwind: "text-[#171717]/80",
  gap: "gap-6",
  maxWidth: "max-w-3xl",
  textAlign: "text-center",
};

// ── Parallax Image ────────────────────────────────────────────
export const aboutHeroImage = {
  src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
  alt: "The Designers World studio team",
  priority: true,
};

// ── Parallax Settings ─────────────────────────────────────────
export const aboutHeroParallax = {
  /** Image moves between these Y offsets as the section scrolls */
  yFrom: "-15%",
  yTo: "15%",
  /** Extra height added to the image wrapper to allow parallax movement */
  imageHeightOverflow: "130%",
  imageTopOffset: "-top-[15%]",
};

// ── Section Layout ────────────────────────────────────────────
export const aboutHeroLayout = {
  textSectionHeight: "h-[95vh]",
  imageWidth: "w-[90vw]",
  imageHeight: "h-[100vh]",
  imageRadius: "rounded-3xl",
  bottomPadding: "h-24",
  paddingX: "px-4",
} as const;
