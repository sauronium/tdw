// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE › HERO SECTION
//  Edit heading, body paragraphs, and parallax image here.
// ─────────────────────────────────────────────────────────────

// ── Heading ───────────────────────────────────────────────────
export const aboutHeroHeading = {
  text:         "A Studio Born from Expertise",
  fontSize:     "text-4xl md:text-6xl lg:text-[6rem]",
  fontWeight:   "font-bold",
  color:        "#171717",
  colorTailwind:"text-[#171717]",
  letterSpacing:"tracking-tighter",
  lineHeight:   "leading-[0.95]",
  textAlign:    "text-center",
};

// ── Body Paragraphs ───────────────────────────────────────────
// Update or reorder paragraphs here. Each string is a <p> block.
export const aboutHeroParagraphs: string[] = [
  "At The Designers World, we are a team of passionate creative professionals with 7+ years of hands-on experience delivering exceptional results for high-end clients across industries. Based in New Delhi, India, we've come together to build a studio where design, content, and code work in perfect harmony. We understand what premium clients expect — precision, creativity, and results that speak for themselves. Every project we take on is a commitment to excellence. Your brand is in the right hands.",
  "We build websites that don't just look great — they perform. From sleek UI to seamless functionality, every site we craft is designed to captivate your audience, strengthen your brand, and turn visitors into loyal customers.",
];

export const aboutHeroBodyStyles = {
  fontSize:   "text-lg md:text-xl",
  fontWeight: "font-light",
  color:      "#171717",
  opacity:    "opacity-80",
  colorTailwind: "text-[#171717]/80",
  gap:        "gap-6",
  maxWidth:   "max-w-3xl",
  textAlign:  "text-center",
};

// ── Parallax Image ────────────────────────────────────────────
export const aboutHeroImage = {
  src:      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
  alt:      "The Designers World studio team",
  priority: true,
};

// ── Parallax Settings ─────────────────────────────────────────
export const aboutHeroParallax = {
  /** Image moves between these Y offsets as the section scrolls */
  yFrom: "-15%",
  yTo:   "15%",
  /** Extra height added to the image wrapper to allow parallax movement */
  imageHeightOverflow: "130%",
  imageTopOffset:      "-top-[15%]",
};

// ── Section Layout ────────────────────────────────────────────
export const aboutHeroLayout = {
  textSectionHeight: "h-[95vh]",
  imageWidth:        "w-[90vw]",
  imageHeight:       "h-[100vh]",
  imageRadius:       "rounded-3xl",
  bottomPadding:     "h-24",
  paddingX:          "px-4",
} as const;
