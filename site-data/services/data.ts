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
  image: string;
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
  overviewHeadline?: string;
  overviewImage?: string;
  overviewText?: string;
  cards?: ServiceCard[];
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
    heroHeadline: "We Build Websites That Power Brands & Drive Real Growth.",
    overviewHeadline: "A Web Studio Built for Brands That Mean Business.",
    overviewImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    overviewText: "We are a creative web design and development studio building high performance websites for brands ready to grow. Every site we deliver combines user focused UI/UX design, clean front end and back end development, and SEO ready architecture, so your website doesn't just look premium, it ranks, converts, and scales with your brand.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Landing Page", listItems: ["Product launches and campaigns", "Event promotions and registrations", "Single service businesses", "High converting lead generation pages"] },
      { id: "2", backgroundColor: "#F7C518", title: "Business Website", listItems: ["Small businesses and startups", "Consultancies and agencies", "Service based companies", "Portfolio and personal brand websites"] },
      { id: "3", backgroundColor: "#FD6824", title: " E-Commerce Store", listItems: ["Online retail and fashion brands", "D2C product businesses", "Multi category online stores", "ubscription based product brands"] },
      { id: "4", backgroundColor: "#408BF7", title: "Web Application", listItems: ["SaaS platforms and dashboards", "Booking and management systems", "Client portals and internal tools", "API driven business applications"] },
      { id: "5", backgroundColor: "#FD6824", title: "Custom & Enterprise", listItems: ["Large scale enterprise solutions", "Multi platform digital ecosystems", "Complete website and app integrations", "Fully tailored builds from scratch"] },
    ],
    servicesIncluded: [
      {
        id: "ux-strategy",
        title: "UX Strategy & Interface Design",
        items: [
          "Every design decision starts with deep research into your audience, user behaviour, and business goals, ensuring strategy comes before style.",
          "We craft high fidelity UI designs that balance visual appeal, brand consistency, and accessibility (WCAG) standards, while guiding users naturally toward action.",
          "The result is an intuitive, refined website interface with clear hierarchy that reduces bounce rates and increases time on site."
        ],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "responsive-web-design",
        title: "Responsive Web Design & Mobile Optimisation",
        items: [
          "Fully responsive websites tested across Chrome, Safari, Firefox, and Edge for complete cross browser compatibility on desktop, tablet, and mobile.",
          "A mobile first design approach with fast load times, touch friendly navigation, and optimised media for the 60% of users browsing on mobile.",
          "Built to meet Google's Core Web Vitals benchmarks, directly improving your search rankings, organic visibility, and user experience."
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "custom-web-development",
        title: "Custom Website Development",
        items: [
          "Custom coded websites built using modern technologies like React, Next.js, and Node.js, with clean and scalable code that grows with your business.",
          "Secure development practices including SSL encryption, input validation, and rigorous QA testing across every device and browser before launch.",
          "Tailored functionality like booking systems, calculators, dashboards, and integrations, fully built for your needs without templates or page builders."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "ecommerce-web-development",
        title: "E-Commerce Website Development",
        items: [
          "High converting e commerce stores on Shopify, WooCommerce, and custom frameworks with secure payment gateways and smooth checkout flows that reduce cart abandonment.",
          "Complete store setup with inventory management, order tracking, customer accounts, and automated emails for a seamless buying experience.",
          "Product pages optimised with structured data (Schema), fast loading images, and SEO friendly URLs to boost visibility on Google Shopping and organic search."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "website-speed-and-performance-optimisation",
        title: "Website Speed & Performance Optimisation",
        items: [
          "Full performance audits using Google PageSpeed Insights, GTmetrix, and Lighthouse, followed by image compression, lazy loading, code minification, and CDN integration.",
          "Built to meet or exceed Google's Core Web Vitals thresholds, directly boosting search rankings and overall user satisfaction.",
          "Optimised front end and server side performance ensures your website loads in under 3 seconds, even on slower mobile networks."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "On Page & Technical SEO Setup",
        title: "On Page & Technical SEO Setup",
        items: [
          "Complete on page SEO foundation including optimised meta tags, heading structure (H1 to H6), keyword placement, XML sitemaps, robots.txt, and structured data markup.",
          "Fully crawlable and indexable architecture with broken link checks, redirect fixes, and Google Search Console plus Analytics integration from day one.",
          "Local SEO optimisation with Google Business Profile setup, local schema markup, and location based keyword targeting for region focused businesses."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "cms-development-and-website-management",
        title: " CMS Development & Website Management",
        items: [
          "Easy to manage websites built on WordPress, Webflow, or headless CMS platforms with a custom admin panel tailored to your team's workflow.",
          "Configurable user roles, permission levels, and content scheduling so your team can publish, edit, and collaborate without ever touching code.",
          "Built with security best practices including regular updates, plugin audits, firewall protection, and automated backups to keep your site safe."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "website-maintenance-and-ongoing-support",
        title: "Website Maintenance & Ongoing Support",
        items: [
          "Ongoing maintenance covering security updates, plugin management, uptime monitoring, performance checks, content updates, and design tweaks as your business grows.",
          "Monthly maintenance plans with dedicated support, ensuring every issue is identified and resolved before it impacts your users or rankings.",
          "A monthly website health report covering uptime, speed scores, security status, and SEO performance, so you always know where your site stands."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
  label: "Process",
  heading: "How We Build High Performance Websites.",
  subheading: "A structured web design and development process from first idea to final launch.",
  steps: [
    {
      id: "insight",
      number: "01.",
      title: "Insight",
      description: "We dive deep into your brand, audience, competitors, and business goals to uncover the insights that shape a winning website strategy."
    },
    {
      id: "foundation",
      number: "02.",
      title: "Foundation",
      description: "We define your site architecture, content hierarchy, and SEO keyword strategy, laying the technical and strategic groundwork before design begins."
    },
    {
      id: "wireframe",
      number: "03.",
      title: "Wireframe",
      description: "We map every page layout, user flow, and conversion path through detailed wireframes, making sure the experience feels intuitive before visuals come in."
    },
    {
      id: "design",
      number: "04.",
      title: "Design",
      description: "Our designers craft pixel perfect, high fidelity layouts in Figma with brand consistent visuals, responsive grids, and accessibility built in."
    },
    {
      id: "development",
      number: "05.",
      title: "Development",
      description: "We bring designs to life with clean, scalable code using React, Next.js, and Node.js, building fast, SEO ready, fully responsive websites."
    },
    {
      id: "testing",
      number: "06.",
      title: "Testing & QA",
      description: "Every site is tested across browsers and devices for speed, responsiveness, broken links, and Core Web Vitals before it ever goes live."
    },
    {
      id: "launch",
      number: "07.",
      title: "Launch & Support",
      description: "Your website goes live with full deployment, analytics, and indexing setup, followed by ongoing support to keep it running at peak performance."
    }
  ]
},
    techStack: [
      { id: "ts", name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { id: "react", name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { id: "nextjs", name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { id: "tailwind", name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { id: "framer", name: "Framer Motion", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
      { id: "figma", name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { id: "vercel", name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { id: "supabase", name: "Supabase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
    deliverables: {
  label: "FAQ",
  heading: "Frequently Asked Questions.",
  subheading: "Everything you need to know about working with us on your web design and development project.",
  items: [
    {
      id: "project-timeline",
      title: "How long does it take to design and develop a website?",
      description: "Most websites take 4 to 8 weeks from kickoff to launch, depending on complexity. A landing page can go live in 2 to 3 weeks, while custom web applications and large e commerce stores may take 8 to 12 weeks."
    },
    {
      id: "content-requirement",
      title: "Do I need to provide content and images for my website?",
      description: "You can provide your own content and images, or our team can handle copywriting, photography sourcing, and content strategy as part of the project. We make the process simple either way."
    },
    {
      id: "tech-stack",
      title: "What technologies do you use to build websites?",
      description: "We build with modern, scalable technologies including React, Next.js, Node.js, WordPress, Webflow, and Shopify. The right stack is chosen based on your business goals, budget, and long term scalability."
    },
    {
      id: "seo-included",
      title: "Will my website be SEO ready and optimised for Google?",
      description: "Yes, every website we build comes with complete on page SEO including meta tags, clean URLs, schema markup, XML sitemaps, and Core Web Vitals optimisation, ensuring it is ready to rank from day one."
    },
    {
      id: "mobile-responsive",
      title: "Will my website work on mobile and tablet devices?",
      description: "Absolutely. Every website is fully responsive and tested across desktop, tablet, and mobile, with a mobile first design approach since over 60% of users browse on mobile devices."
    },
    {
      id: "cms-control",
      title: "Can I update my website on my own after launch?",
      description: "Yes, every website comes with an easy to use CMS like WordPress, Webflow, or a custom admin panel, allowing you to update content, blogs, images, and pages without writing any code."
    },
    {
      id: "post-launch-support",
      title: "Do you provide support after the website goes live?",
      description: "Yes, we offer dedicated post launch support including bug fixes, security updates, performance monitoring, and content updates. Monthly maintenance plans are also available for long term care."
    },
    {
      id: "ecommerce-platforms",
      title: "Can you build e commerce websites on Shopify or WooCommerce?",
      description: "Yes, we build e commerce stores on Shopify, WooCommerce, and custom frameworks with secure payment gateways, inventory management, and SEO friendly product pages built to convert."
    },
    {
      id: "ownership-rights",
      title: "Will I own the website and source code after launch?",
      description: "Yes, you receive full ownership of your website along with all source files, design assets, and admin access. There are no hidden lock ins or vendor dependencies."
    }
  ]
},
ctaText: "Let's Build a Website Your Competitors Wish They Had."
  },
  "graphic-design": {
    slug: "graphic-design",
    heroBgColor: "#fdf8f2",
    heroHeadline: "We Design Brands That Stand Out & Stay Unforgettable.",
    overviewHeadline: "A Graphic Design Studio Built to Bring Your Brand to Life.",
    overviewImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    overviewText: "We are a creative graphic design studio that transforms ideas into powerful visuals. Every logo, layout, and creative asset we produce is rooted in strategy and built to make your brand stand out in a crowded market. From startups crafting their first identity to established brands refreshing their visual presence, we deliver design that communicates, connects, and converts.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Starter Pack", listItems: ["Logo design and brand variations", "Business card and letterhead", "Brand colour palette", "Social media profile setup"] },
      { id: "2", backgroundColor: "#F7C518", title: "Social Media Pack", listItems: ["Monthly post and story templates", "Carousel and reel cover designs", "Ad creatives for paid campaigns", "Platform specific sizing"] },
      { id: "3", backgroundColor: "#FD6824", title: "Marketing Collateral Pack", listItems: ["Brochures and flyers", "Posters and banners", "Product catalogues", "Event and trade show materials"] },
      { id: "4", backgroundColor: "#408BF7", title: "Full Brand Identity Pack", listItems: ["Custom logo and brand mark", "Brand guidelines document", "Stationery and collateral design", "Social media brand kit"] },
      { id: "5", backgroundColor: "#FD6824", title: "Premium Creative Pack", listItems: ["Full brand identity and guidelines", "Social media and ad creatives", "Print and packaging design", "Presentation and pitch deck design"] },
    ],
    servicesIncluded: [
      {
        id: "logo-brand-identity",
        title: "Logo Design & Brand Identity",
        items: [
          "Custom logos that capture your brand essence, designed to be memorable, scalable, and versatile across digital platforms, print, and merchandise.",
          "Complete brand identity systems with colour palettes, typography, iconography, and visual style guidelines that build a cohesive look.",
          "Multiple concept rounds and refinements to ensure your final logo is delivered in every format including AI, EPS, SVG, PNG, and PDF."
        ],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "social-media-design",
        title: "Social Media Graphics & Content Design",
        items: [
          "Scroll stopping social media graphics including post templates, story designs, carousel layouts, reel covers, and ad creatives for every major platform.",
          "Reusable content templates that help your team maintain a consistent, on brand presence without needing a designer for every post.",
          "Designs optimised for both organic reach and paid campaigns, with clear hierarchy and strong CTAs that drive engagement and conversion."
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "marketing-advertising-creatives",
        title: "Marketing & Advertising Creatives",
        items: [
          "High converting ad creatives for Google Display, Meta, LinkedIn, and YouTube campaigns, built around platform specific guidelines and best practices.",
          "Multiple creative variations designed for A/B testing, helping you find the headlines, visuals, and layouts that perform best.",
          "Persuasive design paired with strategic copywriting to grab attention in the first 2 seconds and drive measurable clicks and conversions."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "print-marketing-collateral",
        title: "Print Design & Marketing Collateral",
        items: [
          "Premium print materials including business cards, letterheads, brochures, flyers, posters, and catalogues in CMYK with proper bleed and trim.",
          "Single page and multi page layouts for product catalogues, company profiles, event invitations, and trade show materials.",
          "Paper stock recommendations, finishing options, and direct coordination with your printer for a hassle free production experience."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "packaging-design",
        title: "Packaging Design",
        items: [
          "Product packaging that stands out on shelves and screens, combining structural layout, die line creation, label design, and bold typography.",
          "Packaging design for food and beverage, cosmetics, health and wellness, fashion, electronics, and consumer goods across retail and e commerce.",
          "Print ready files with accurate die lines, bleed areas, and colour specifications so your manufacturer can produce flawlessly without back and forth."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "presentation-pitch-deck",
        title: "Presentation & Pitch Deck Design",
        items: [
          "Professional, visually engaging presentations and pitch decks for investors, clients, and internal stakeholders with clean layouts and data visualisation.",
          "Fully editable templates in PowerPoint, Keynote, and Google Slides that your team can reuse and customise for future presentations.",
          "Storytelling flow and visual hierarchy optimisation to ensure your key message lands with maximum impact and audience focus."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "infographic-data-visualisation",
        title: "Infographic & Data Visualisation Design",
        items: [
          "Complex data, statistics, and processes turned into clear, visually engaging infographics including charts, timelines, and process flows.",
          "Designs optimised for both web and print, with SEO friendly alt text recommendations for digital and high resolution exports for print.",
          "Every infographic styled with your brand colours, typography, and visual identity for seamless integration with your existing content."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "brand-guidelines",
        title: "Brand Guidelines & Visual Style Guide",
        items: [
          "Comprehensive brand guideline documents covering logo usage, colour codes (HEX, RGB, CMYK, Pantone), typography, iconography, and spacing.",
          "Real world application examples showing how your brand should appear across websites, social media, business cards, packaging, and signage.",
          "A documented visual identity that protects your brand consistency as your team grows or you collaborate with external agencies."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
  label: "Process",
  heading: "How We Design Visuals That Drive Results.",
  subheading: "A structured graphic design process from creative brief to final delivery.",
  steps: [
    {
      id: "discovery",
      number: "01.",
      title: "Discovery",
      description: "We start with a detailed creative brief, learning about your brand, audience, competitors, design preferences, and business goals."
    },
    {
      id: "research",
      number: "02.",
      title: "Research & Moodboarding",
      description: "We analyse industry trends, competitor visuals, and audience preferences, then build mood boards with colour, typography, and imagery directions."
    },
    {
      id: "concept",
      number: "03.",
      title: "Concept Development",
      description: "Our designers create multiple initial concepts, exploring different visual approaches, compositions, and styles to find the strongest direction."
    },
    {
      id: "execution",
      number: "04.",
      title: "Design Execution",
      description: "We move into full production, crafting every element with pixel perfect precision and brand consistent styling across all required formats."
    },
    {
      id: "refinement",
      number: "05.",
      title: "Feedback & Refinement",
      description: "We share the work for review and refine colours, layouts, typography, and imagery until every element meets your expectations."
    },
    {
      id: "delivery",
      number: "06.",
      title: "Final Delivery",
      description: "All approved designs are exported in print ready and web optimised formats including AI, EPS, SVG, PDF, PNG, and JPG, organised in a structured file package."
    }
  ]
},
    techStack: [
      { id: "photoshop", name: "Adobe Photoshop", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { id: "illustrator", name: "Adobe Illustrator", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { id: "indesign", name: "Adobe InDesign", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-original.svg" },
      { id: "figma", name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { id: "xd", name: "Adobe XD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { id: "aftereffects", name: "Adobe After Effects", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
      { id: "premiere", name: "Adobe Premiere Pro", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" },
      { id: "canva", name: "Canva Pro", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    ],
    deliverables: {
  label: "FAQ",
  heading: "Frequently Asked Questions.",
  subheading: "Everything you need to know about working with us on your graphic design project.",
  items: [
    {
      id: "project-timeline",
      title: "How long does a graphic design project take?",
      description: "Most projects take 1 to 4 weeks depending on scope. A logo design takes 7 to 10 days, a full brand identity 3 to 4 weeks, and ongoing social media or marketing collateral runs on a monthly retainer schedule."
    },
    {
      id: "design-revisions",
      title: "How many design revisions are included?",
      description: "We include multiple revision rounds in every project to ensure the final design meets your expectations. Most clients reach final approval within 2 to 3 rounds of refinement."
    },
    {
      id: "file-formats",
      title: "What file formats will I receive after the project?",
      description: "You receive every design in print ready and web optimised formats including AI, EPS, SVG, PDF, PNG, and JPG, along with editable source files and brand assets."
    },
    {
      id: "brand-identity",
      title: "Do you create complete brand identity systems or just logos?",
      description: "We design complete brand identity systems including logo, colour palette, typography, iconography, brand guidelines, and visual application examples across every touchpoint."
    },
    {
      id: "social-media-design",
      title: "Can you handle our ongoing social media design needs?",
      description: "Yes, we offer monthly social media design packages including post templates, story designs, carousel layouts, reel covers, and ad creatives tailored for every major platform."
    },
    {
      id: "print-design",
      title: "Do you handle print production and printer coordination?",
      description: "Yes, we deliver print ready files in CMYK with proper bleed and trim, and we coordinate directly with your printer to ensure flawless production from start to finish."
    },
    {
      id: "packaging-design",
      title: "Can you design product packaging for retail and e commerce?",
      description: "Yes, we design packaging for food and beverage, cosmetics, fashion, electronics, and consumer goods with accurate die lines, label design, and manufacturer ready files."
    },
    {
      id: "ownership-rights",
      title: "Will I own the designs and source files after delivery?",
      description: "Yes, you receive full ownership of your designs along with all source files, fonts, and brand assets. No hidden lock ins or licensing dependencies."
    },
    {
      id: "pricing-quote",
      title: "How much does a graphic design project cost?",
      description: "Pricing depends on the scope, deliverables, and complexity of your project. Logo design, brand identity, social media, and print collateral each have different starting points. Share your requirements for a tailored quote."
    }
  ]
},
ctaText: "Let's Design Something Your Audience Can't Look Away From."
  },
  "motion-graphics": {
    slug: "motion-graphics",
    heroBgColor: "#fdf8f2",
    heroHeadline: "We Create Motion & Video Content That Stops the Scroll.",
    overviewHeadline: "A Motion Studio That Turns Ideas Into Scroll Stopping Video.",
    overviewImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    overviewText: "We are a creative motion graphics and video production studio helping brands communicate faster, louder, and with more impact through the power of video. From social media Reels and YouTube ads to explainer videos and brand films, every video we produce is crafted to grab attention in the first second, hold it till the last frame, and drive your audience to take action.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "Social Media Video Pack", listItems: ["4 short form videos per month (Reels, Shorts, TikTok)", "Caption overlays and text animations", "Platform specific sizing and formatting", "Trending audio and sound design"] },
      { id: "2", backgroundColor: "#F7C518", title: "Explainer Video Pack", listItems: ["1 animated explainer video (60 to 90 sec)", "Script writing and storyboarding", "Professional voiceover and sound design", "2 social media cutdowns included"] },
      { id: "3", backgroundColor: "#FD6824", title: "Ad & PPC Video Pack", listItems: ["Video ads for Google, Meta, and YouTube", "Multiple lengths (6s, 15s, 30s)", "A/B creative variations", "Performance optimised formats"] },
      { id: "4", backgroundColor: "#408BF7", title: "Brand Video Pack", listItems: ["Brand and corporate film (60 to 120 sec)", "Logo animation and brand intro", "Voiceover, music, and colour grading", "Multi format delivery for web, social, and events"] },
      { id: "5", backgroundColor: "#FD6824", title: "Full Motion Suite", listItems: ["Social media videos and explainer video", "PPC ad creatives and brand film", "Logo animation and motion identity", "Full post production and editing", "Monthly content delivery"] },
    ],
    servicesIncluded: [
      {
        id: "social-media-video",
        title: "Social Media Video Production",
        items: [
          "Platform optimised short form videos for Instagram Reels, YouTube Shorts, TikTok, Facebook, and LinkedIn with trending formats and thumb stopping visuals.",
          "Full production pipeline including concept ideation, scriptwriting, storyboarding, motion design, sound design, and final rendering for monthly content flow.",
          "Hook driven openings, clear brand messaging, and strong CTAs designed to drive clicks, follows, and conversions across organic and paid promotion."
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "explainer-video",
        title: "Explainer Video Production",
        items: [
          "Animated explainer videos that break down complex products and services into clear, engaging visual stories built to drive action.",
          "Multiple animation styles including 2D character animation, motion graphics, kinetic typography, and isometric illustration tailored to your brand.",
          "Delivered in multiple lengths from 30 second teasers to full 90 to 120 second versions, optimised for website, social, email, and paid campaigns."
        ],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "advertising-ppc-videos",
        title: "Advertising & PPC Video Ads",
        items: [
          "High converting video ads for Google YouTube, Meta, LinkedIn, and programmatic display campaigns with attention grabbing hooks within the first 3 seconds.",
          "Multiple ad variations in different lengths (6s, 15s, 30s, 60s) and aspect ratios for flexible A/B testing and lower cost per acquisition.",
          "Platform specific best practices including skip proof YouTube openings, sound off optimisation for Meta, and professional framing for LinkedIn."
        ],
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "brand-corporate-video",
        title: "Brand & Corporate Video Production",
        items: [
          "Premium brand films and corporate videos that communicate your story, mission, and culture through cinematic motion graphics and brand consistent visuals.",
          "Custom video content for company introductions, leadership messages, event recaps, recruitment campaigns, and internal communication.",
          "Delivered in multiple formats including web optimised MP4, social media cuts, and high resolution versions for events and presentations."
        ],
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "product-demo-videos",
        title: "Product Demo & Showcase Videos",
        items: [
          "Visually compelling product demo videos using motion graphics, screen recordings, close ups, and animated infographics that highlight key features.",
          "Built for website product pages, e commerce listings on Amazon and Flipkart, social media, crowdfunding campaigns, and sales pitch decks.",
          "On screen text overlays, spec callouts, and animated highlights ensure your selling points land clearly even when watched without sound."
        ],
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "logo-animation",
        title: "Logo Animation & Brand Motion Identity",
        items: [
          "Custom logo animations and brand intros designed to reflect your brand personality, from clean minimal reveals to bold energetic motion sequences.",
          "Delivered in multiple formats including transparent PNG sequence, MP4, GIF, and Lottie JSON for video, web, app loaders, and email signatures.",
          "Brand motion identity packages with animated logo, transition elements, and lower third templates for cohesive video storytelling."
        ],
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "presentation-event-graphics",
        title: "Motion Graphics for Presentations & Events",
        items: [
          "Animated presentation slides, event opener videos, speaker intro animations, and stage backdrop visuals built to match your brand and event theme.",
          "Designed for both live events and virtual or hybrid formats, optimised for LED walls, projectors, and platforms like Zoom and Teams.",
          "Animated data visualisations and dynamic slide builds that make complex information engaging and easier for your audience to follow."
        ],
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "video-editing-post-production",
        title: "Video Editing & Post Production",
        items: [
          "Professional video editing transforming raw footage from smartphone, DSLR, screen captures, drone, or stock into polished, brand ready videos.",
          "Advanced post production including green screen compositing, multi camera editing, audio cleanup, subtitles, and animated text overlays.",
          "Every video exported in platform optimised formats and resolutions, from 4K master files to compressed social cuts ready for instant publishing."
        ],
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
      label: "Process",
      heading: "How We Create Motion Content That Performs.",
      subheading: "A structured motion graphics and video production process from creative brief to final delivery.",
      steps: [
        {
          id: "brief",
          number: "01.",
          title: "Creative Brief",
          description: "We start with a detailed brief covering your brand, target audience, video objectives, platforms, and key messaging direction."
        },
        {
          id: "scripting",
          number: "02.",
          title: "Scripting & Storyboarding",
          description: "We craft a strategic video script with a hook driven narrative, paired with detailed storyboards mapping every scene and transition."
        },
        {
          id: "voiceover",
          number: "03.",
          title: "Voiceover & Audio",
          description: "We finalise professional voiceover, audio direction, and licensed music selection that matches your brand tone and message."
        },
        {
          id: "animation",
          number: "04.",
          title: "Design & Animation",
          description: "Our team produces custom illustrations, animated graphics, kinetic typography, and dynamic transitions with frame by frame precision."
        },
        {
          id: "review",
          number: "05.",
          title: "Review & Refinement",
          description: "We share the first draft for feedback and refine animations, timing, colour, text, and pacing until every frame feels right."
        },
        {
          id: "delivery",
          number: "06.",
          title: "Final Render & Delivery",
          description: "Final videos are rendered in 4K master, web optimised MP4, social media cuts (9:16, 1:1, 16:9), GIF, and transparent exports."
        }
      ]
    },
    techStack: [
      { id: "aftereffects", name: "Adobe After Effects", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
      { id: "premiere", name: "Adobe Premiere Pro", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" },
      { id: "audition", name: "Adobe Audition", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/audition/audition-plain.svg" },
      { id: "illustrator", name: "Adobe Illustrator", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { id: "photoshop", name: "Adobe Photoshop", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { id: "cinema4d", name: "Cinema 4D", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cinema4d/cinema4d-original.svg" },
      { id: "figma", name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { id: "davinci", name: "DaVinci Resolve", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/davinciresolve/davinciresolve-original.svg" },
    ],
    deliverables: {
      label: "FAQ",
      heading: "Frequently Asked Questions.",
      subheading: "Everything you need to know about working with us on your motion graphics and video production project.",
      items: [
        {
          id: "project-timeline",
          title: "How long does it take to produce a motion or video project?",
          description: "Most projects take 2 to 6 weeks depending on scope. Short social videos take 1 to 2 weeks, explainer videos 3 to 4 weeks, and brand films or corporate videos 4 to 6 weeks."
        },
        {
          id: "video-types",
          title: "What types of motion and video content do you create?",
          description: "We produce social media Reels and Shorts, explainer videos, advertising ads, product demos, brand films, logo animations, event videos, and motion graphics for presentations."
        },
        {
          id: "script-storyboard",
          title: "Do you provide scriptwriting and storyboarding services?",
          description: "Yes, every project includes strategic scriptwriting and detailed storyboarding so you have full creative visibility before any animation or production begins."
        },
        {
          id: "voiceover-music",
          title: "Will my video include voiceover and background music?",
          description: "Yes, we provide professional voiceover artists, licensed background music, and custom sound design mixed to broadcast quality audio standards."
        },
        {
          id: "video-formats",
          title: "What video formats and aspect ratios will I receive?",
          description: "Every video is delivered in multiple formats including 16:9, 9:16, 1:1, and 4:5, ready to publish on Instagram, YouTube, TikTok, LinkedIn, and your website without resizing."
        },
        {
          id: "platform-optimisation",
          title: "Are your videos optimised for social media platforms?",
          description: "Absolutely. Every video is built with platform specific best practices including hook driven openings, sound off optimisation, captions, and trending formats for maximum reach."
        },
        {
          id: "social-cutdowns",
          title: "Do you provide social media cutdowns and teaser versions?",
          description: "Yes, we deliver shorter cuts including 6 second bumpers, 15 second teasers, and 30 second social edits perfect for ads, Reels, Stories, and YouTube Shorts."
        },
        {
          id: "ongoing-content",
          title: "Can you handle our monthly video content needs?",
          description: "Yes, we offer monthly motion and video retainers covering Reels, Shorts, ads, product videos, and explainer content for consistent, on brand video output."
        },
        {
          id: "ownership-rights",
          title: "Will I receive source files and full ownership of the videos?",
          description: "Yes, you receive full ownership of every video along with source files, audio stems, and project archives so you can revisit or edit them in the future."
        }
      ]
    },
    ctaText: "Let's Create Video Content Your Audience Can't Stop Watching."
  },

  "digital-marketing": {
    slug: "digital-marketing",
    heroBgColor: "#fdf8f2",
    heroHeadline: "We Drive Real Growth Through Smart Digital Marketing.",
    overviewHeadline: "A Digital Marketing Agency Built to Grow Your Brand Online.",
    overviewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    overviewText: "We are a full service digital marketing and social media agency helping brands dominate the digital landscape. From SEO and paid advertising to social media strategy, marketplace growth, and content marketing, every campaign we run is backed by data, driven by creativity, and focused on delivering measurable ROI. Whether you are a startup building awareness or an established brand scaling revenue, we turn clicks into customers and followers into loyal communities.",
    cards: [
      { id: "1", backgroundColor: "#65C495", title: "SEO Pack", listItems: ["Keyword research and strategy", "On page and technical SEO", "Local SEO and Google Business", "Content gap analysis"] },
      { id: "2", backgroundColor: "#F7C518", title: "PPC Campaigns", listItems: ["Google Search and Display Ads", "Retargeting campaigns", "A/B testing and optimisation", "Conversion tracking setup"] },
      { id: "3", backgroundColor: "#FD6824", title: "Social Media Marketing", listItems: ["Meta (Facebook and Instagram) Ads", "LinkedIn B2B campaigns", "Audience segmentation", "Performance analytics"] },
      { id: "4", backgroundColor: "#408BF7", title: "Marketplace Growth", listItems: ["Amazon, Flipkart, BigBasket setup", "Sponsored Ads and PLA campaigns", "A+ content and brand store", "BSR and review management"] },
      { id: "5", backgroundColor: "#8c6bf7", title: "Full Funnel Growth", listItems: ["Omnichannel marketing strategy", "Conversion rate optimisation", "Advanced analytics dashboards", "Monthly performance reporting"] },
    ],
    servicesIncluded: [
      {
        id: "social-media-strategy",
        title: "Social Media Strategy & Management",
        items: [
          "Comprehensive social media strategies tailored to your brand with content pillars, posting schedules, audience targeting, and daily community management across Instagram, Facebook, LinkedIn, X, and YouTube.",
          "Performance tracking on reach, impressions, engagement, follower growth, and click through rate, with monthly optimisation based on platform algorithms.",
          "Trending format expertise across Reels, Shorts, Carousels, Stories, and live content to maximise organic visibility without relying solely on paid promotion."
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "social-media-content",
        title: "Social Media Content Creation",
        items: [
          "Scroll stopping social media content including branded graphics, short form video scripts, Reels concepts, carousels, and interactive stories built around your brand identity.",
          "Monthly content calendars with a strategic mix of educational, promotional, entertaining, and community building posts that keep your audience engaged.",
          "Caption writing with SEO optimised hashtag research using high performing and niche specific tags that expand your organic reach."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "influencer-marketing",
        title: "Influencer Marketing & Collaborations",
        items: [
          "We connect your brand with the right influencers and content creators, from micro influencers with high engagement to macro influencers with massive reach.",
          "End to end influencer campaign management including planning, content briefs, deliverable timelines, performance tracking, ROI measurement, and approvals.",
          "Influencer generated content (IGC) repurposed across your social media, ads, and website to build authentic trust and drive higher conversion rates."
        ],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "social-media-ads",
        title: "Social Media Advertising (Paid Social)",
        items: [
          "High performing paid social campaigns on Instagram, Facebook, LinkedIn, YouTube, and TikTok using advanced audience targeting, retargeting, and lookalike audiences.",
          "Full campaign setup including ad account configuration, pixel installation, event tracking, custom audiences, and budget optimisation from day one.",
          "Strategic scaling of winning ad sets with weekly and monthly reports covering impressions, reach, CTR, CPC, ROAS, and conversion data."
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "search-engine-optimisation",
        title: "Search Engine Optimisation (SEO)",
        items: [
          "Comprehensive on page SEO including optimised meta tags, heading structure, internal linking, image alt tags, and keyword rich content placement, with full technical SEO audits.",
          "In depth keyword research using SEMrush, Ahrefs, and Google Keyword Planner targeting high intent, low competition keywords, plus ethical link building and digital PR.",
          "Monthly SEO performance reports with keyword rankings, organic traffic trends, backlink growth, and clear action recommendations for sustained growth."
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "google-ads-ppc",
        title: "Google Ads & Pay Per Click (PPC) Advertising",
        items: [
          "High converting Google Ads campaigns including Search, Display, Shopping, and YouTube Ads with tight ad groups, negative keyword lists, and quality score optimisation.",
          "Compelling ad copy with strong headlines, clear value propositions, and action driven CTAs, paired with continuous A/B testing for higher click through and conversion rates.",
          "Complete conversion tracking, remarketing audience creation, landing page alignment, and transparent performance reporting on every rupee spent."
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "marketplace-growth",
        title: "Marketplace Growth on Amazon, Flipkart & BigBasket",
        items: [
          "End to end marketplace management on Amazon, Flipkart, BigBasket, and Meesho including store setup, product listings, catalogue optimisation, A+ content, and brand store development.",
          "Marketplace advertising including Amazon Sponsored Products, Sponsored Brands, Flipkart PLA, and deal participation strategies to drive traffic, improve Best Seller Rank, and increase sales volume.",
          "Ongoing marketplace operations including inventory coordination, pricing strategy, review management, competitor monitoring, and monthly performance reporting to scale revenue consistently."
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "content-marketing",
        title: "Content Marketing & Blogging",
        items: [
          "Content marketing strategies that position your brand as an industry authority through SEO optimised blogs, articles, case studies, and long form content.",
          "Full content pipeline from topic ideation and calendar planning to writing, editing, on page SEO, and publishing for consistent output without team burnout.",
          "Topical authority building through content clusters around your core services and products, strengthening your overall SEO and domain relevance."
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: {
      label: "Process",
      heading: "How We Build Marketing Campaigns That Deliver Results.",
      subheading: "A structured digital marketing process from audit to scale.",
      steps: [
        {
          id: "audit",
          number: "01.",
          title: "Audit & Discovery",
          description: "We run a complete audit of your online presence, website, social media, competitors, and audience behaviour to identify gaps and opportunities."
        },
        {
          id: "strategy",
          number: "02.",
          title: "Strategy & Goals",
          description: "We build a clear digital marketing roadmap with measurable KPIs, channel selection, audience personas, and revenue aligned tactics."
        },
        {
          id: "creative",
          number: "03.",
          title: "Content & Creative",
          description: "We craft all campaign assets including social content, ad creatives, blog posts, email sequences, and landing page copy, all SEO optimised and on brand."
        },
        {
          id: "launch",
          number: "04.",
          title: "Campaign Launch",
          description: "We launch campaigns with precise targeting, budget allocation, and tracking setup across every selected channel for instant performance visibility."
        },
        {
          id: "optimisation",
          number: "05.",
          title: "Monitoring & Optimisation",
          description: "We monitor performance in real time, adjusting bids, refining targeting, testing creatives, and reallocating budgets to top performers."
        },
        {
          id: "reporting",
          number: "06.",
          title: "Reporting & Scaling",
          description: "Detailed monthly reports covering traffic, engagement, conversions, and revenue, paired with strategic recommendations to scale what works."
        }
      ]
    },
    techStack: [
      { id: "google-analytics", name: "Google Analytics 4", image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Google_Analytics_icon_%282023%29.svg" },
      { id: "google-ads", name: "Google Ads", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
      { id: "meta-ads", name: "Meta Ads Manager", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
      { id: "semrush", name: "SEMrush", image: "https://upload.wikimedia.org/wikipedia/commons/1/13/SEMrush_logo.svg" },
      { id: "ahrefs", name: "Ahrefs", image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Ahrefs_logo.svg" },
      { id: "mailchimp", name: "Mailchimp", image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Mailchimp_Freddie_Icon.svg" },
      { id: "hubspot", name: "HubSpot", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/HubSpot_Logo.svg" },
      { id: "looker-studio", name: "Looker Studio", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Google_Looker_Logo.svg" },
    ],
    deliverables: {
      label: "FAQ",
      heading: "Frequently Asked Questions.",
      subheading: "Everything you need to know about working with us on your digital marketing project.",
      items: [
        {
          id: "results-timeline",
          title: "How long does it take to see results from digital marketing?",
          description: "Paid ads can drive results within days, while SEO and content marketing typically show meaningful traction in 3 to 6 months. Social media and marketplace growth build steady momentum across the first 90 days."
        },
        {
          id: "marketplace-platforms",
          title: "Can you grow our brand on Amazon, Flipkart, and BigBasket?",
          description: "Yes, we manage end to end marketplace growth including store setup, product listings, A+ content, paid advertising, deal participation, and ongoing optimisation across Amazon, Flipkart, BigBasket, and Meesho."
        },
        {
          id: "channels-managed",
          title: "Which marketing channels do you manage?",
          description: "We handle SEO, Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, social media management, email marketing, content marketing, and marketplace growth on leading e commerce platforms."
        },
        {
          id: "ad-budget",
          title: "What is the minimum ad budget required for paid campaigns?",
          description: "Ad budgets depend on your goals and industry. We recommend a starting monthly budget that allows enough data for testing and optimisation, typically beginning from a strategic minimum we discuss based on your business stage."
        },
        {
          id: "performance-reports",
          title: "Will I receive performance reports for my campaigns?",
          description: "Yes, every client gets detailed monthly performance reports covering traffic, engagement, conversions, ad spend, ROAS, keyword rankings, and social growth, along with clear next step recommendations."
        },
        {
          id: "content-creation",
          title: "Do you create the social media content as well?",
          description: "Yes, we handle the full content pipeline including branded graphics, Reels and Shorts concepts, carousel designs, captions, and hashtag strategy, all built around your brand identity and audience."
        },
        {
          id: "google-ranking",
          title: "Can you help my website rank higher on Google?",
          description: "Absolutely. Our SEO services cover technical audits, on page optimisation, keyword research, content marketing, link building, and local SEO to boost organic visibility and rankings sustainably."
        },
        {
          id: "tools-platforms",
          title: "What tools and platforms do you work with?",
          description: "We work with Google Analytics 4, Google Ads, Meta Business Suite, SEMrush, Ahrefs, Mailchimp, HubSpot, Klaviyo, Hootsuite, Buffer, and Looker Studio for complete marketing visibility."
        },
        {
          id: "contract-flexibility",
          title: "Do I need to sign a long term contract?",
          description: "No, we offer flexible monthly plans with no long term lock ins. You stay because of the results we deliver, not because of a contract."
        }
      ]
    },
    ctaText: "Let's Turn Your Audience Into Your Biggest Revenue Channel."
  }
};
