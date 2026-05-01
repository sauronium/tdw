// ─────────────────────────────────────────────────────────────
//  WORK PAGE › CASES DATA
//  Edit project titles, descriptions, videos, and images here.
//  Each case is shown in the CasesScroller and the OurWork preview.
// ─────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────
export interface CaseStudy {
  /** URL slug used in /work/[slug] routing */
  id:              string;
  /** Display serial number shown on the scroller (e.g. "01 /") */
  serial:          string;
  title:           string;
  /** Short description shown at the bottom of the scroller layer */
  description:     string;
  /** Full body copy shown on the individual case page */
  fullDescription: string;
  /** Background video — shown in the scroller and OurWork preview (muted autoplay) */
  video:           string;
  /** Still image — shown on hover in the OurWork preview */
  image:           string;
  /** Alt text for the still image */
  imageAlt:        string;
  /** Whether the background should render the image or video */
  backgroundType?: "image" | "video";
  /** Array of strings for strategic objectives list */
  strategicObjectives?: string[];
  /** First full-width gallery image */
  galleryImage1?: string;
  /** Second full-width gallery image */
  galleryImage2?: string;
  /** Left image in the split showcase */
  showcaseImageLeft?: string;
  /** Right image in the split showcase */
  showcaseImageRight?: string;

  /** Homepage specific overrides */
  homepageTitle?: string;
  homepageDescription?: string;
  homepageMediaRestType?: "image" | "video";
  homepageMediaRestUrl?: string;
  homepageMediaHoverType?: "image" | "video";
  homepageMediaHoverUrl?: string;
}

// ── Cases ─────────────────────────────────────────────────────
// To add a case: append a new object and update `serial` accordingly.
// To reorder: move items (the scroller renders them in array order).
export const casesData: CaseStudy[] = [
  {
    id:              "art-basel",
    serial:          "01 /",
    title:           "Art Basel",
    description:     "Harnessing AI to transform how the art world engages.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video:           "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image:           "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    imageAlt:        "Art Basel project still",
    backgroundType:  "video",
    strategicObjectives: [
      "Develop a responsive and highly visual platform that showcases the global scale of Art Basel.",
      "Integrate ticketing, virtual tours, and live-streaming of VIP events seamlessly.",
      "Ensure the platform remains scalable to handle massive traffic spikes during peak fair days."
    ],
    galleryImage1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    galleryImage2: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2564&auto=format&fit=crop",
    showcaseImageLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    showcaseImageRight: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2564&auto=format&fit=crop",
    homepageMediaRestType: "video",
    homepageMediaRestUrl: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    homepageMediaHoverType: "image",
    homepageMediaHoverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id:              "frieze",
    serial:          "02 /",
    title:           "Frieze LA",
    description:     "Reimagining creative boundaries with immersive digital experiences.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video:           "https://videos.pexels.com/video-files/2882118/2882118-uhd_2560_1440_24fps.mp4",
    image:           "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    imageAlt:        "Frieze LA project still",
    backgroundType:  "image",
    strategicObjectives: [
      "Create an immersive digital map and exhibitor directory for quick on-site navigation.",
      "Build a minimalist yet bold design system that aligns with Frieze's brand identity.",
      "Enhance engagement with editorial content and video highlights from the fair."
    ],
    galleryImage1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    galleryImage2: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2564&auto=format&fit=crop",
    showcaseImageLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    showcaseImageRight: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2564&auto=format&fit=crop",
    homepageMediaRestType: "video",
    homepageMediaRestUrl: "https://videos.pexels.com/video-files/2882118/2882118-uhd_2560_1440_24fps.mp4",
    homepageMediaHoverType: "image",
    homepageMediaHoverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id:              "tate",
    serial:          "03 /",
    title:           "Tate Modern",
    description:     "Connecting legacy art institutions with modern sensory technologies.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    video:           "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    image:           "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    imageAlt:        "Tate Modern project still",
    backgroundType:  "video",
    strategicObjectives: [
      "Modernize the museum's digital archive, making it fully searchable and accessible.",
      "Implement a sleek, modern UI that elevates the user's focus on the artwork itself.",
      "Optimize the backend for fast delivery of high-resolution image assets globally."
    ],
    galleryImage1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    galleryImage2: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2564&auto=format&fit=crop",
    showcaseImageLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    showcaseImageRight: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2564&auto=format&fit=crop",
    homepageMediaRestType: "image",
    homepageMediaRestUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    homepageMediaHoverType: "video",
    homepageMediaHoverUrl: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4"
  },
];
