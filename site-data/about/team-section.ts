// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE › TEAM SECTION
//  Edit team member names, titles, photos, and accent colors here.
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────
export interface TeamMember {
  name:       string;
  title:      string;
  /** Photo URL or local path (e.g. "/team/alex.jpg") */
  image:      string;
  /** Hex accent color used for the card background and title badge */
  themeColor: string;
}

// ── Team Members ──────────────────────────────────────────────
// To add a member: append a new object. To reorder: move items.
// Even-indexed cards (0, 2) render flush; odd-indexed (1, 3) are offset downward.
export const teamMembers: TeamMember[] = [
  {
    name:       "Alex Rivera",
    title:      "Lead Designer",
    image:      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    themeColor: "#4a88f5",
  },
  {
    name:       "Samira Jones",
    title:      "Creative Director",
    image:      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    themeColor: "#ed6e33",
  },
  {
    name:       "Michael Chen",
    title:      "Senior Developer",
    image:      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    themeColor: "#6bb88b",
  },
  {
    name:       "Laila Woods",
    title:      "Product Manager",
    image:      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    themeColor: "#a364ff",
  },
];

// ── Section Heading ───────────────────────────────────────────
export const teamHeading = {
  text:         "The minds behind \nthe magic.",
  fontSize:     "text-4xl md:text-5xl lg:text-[80px]",
  fontWeight:   "font-medium",
  letterSpacing:"tracking-tight",
  color:        "#171717",
  colorTailwind:"text-[#171717]",
  lineHeight:   "leading-[1.1]",
};

// ── Card Dimensions ───────────────────────────────────────────
export const teamCardStyles = {
  width:        "w-full max-w-[340px] lg:max-w-[400px]",
  height:       "h-[480px] lg:h-[580px]",
  borderRadius: "24px",
  /** Downward offset applied to odd-indexed columns */
  oddColumnOffset: "sm:mt-12 lg:mt-24",
};

// ── Section Layout ────────────────────────────────────────────
export const teamLayout = {
  background:    { color: "#fdf8f2", tailwind: "bg-[#fdf8f2]" },
  paddingTop:    "pt-24 md:pt-32",
  paddingBottom: "pb-8",
  paddingX:      "px-4 md:px-8",
  gridGap:       "gap-6 md:gap-8",
} as const;
