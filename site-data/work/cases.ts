// ─────────────────────────────────────────────────────────────
//  WORK PAGE › CASES DATA
//  Edit project titles, descriptions, videos, and images here.
//  Each case is shown in the CasesScroller and the OurWork preview.
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────
export interface CaseStudy {
  /** URL slug used in /work/[slug] routing */
  id: string;
  /** Display serial number shown on the scroller (e.g. "01 /") */
  serial: string;
  title: string;
  /** Short description shown at the bottom of the scroller layer */
  description: string;
  /** Full body copy shown on the individual case page */
  fullDescription: string;
  /** Background video — shown in the scroller and OurWork preview (muted autoplay) */
  video: string;
  /** Still image — shown on hover in the OurWork preview */
  image: string;
  /** Alt text for the still image */
  imageAlt: string;
}

// ── Cases ─────────────────────────────────────────────────────
// To add a case: append a new object and update `serial` accordingly.
// To reorder: move items (the scroller renders them in array order).
export const casesData: CaseStudy[] = [
  {
    id: "art-basel",
    serial: "01 /",
    title: "Art Basel",
    description: "Harnessing AI to transform how the art world engages.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image: "",
    imageAlt: "Art Basel project still",
  },
  {
    id: "frieze",
    serial: "02 /",
    title: "Frieze LA",
    description: "Reimagining creative boundaries with immersive digital experiences.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video: "https://videos.pexels.com/video-files/2882118/2882118-uhd_2560_1440_24fps.mp4",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    imageAlt: "Frieze LA project still",
  },
  {
    id: "tate",
    serial: "03 /",
    title: "Tate Modern",
    description: "Connecting legacy art institutions with modern sensory technologies.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    imageAlt: "Tate Modern project still",
  },
];
