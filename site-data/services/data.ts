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
  overviewText?: string;
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
    heroBgColor: "#fdf8f2",
    heroHeadline: "We Design Websites That Build Brands and Drive Business.",
    overviewText: "we're the web design and development agency that elevates brands into social icons. through a blend of data, creativity and strategy, we create lasting connections and fuel engagement.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Landing Page", listItems: ["Product launches & campaigns", "Event promotions", "Single-service businesses", "Lead generation pages"] },
      { id: "2", backgroundColor: "#F7C518", title: "Business Website", listItems: ["Small businesses & startups", "Consultancies & agencies", "Service-based companies", "Portfolio & personal brands"] },
      { id: "3", backgroundColor: "#FD6824", title: " E-Commerce Store", listItems: ["Online retail & fashion brands", "D2C product businesses", "Multi-category stores", "Subscription-based products"] },
      { id: "4", backgroundColor: "#408BF7", title: "Web Application", listItems: ["SaaS platforms & dashboards", "Booking & management systems", "Client portals & tools", "API-driven applications"] },
      { id: "3", backgroundColor: "#FD6824", title: "Custom & Enterprise", listItems: ["Large-scale enterprise solutions", "Multi-platform integrations", "Complete digital ecosystems", "Fully tailored builds from scratch"] },
    ],
    servicesIncluded: [
      {
        id: "ux-strategy",
        title: "UX Strategy & Interface Design",
        items: [
          "Our UX design process starts with deep research into your target audience, user behaviour, and business objectives, ensuring every design decision is backed by data and aligned with your goals.",
          "We create high-fidelity UI designs that balance visual aesthetics, brand consistency, web accessibility standards (WCAG), and conversion-focused layouts that guide users toward action.",
          "The result is a professional website interface built around intuitive navigation and clear content hierarchy that looks refined, feels effortless, and keeps bounce rates low while increasing time-on-site."
        ],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "responsive-web-design",
        title: "Responsive Web Design & Mobile Optimisation",
        items: [
          "We design and develop fully responsive websites that adapt seamlessly across desktop, tablet, and mobile, tested across Chrome, Safari, Firefox, and Edge to ensure cross-browser compatibility.",
          "We follow a mobile-first design approach, prioritising fast load times, touch-friendly navigation, and optimised media for mobile users who make up over 60% of web traffic.",
          "Our mobile-optimised websites meet Google's Core Web Vitals benchmarks, directly improving your search engine rankings, organic visibility, and overall user experience."
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "custom-web-development",
        title: "Custom Website Development",
        items: [
          "We build custom-coded websites from scratch using modern technologies like React, Next.js, and Node.js with clean, scalable code that allows easy updates, feature additions, and third-party integrations as your business grows.",
          "We implement secure development practices including SSL encryption, input validation, and regular code audits, with rigorous quality assurance testing across devices and browsers before any website goes live.",
          "We also build custom functionality like booking systems, calculators, client dashboards, or any feature your business requires, all without cookie-cutter templates or page builders."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "ecommerce-web-development",
        title: "E-Commerce Website Development",
        items: [
          "We develop high-converting e-commerce websites on platforms like Shopify, WooCommerce, and custom frameworks with secure payment gateways, product catalogue management, and a smooth checkout experience that reduces cart abandonment.",
          "Every online store includes inventory management, order tracking, customer accounts, and automated email notifications for a seamless buying experience chosen based on your business scale and growth goals.",
          "We optimise product pages with structured data markup (Schema), fast-loading images, and SEO-friendly URLs to help your products rank higher on Google Shopping and organic search."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "website-speed-and-performance-optimisation",
        title: "Website Speed & Performance Optimisation",
        items: [
          "We audit your website's performance using Google PageSpeed Insights, GTmetrix, and Lighthouse, identifying every bottleneck and implementing image compression, lazy loading, code minification, browser caching, and CDN integration.",
          "Google uses page speed as a direct ranking factor, and we ensure your site meets or exceeds all Core Web Vitals thresholds for better search engine rankings and user experience.",
          "We optimise both front-end rendering and server-side response times, ensuring your website loads in under 3 seconds even on slower mobile connections."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "on-page-and-technical-seo-setup",
        title: "On-Page SEO & Technical SEO Setup",
        items: [
          "Every website we build comes with a complete on-page SEO foundation including optimised meta titles, meta descriptions, heading structure (H1-H6), keyword-rich content placement, XML sitemaps, robots.txt, canonical tags, and structured data markup.",
          "Our team ensures your website is fully crawlable and indexable by search engines, fixing issues related to broken links, duplicate content, or redirect chains, with Google Search Console and Analytics integration from day one.",
          "We also optimise for local SEO with Google Business Profile integration, local schema markup, and location-based keyword targeting for businesses serving specific regions."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "cms-development-and-website-management",
        title: "On-Page SEO & Technical SEO Setup",
        items: [
          "We build easy-to-manage websites using WordPress, Webflow, and headless CMS platforms with a custom admin panel tailored to your workflow, making it simple to add blog posts, update pages, manage media, and edit SEO settings.",
          "We configure user roles, permission levels, and content scheduling features so your team can collaborate and publish content efficiently without touching code.",
          "Our CMS solutions are built with security best practices including regular updates, plugin audits, firewall setup, and automated backups to keep your website safe and running smoothly."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "website-maintenance-and-ongoing-support",
        title: "Website Maintenance & Ongoing Support",
        items: [
          "We provide ongoing website maintenance including security updates, plugin management, uptime monitoring, regular performance checks, bug fixes, content updates, feature enhancements, and design tweaks to keep your site evolving as your business grows.",
          "We offer monthly maintenance plans with dedicated support, ensuring any issue is identified and resolved before it impacts your users or search rankings.",
          "Every maintenance client receives a monthly website health report covering uptime, speed scores, security status, and SEO performance so you always know where your site stands."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
      label: "Process",
      heading: "How We Build High-Performance Websites.",
      subheading: "A structured web design and development process from discovery to delivery.",
      steps: [
        {
          id: "insight",
          number: "1.",
          title: "Insight",
          description: "We start every web design project with in-depth research, understanding your brand, target audience, competitors, and business objectives to identify the challenges, opportunities, and goals that will shape your entire website strategy."
        },
        {
          id: "foundation",
          number: "2.",
          title: "Foundation",
          description: "We define your website's information architecture, sitemap structure, content hierarchy, and SEO keyword strategy, building a solid technical and strategic foundation before any design work begins."
        },
        {
          id: "Wireframe",
          number: "3.",
          title: "Wireframe",
          description: "We create detailed wireframes and low-fidelity prototypes that map out every page layout, user flow, and conversion path, ensuring the user experience is intuitive, logical, and aligned with your business goals before moving to visual design."
        },
        {
          id: "Design",
          number: "4.",
          title: "Design",
          description: "Our UI designers craft high-fidelity, pixel-perfect website designs in tools like Figma, focusing on brand-consistent visuals, responsive layouts, typography, colour systems, and accessibility standards that make your website look premium across every device."
        },
        {
          id: "Development",
          number: "5.",
          title: "Development",
          description: "We bring your designs to life with clean, scalable code using modern technologies like React, Next.js, and Node.js, building fast-loading, SEO-friendly, fully responsive websites with cross-browser compatibility and secure architecture."
        },
        {
          id: "Testing",
          number: "6.",
          title: "Testing",
          description: "Every website goes through rigorous quality assurance including performance testing, mobile responsiveness checks, cross-browser validation, broken link audits, page speed analysis, and Core Web Vitals optimisation to ensure everything runs flawlessly before launch."
        },
        {
          id: "Launch",
          number: "7.",
          title: "Launch & Support",
          description: "Your website goes live with a smooth deployment process including DNS setup, SSL configuration, analytics integration, and search engine indexing. After launch, we provide ongoing website maintenance, performance monitoring, and dedicated support to keep your site running at its best."
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
      subheading: "Every deliverable you need for a complete, high-performing website — from strategy to launch and beyond.",
      items: [
        {
          id: "target-audience",
          title: "Custom Website Design",
          description: "You receive a fully custom, pixel-perfect website design tailored to your brand identity, built with modern UI principles, responsive layouts, and conversion-focused visual hierarchy that sets your business apart from competitors."
        },
        {
          id: "visual-identity",
          title: "Mobile-Responsive Development",
          description: "Your website is developed to perform flawlessly across all devices including desktop, tablet, and mobile with adaptive layouts, touch-friendly navigation, and optimised media that deliver a seamless user experience on every screen size."
        },
        {
          id: "seo-ready",
          title: "SEO-Ready Architecture",
          description: "Every website we deliver comes with a complete on-page SEO setup including optimised meta tags, clean URL structure, heading hierarchy, XML sitemap, schema markup, and Google Search Console integration so your site is ready to rank from day one."
        },
        {
          id: "interactive-prototypes",
          title: "UX/UI Wireframes & Prototypes",
          description: "Before development begins, you receive detailed wireframes and interactive prototypes that map out every page layout, user flow, and content placement so you see exactly how your website will look and function before a single line of code is written."
        },
        {
          id: "speed-optimised",
          title: "Speed-Optimised Performance",
          description: "Your website is built for speed with compressed assets, lazy loading, minified code, CDN integration, and server-side optimisation that ensures fast load times, strong Core Web Vitals scores, and a better ranking position on Google."
        },
        {
          id: "cms-access",
          title: "CMS & Admin Panel Access",
          description: "You get full control of your website through an easy-to-use content management system, allowing you to update text, images, blog posts, and pages without any coding knowledge or dependency on a developer."
        },
        {
          id: "cross-browser",
          title: "Cross-Browser & Security Testing",
          description: "Every website is rigorously tested across Chrome, Safari, Firefox, and Edge along with SSL encryption, firewall configuration, and security audits to ensure your site runs smoothly and keeps user data protected."
        },
        {
          id: "analytics-setup",
          title: "Analytics & Tracking Setup",
          description: "We configure Google Analytics, conversion tracking, and event monitoring on your website, giving you clear visibility into traffic sources, user behaviour, and performance metrics so you can make data-driven decisions from launch."
        },
        {
          id: "post-launch-support",
          title: "Post-Launch Support & Maintenance",
          description: "After your website goes live, we provide dedicated support including bug fixes, content updates, performance monitoring, security patches, and a monthly website health report to keep everything running at peak performance."
        },
      ]
    },
    ctaText: "Let's Build a Website Your Competitors Wish They Had."
  },
  "graphic-design": {
    slug: "graphic-design",
    heroBgColor: "#ff5a26",
    heroHeadline: "Professional Graphic Design Services That Make Your Brand Unforgettable.",
    overviewText: "we’re the graphic design agency that turns your vision into unforgettable visuals. From striking logos to complete brand identities, we combine creativity, strategy, and design excellence to make your brand stand out and leave a lasting impression.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Starter Pack", listItems: ["Logo design & variations", "Business card & letterhead", "Brand colour palette", "Social media profile setup"] },
      { id: "2", backgroundColor: "#F7C518", title: "Social Media Pack", listItems: ["Monthly post & story templates", "Carousel & reel cover designs", "Ad creatives for paid campaigns", "Platform-specific sizing"] },
      { id: "3", backgroundColor: "#FD6824", title: "Marketing Collateral Pack", listItems: ["Brochures & flyers", "Posters & banners", "Product catalogues", "Event & trade show materials"] },
      { id: "4", backgroundColor: "#408BF7", title: "Full Brand Identity Pack", listItems: ["Custom logo & brand mark", "Brand guidelines document", "Stationery & collateral design", "Social media brand kit"] },
      { id: "5", backgroundColor: "#408BF7", title: "Premium Creative Pack", listItems: ["Full brand identity & guidelines", "Social media & ad creatives", "Print & packaging design", "Presentation & pitch deck design"] },
    ],
    servicesIncluded: [
      {
        id: "logo-design",
        title: "Logo Design & Brand Identity",
        items: [
          "We design custom logos that capture the essence of your brand, memorable, scalable, and versatile enough to work across digital platforms, print materials, and merchandise with complete packages in all file formats including AI, EPS, SVG, PNG, and PDF.",
          "Our brand identity design process includes colour palette development, typography selection, iconography, and visual style guidelines that create a cohesive look across every touchpoint.",
          "Every logo goes through multiple concept rounds, refinements, and client feedback cycles to ensure the final mark represents your brand perfectly, optimised for web, social media, and high-resolution print."
        ],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "social-media-graphics",
        title: "Social Media Graphics & Content Design",
        items: [
          "We design scroll-stopping social media graphics including post templates, story designs, carousel layouts, reel covers, and ad creatives tailored for Instagram, Facebook, LinkedIn, and more with platform-specific dimensions and safe zones.",
          "We develop reusable content templates that allow your team to maintain a professional, on-brand social media presence without needing a designer for every post while ensuring maximum engagement and brand consistency.",
          "Our designs are optimised for both organic reach and paid social campaigns with clear visual hierarchy, strong call-to-action placement, and thumb-stopping visuals that drive results."
        ],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "marketing-creatives",
        title: "Marketing & Advertising Creatives",
        items: [
          "We create high-converting marketing creatives for digital ads, Google Display Network banners, Meta ad campaigns, email headers, and landing page graphics following platform-specific ad guidelines for Google, Facebook, Instagram, LinkedIn, and YouTube.",
          "Every advertising creative is designed with A/B testing in mind, delivering multiple variations so you can test headlines, visuals, and layouts to find what performs best.",
          "We combine persuasive copywriting with strategic visual design to create ad creatives that grab attention in the first 2 seconds and drive measurable clicks and conversions."
        ],
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "print-design",
        title: "Print Design & Marketing Collateral",
        items: [
          "We design premium print materials including business cards, letterheads, brochures, flyers, posters, banners, and catalogues in CMYK colour mode with proper bleed, trim marks, and resolution settings for flawless printing.",
          "We handle single-page designs and multi-page layout work from product catalogues and company profiles to event invitations and trade show materials.",
          "Our process includes paper stock recommendations, finishing options (matte, gloss, emboss, foil), and direct coordination with your printer for a hassle-free production experience."
        ],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "Packaging Design",
        title: "Packaging Design That Stands Out On The Shelf.",
        items: [
          "We design product packaging that stands out on shelves and screens, combining visual appeal with functional design covering structural layout, die-line creation, label design, colour selection, and typography.",
          "We design packaging for food & beverage, cosmetics, health & wellness, fashion, electronics, and consumer goods across both retail and e-commerce formats.",
          "Every packaging file is delivered print-ready with accurate die-lines, bleed areas, and colour specifications so your manufacturer can produce flawlessly without back-and-forth."
        ],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "presentation-design",
        title: "Presentation & Pitch Deck Design",
        items: [
          "We design professional, visually engaging presentations and pitch decks for investors, clients, or internal stakeholders with clean layouts, data visualisation, iconography, and brand-consistent design.",
          "We work with PowerPoint, Keynote, and Google Slides, delivering fully editable templates your team can reuse and customise for future presentations.",
          "Our process includes content structuring, storytelling flow, and visual hierarchy optimisation to ensure your key message lands with maximum impact and keeps your audience focused."
        ],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "infographic-design",
        title: "Infographic & Data Visualisation Design",
        items: [
          "We transform complex data, statistics, and processes into clear, visually engaging infographics including statistical infographics, process flows, comparison charts, timelines, and interactive data visualisations.",
          "Our infographic designs are optimised for both web and print with SEO-friendly alt text recommendations for digital use and high-resolution exports for printed materials.",
          "Every infographic is designed with your brand colours, typography, and visual style so it integrates seamlessly with your existing marketing materials and website content."
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "brand-guidelines",
        title: "Brand Guidelines & Visual Style Guide",
        items: [
          "We create comprehensive brand guideline documents including logo usage rules, colour codes (HEX, RGB, CMYK, Pantone), typography hierarchy, iconography, imagery style, and spacing guidelines.",
          "We include real-world application examples showing how your brand should appear on websites, social media, business cards, packaging, signage, and merchandise.",
          "A well-documented brand guideline protects your visual identity as your team grows, new designers come onboard, or you work with external agencies, keeping everything aligned and professional."
        ],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
      },

      {
        id: "landing-pages",
        title: "Landing Pages That Convert",
        items: [
          "We create high-converting landing pages designed for a single focus — capturing leads, driving registrations, or promoting specific products or offers.",
          "Our landing page design process includes conversion-focused copywriting, persuasive CTAs, visual hierarchy optimisation, and mobile-first responsive layouts built to maximise performance.",
          "We can integrate directly with your marketing tools, providing landing pages that work seamlessly with Mailchimp, HubSpot, or other lead management platforms."
        ],
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
      label: "Process",
      heading: "How We Design Visuals That Drive Results.",
      subheading: "A structured graphic design process  from creative brief to final delivery.",
      steps: [
        {
          id: "discovery",
          number: "1.",
          title: "Discovery",
          description: "Every graphic design project begins with a detailed creative brief — we learn about your brand, target audience, competitors, design preferences, and business goals to ensure every visual decision is strategic and informed."
        },
        {
          id: "research",
          number: "2.",
          title: "Research & Moodboarding",
          description: "We analyse your industry trends, competitor visual strategies, and audience preferences — then create a mood board with colour directions, typography options, imagery styles, and layout references for your review and approval."
        },
        {
          id: "concept",
          number: "3.",
          title: "Concept Development",
          description: "Our designers develop multiple initial concepts based on the approved creative direction — exploring different visual approaches, compositions, and styles to find the strongest idea that aligns with your brand and objectives."
        },
        {
          id: "execution",
          number: "4.",
          title: "Design Execution",
          description: "Once the concept is finalised, we move into full design production — crafting every element with pixel-perfect precision, brand-consistent styling, and attention to detail across all required formats and sizes."
        },
        {
          id: "refinement",
          number: "5.",
          title: "Feedback & Refinement",
          description: "We share the work with you for review and gather detailed feedback — then refine colours, layouts, typography, and imagery until every design element meets your expectations and is ready for production."
        },
        {
          id: "delivery",
          number: "6.",
          title: "Final Delivery",
          description: "All approved designs are exported in print-ready and web-optimised formats — AI, EPS, SVG, PDF, PNG, and JPG — organised in a structured file package with naming conventions for easy access and future use."
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
          description: "You receive a professionally designed custom logo with all variations including primary, secondary, icon-only, and monochrome, delivered in vector and raster formats ready for web, print, and merchandise."
        },
        {
          id: "identity",
          title: "Complete Brand Identity System",
          description: "Your brand gets a cohesive visual identity including colour palette with HEX, RGB, CMYK, and Pantone codes, typography hierarchy, iconography, and a comprehensive brand guidelines document."
        },
        {
          id: "social-kit",
          title: "Social Media Design Kit",
          description: "You receive a complete set of branded social media templates including post layouts, story designs, carousel formats, highlight covers, and ad creatives sized and optimised for every major platform."
        },
        {
          id: "print-materials",
          title: "Print-Ready Marketing Materials",
          description: "Every print design is delivered in CMYK with proper bleed, trim marks, and high resolution. Business cards, brochures, flyers, posters, and catalogues ready for professional printing without any additional preparation."
        },
        {
          id: "ad-creatives",
          title: "Advertising & Campaign Creatives",
          description: "You get a full set of digital advertising creatives including Google Display ads, Meta ad visuals, email banners, and landing page graphics in multiple sizes and variations for A/B testing and campaign optimisation."
        },
        {
          id: "packaging",
          title: "Packaging & Label Design",
          description: "Your product packaging is delivered with accurate die-line files, print specifications, and colour-separated artwork ready to send directly to your manufacturer for flawless production."
        },
        {
          id: "presentation-templates",
          title: "Presentation & Pitch Deck Templates",
          description: "You receive professionally designed, fully editable presentation templates in PowerPoint, Keynote, or Google Slides structured with consistent layouts, data visualisation, and brand styling."
        },
        {
          id: "icons",
          title: "Organised Source Files & Asset Library",
          description: "Every project is delivered with organised source files (AI, PSD, INDD, Figma) and a structured asset library making it easy for your team to access, edit, and reuse designs as your business grows."
        }
      ]
    },
    ctaText: "Let's Design Something\nYour Audience Can't Look Away From."
  },
  "motion-graphics": {
    slug: "motion-graphics",
    heroBgColor: "#22c55e",
    heroHeadline: "Professional Motion Graphics & Video Production for Brands That Move Fast.",
    overviewText: "We create high-impact motion graphics, social media videos, explainer videos, and advertising video content that captures attention, communicates your message, and drives conversions across every digital platform.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Social Media Video Pack", listItems: ["4 short-form videos/month (Reels)", "Caption overlays & text animations", "Platform-specific sizing & formatting", "Trending audio & sound design"] },
      { id: "2", backgroundColor: "#F7C518", title: "Explainer Video Pack", listItems: ["1 animated explainer video (60–90 sec)", "Script writing & storyboarding", "Professional voiceover & sound design", "2 social media cutdowns included"] },
      { id: "3", backgroundColor: "#FD6824", title: "Ad & PPC Video Pack", listItems: ["Video ads for Google, Meta & YouTube", "Multiple lengths (6s, 15s, 30s)", "A/B creative variations", "Performance-optimised formats"] },
      { id: "4", backgroundColor: "#408BF7", title: "Brand Video Pack", listItems: ["Brand/corporate film (60–120 sec)", "Logo animation & brand intro", "Voiceover, music & colour grading", "Multi-format delivery (web, social, event)"] },
      { id: "5", backgroundColor: "#408BF7", title: "Full Motion Suite", listItems: ["Social media videos + explainer video", "PPC ad creatives + brand film", "Logo animation & motion identity", "Full post-production & editing", "Monthly content delivery"] },
    ],
    servicesIncluded: [
      {
        id: "animation",
        title: "Social Media Video Production",
        items: [
          "We create platform-optimised short-form videos for Instagram Reels, YouTube Shorts, TikTok, Facebook, and LinkedIn with trending formats, fast-paced edits, and thumb-stopping visuals produced in platform-specific aspect ratios (9:16, 1:1, 16:9) with safe zone compliance and caption overlays.",
          "We handle the full production pipeline including concept ideation, scriptwriting, storyboarding, motion design, sound design, and final rendering so your brand has a consistent stream of high-quality video content every month.",
          "Our social media videos are designed for both organic reach and paid promotion with hook-driven openings, clear brand messaging, and strong call-to-action endings that drive clicks, follows, and conversions."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "animation",
        title: "Explainer Video Production",
        items: [
          "We produce animated explainer videos that break down complex products, services, and processes into clear, engaging visual stories scripted with a strategic narrative structure of problem, solution, benefit, and CTA that drives your audience toward action.",
          "We offer multiple animation styles including 2D character animation, motion graphics, whiteboard animation, kinetic typography, and isometric illustration tailored to your brand identity, with videos optimised for website embedding, SEO-friendly titles, and video schema markup.",
          "We deliver explainer videos in multiple lengths from 30-second teasers and 60-second social cuts to full 90-120 second versions so you can use them across website, social media, email, and paid ad campaigns."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "animation",
        title: "Advertising & PPC Video Ads",
        items: [
          "We create high-converting video ads for Google Ads (YouTube pre-roll, in-feed, bumper), Meta Ads (Facebook & Instagram), LinkedIn video ads, and programmatic display campaigns with attention-grabbing hooks within the first 3 seconds and strong CTAs optimised for conversion.",
          "We deliver multiple ad variations in different lengths (6s, 15s, 30s, 60s) and aspect ratios giving your media buying team the flexibility to A/B test creatives and optimise for the lowest cost per acquisition.",
          "Our video ads follow platform-specific best practices including skip-proof openings for YouTube, sound-off optimisation with text overlays for Meta, and professional framing for LinkedIn ensuring peak performance on every channel."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "animation",
        title: "Brand & Corporate Video Production",
        items: [
          "We produce premium brand videos and corporate films that communicate your company's story, mission, culture, and values crafted with cinematic motion graphics, professional voiceover, custom music, and brand-consistent visual styling.",
          "We create corporate video content for company introductions, product showcases, leadership messages, event recaps, training modules, investor presentations, recruitment campaigns, and internal communication.",
          "Our corporate videos are delivered in multiple formats including web-optimised MP4 and WebM, social media cuts, and high-resolution versions for large screen presentations and event displays."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "animation",
        title: "Product Demo & Showcase Videos",
        items: [
          "We create visually compelling product demo videos using motion graphics, screen recordings, close-up product shots, and animated infographics structured to address your customer's pain points first, then demonstrate how your product solves them.",
          "We produce product videos for website product pages, e-commerce listings (Amazon, Flipkart), social media, crowdfunding campaigns, and sales team pitch decks.",
          "Our product showcase videos include on-screen text overlays, spec callouts, and animated feature highlights ensuring key selling points are communicated clearly even when watched without sound."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "animation",
        title: "Logo Animation & Brand Motion Identity",
        items: [
          "We create custom logo animations and animated brand intros designed to reflect your brand's personality from clean minimal reveals to bold energetic motion sequences using smooth transitions, particle effects, and kinetic typography.",
          "We deliver logo animations in multiple formats including transparent PNG sequence, MP4, GIF, and Lottie (JSON) for web so you can use them across video content, email signatures, website loaders, and app splash screens.",
          "Our brand motion identity packages include animated logo, animated brand colours, transition elements, and lower-third templates creating a cohesive motion language your brand can use across all video content."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "animation",
        title: "Motion Graphics for Presentations & Events",
        items: [
          "We design animated presentation slides, event opener videos, speaker intro animations, countdown timers, and stage backdrop visuals produced with your brand identity and event theme for seamless visual consistency across all screens.",
          "We create motion graphics for both live events and virtual/hybrid formats optimised for LED walls, projector screens, live stream overlays, and virtual event platforms like Zoom, Teams, and Hopin.",
          "Our presentation motion graphics include animated data visualisations, infographic transitions, and dynamic slide builds making complex information engaging and easier for your audience to follow and remember."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "animation",
        title: "Video Editing & Post-Production",
        items: [
          "We provide professional video editing and post-production cutting raw footage from any source including smartphone, DSLR, screen captures, drone footage, and stock video into polished, brand-ready videos with colour grading, sound mixing, and seamless transitions.",
          "We handle advanced post-production including green screen compositing, multi-camera editing, audio cleanup, subtitle and caption embedding, and animated text overlays to give your videos a professional finish.",
          "Every edited video is exported in platform-optimised formats and resolutions from 4K master files to compressed social media versions ensuring your content looks sharp on every screen without buffering or quality loss."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
};
