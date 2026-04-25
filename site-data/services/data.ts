export interface ServiceCard {
  id: string;
  backgroundColor: string;
  title: string;
  listItems: string[];
}

export interface ServiceIncluded {
  id: string;
  title: string;
  items: string[];
  image: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcess {
  label: string;
  heading: string;
  subheading: string;
  steps: ProcessStep[];
}

export interface TechStackItem {
  id: string;
  name: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
}

export interface ServiceDeliverables {
  label: string;
  heading: string;
  subheading: string;
  items: DeliverableItem[];
}

export interface ServiceData {
  slug: string;
  heroBgColor: string;
  heroHeadline: string;
  cards: ServiceCard[];
  servicesIncluded?: ServiceIncluded[];
  process?: ServiceProcess;
  techStack?: TechStackItem[];
  deliverables?: ServiceDeliverables;
  ctaText?: string;
}

export const servicesData: Record<string, ServiceData> = {
  "web-design-and-development": {
    slug: "web-design-and-development",
    heroBgColor: "#395ef0",
    heroHeadline: "web design agency\nfor leading brands.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Starter Pack", listItems: ["Logo design & variations", "Business card & letterhead", "Brand colour palette", "Social media profile setup"] },
      { id: "2", backgroundColor: "#F7C518", title: "Growth Pack", listItems: ["Everything in Starter", "Website design", "Marketing materials", "Custom illustrations"] },
      { id: "3", backgroundColor: "#FD6824", title: "Pro Pack", listItems: ["Everything in Growth", "App design", "Motion graphics", "Full brand guidelines"] },
      { id: "4", backgroundColor: "#408BF7", title: "Ultimate Pack", listItems: ["Everything in Pro", "Full rebrand", "Dedicated design team", "Unlimited revisions"] },
    ],
    servicesIncluded: [
      {
        id: "ux-strategy",
        title: "UX Strategy &\nInterface Design",
        items: [
          "Our UX process focuses on understanding user intent, business goals, and content priorities before any interface is designed.",
          "We translate strategy into high-fidelity UI design—balancing aesthetics, usability, accessibility, and brand consistency.",
          "The result is an interface that looks refined, feels intuitive, and supports meaningful actions."
        ],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "web-development",
        title: "Web\nDevelopment",
        items: [
          "We build exceptionally fast, secure, and scalable websites using modern technologies like Next.js, React, and Tailwind CSS.",
          "Our development process prioritizes clean code, optimal performance, and seamless integrations.",
          "Every site is rigorously tested across devices to ensure a flawless experience for all users."
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      },
       {
        id: "seo",
        title: "SEO &\nPerformance",
        items: [
          "We build with technical SEO best practices from the ground up to ensure your site is easily found.",
          "From structured data to optimized core web vitals, we ensure your site ranks well and loads instantly.",
          "We also provide ongoing monitoring to keep your site at peak performance long after launch."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
      label: "Process",
      heading: "How we build digital experiences.",
      subheading: "This is how we roll.",
      steps: [
        {
          id: "insight",
          number: "1.",
          title: "Insight",
          description: "We dig deep into your brand, target audience, and market to understand the fundamental challenges and opportunities."
        },
        {
          id: "foundation",
          number: "2.",
          title: "Foundation",
          description: "Contagious brand story, content pillars, and structural frameworks that form the bedrock of your new digital presence."
        },
        {
          id: "action",
          number: "3.",
          title: "Action",
          description: "Clear strategy with a solid plan, measurable goals, and smart campaigns ready for flawless execution."
        }
      ]
    },
    techStack: [
      { id: "ts", name: "TypeScript" },
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "framer", name: "Framer Motion" },
      { id: "figma", name: "Figma" },
      { id: "vercel", name: "Vercel" },
      { id: "supabase", name: "Supabase" },
    ],
    deliverables: {
      label: "Deliverables",
      heading: "What you get.",
      subheading: "All the individual elements that together form your complete digital strategy.",
      items: [
        {
          id: "target-audience",
          title: "Target Group Mapping",
          description: "We bring into sharp focus exactly who your target audience is, where they frequently interact, and what rapidly grabs their attention."
        },
        {
          id: "visual-identity",
          title: "Visual Identity & Assets",
          description: "Stunning design systems and distinct asset libraries ensuring absolute consistency across every single touchpoint."
        },
        {
          id: "ux-ui",
          title: "UX/UI Wireframes",
          description: "Detailed, data-driven structural layouts and user flows to guarantee seamless navigation before visual polish is added."
        },
        {
          id: "interactive-prototypes",
          title: "Interactive Prototypes",
          description: "Clickable, high-fidelity demonstrations of precisely how the final product will look, feel, and react to your users."
        },
        {
          id: "tech-build",
          title: "Production-ready Build",
          description: "The fully engineered, optimized, scalable, and secure codebase tailored exactly for your required environment."
        },
        {
          id: "content-system",
          title: "Content & Copy Framework",
          description: "A comprehensive guide on your brand's verbal identity, including tone-of-voice, key pillars, and structural content guidelines."
        }
      ]
    },
    ctaText: "ready to build\nsomething amazing."
  },
  "graphic-design": {
    slug: "graphic-design",
    heroBgColor: "#ff5a26",
    heroHeadline: "Professional Graphic Design Services That\nMake Your Brand Unforgettable.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Starter Pack", listItems: ["Logo design & variations", "Business card & letterhead", "Brand colour palette", "Social media profile setup"] },
      { id: "2", backgroundColor: "#F7C518", title: "Growth Pack", listItems: ["Everything in Starter", "Website design", "Marketing materials", "Custom illustrations"] },
      { id: "3", backgroundColor: "#FD6824", title: "Pro Pack", listItems: ["Everything in Growth", "App design", "Motion graphics", "Full brand guidelines"] },
      { id: "4", backgroundColor: "#408BF7", title: "Ultimate Pack", listItems: ["Everything in Pro", "Full rebrand", "Dedicated design team", "Unlimited revisions"] },
    ],
    servicesIncluded: [
       {
        id: "logo-design",
        title: "Logo Design &\nBrand Identity",
        items: [
          "We design custom logos that capture the essence of your brand — memorable, scalable, and versatile.",
          "Our brand identity design process includes colour palette development, typography selection, iconography, and visual style guidelines.",
          "Every logo we create goes through multiple concept rounds, refinements, and client feedback cycles."
        ],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
      },
       {
        id: "social-media",
        title: "Social Media Graphics\n& Content Design",
        items: [
          "We design scroll-stopping social media graphics — tailored for Instagram, Facebook, LinkedIn, and more.",
          "Every social media design is created with platform-specific dimensions, safe zones, and visual best practices.",
          "Our designs are optimised for both organic reach and paid social campaigns."
        ],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80"
      },
       {
        id: "marketing-creatives",
        title: "Marketing &\nAdvertising Creatives",
        items: [
          "We create high-converting marketing creatives for digital ads, email headers, and landing page graphics.",
          "Every advertising creative is designed with A/B testing in mind to optimise performance.",
          "We combine persuasive copywriting with strategic visual design to drive measurable results."
        ],
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?auto=format&fit=crop&w=800&q=80"
      },
       {
        id: "print-design",
        title: "Print Design &\nMarketing Collateral",
        items: [
          "We design premium print materials with print-ready files that ensure sharp, professional output every time.",
          "Every print design is created in CMYK colour mode with proper bleed, trim marks, and resolution settings.",
          "We handle both single-page designs and multi-page layout work, including paper stock recommendations."
        ],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
      label: "Process",
      heading: "How We Design Visuals That Drive Results.",
      subheading: "A structured graphic design process — from creative brief to final delivery.",
      steps: [
        {
          id: "discovery",
          number: "1.",
          title: "Discovery",
          description: "Every graphic design project begins with a detailed creative brief to ensure every visual decision is strategic and informed."
        },
        {
          id: "research",
          number: "2.",
          title: "Research & Moodboarding",
          description: "We analyse industry trends, competitor visual strategies, and audience preferences to create a mood board."
        },
        {
          id: "concept",
          number: "3.",
          title: "Concept Development",
          description: "Our designers develop multiple initial concepts based on the approved creative direction."
        },
        {
          id: "execution",
          number: "4.",
          title: "Design Execution",
          description: "Once the concept is finalised, we move into full design production, crafting every element with pixel-perfect precision."
        },
        {
          id: "refinement",
          number: "5.",
          title: "Feedback & Refinement",
          description: "We share the work with you for review and gather detailed feedback to refine everything until it's exactly right."
        },
        {
          id: "delivery",
          number: "6.",
          title: "Final Delivery",
          description: "All approved designs are exported in print-ready and web-optimised formats, organised in a structured file package."
        }
      ]
    },
    techStack: [
      { id: "photoshop", name: "Adobe Photoshop" },
      { id: "illustrator", name: "Adobe Illustrator" },
      { id: "indesign", name: "Adobe InDesign" },
      { id: "aftereffects", name: "Adobe After Effects" },
      { id: "premiere", name: "Adobe Premiere Pro" },
      { id: "figma", name: "Figma" },
      { id: "canva", name: "Canva Pro" },
      { id: "corel", name: "CorelDRAW" },
      { id: "blender", name: "Blender" },
      { id: "procreate", name: "Procreate" }
    ],
    deliverables: {
      label: "Deliverables",
      heading: "What You Get.",
      subheading: "Every creative asset you need — designed, refined, and delivered in production-ready formats.",
      items: [
        {
          id: "logo",
          title: "Custom Logo & Brand Mark",
          description: "Professionally designed custom logo with all variations delivered in vector and raster formats ready for web and print."
        },
        {
          id: "identity",
          title: "Complete Brand Identity System",
          description: "A cohesive visual identity including colour palette, typography hierarchy, iconography, and comprehensive brand guidelines."
        },
        {
          id: "social-kit",
          title: "Social Media Design Kit",
          description: "A complete set of branded social media templates sized and optimised for every major platform."
        },
        {
          id: "print-materials",
          title: "Print-Ready Marketing Materials",
          description: "Print designs delivered in CMYK with proper bleed, trim marks, and high resolution ready for professional printing."
        },
        {
          id: "ad-creatives",
          title: "Advertising & Campaign Creatives",
          description: "A full set of digital advertising creatives in multiple sizes and variations for A/B testing and optimisation."
        },
        {
          id: "packaging",
          title: "Packaging & Label Design",
          description: "Product packaging delivered with accurate die-line files, print specifications, and colour-separated artwork."
        }
      ]
    },
    ctaText: "Let's Design Something\nYour Audience Can't Look Away From."
  },
  "motion-graphics": {
    slug: "motion-graphics",
    heroBgColor: "#22c55e",
    heroHeadline: "motion graphics agency\nfor modern media.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Starter Pack", listItems: ["Logo design & variations", "Business card & letterhead", "Brand colour palette", "Social media profile setup"] },
      { id: "2", backgroundColor: "#F7C518", title: "Growth Pack", listItems: ["Everything in Starter", "Website design", "Marketing materials", "Custom illustrations"] },
      { id: "3", backgroundColor: "#FD6824", title: "Pro Pack", listItems: ["Everything in Growth", "App design", "Motion graphics", "Full brand guidelines"] },
      { id: "4", backgroundColor: "#408BF7", title: "Ultimate Pack", listItems: ["Everything in Pro", "Full rebrand", "Dedicated design team", "Unlimited revisions"] },
    ],
    servicesIncluded: [
       {
         id: "animation",
        title: "2D & 3D\nAnimation",
        items: [
          "We create captivating animations that bring your ideas to life and engage your audience.",
          "From explainer videos to dynamic social media content, we handle all aspects of motion design.",
          "Our animations are crafted to align perfectly with your brand's style and messaging."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
};
