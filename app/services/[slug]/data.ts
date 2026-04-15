export interface ServiceCard {
  id: string;
  backgroundColor: string;
  image?: string;
  video?: string;
  title?: string;
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
      { id: "1", backgroundColor: "#000000", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: "2", backgroundColor: "#ef6c57", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" },
      { id: "3", backgroundColor: "#fbd841", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: "4", backgroundColor: "#a6c4b6", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80" },
      { id: "5", backgroundColor: "#2d3748", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
      { id: "6", backgroundColor: "#ecc94b", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" },
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
    heroHeadline: "graphic design agency\nfor creative teams.",
    cards: [
      { id: "1", backgroundColor: "#000000", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: "2", backgroundColor: "#ef6c57", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=600&q=80" },
      { id: "3", backgroundColor: "#fbd841", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
      { id: "4", backgroundColor: "#a6c4b6", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80" },
    ],
    servicesIncluded: [
       {
        id: "brand-identity",
        title: "Brand\nIdentity",
        items: [
          "We design memorable brand identities that resonate with your target audience and stand out in the market.",
          "Our process includes logo design, color typography, and comprehensive brand guidelines.",
          "We ensure your brand tells a compelling story across all touchpoints."
        ],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  "motion-graphics": {
    slug: "motion-graphics",
    heroBgColor: "#22c55e",
    heroHeadline: "motion graphics agency\nfor modern media.",
    cards: [
      { id: "1", backgroundColor: "#000000", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: "2", backgroundColor: "#ef6c57", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80" },
      { id: "3", backgroundColor: "#fbd841", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?auto=format&fit=crop&w=600&q=80" },
      { id: "4", backgroundColor: "#a6c4b6", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80" },
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
