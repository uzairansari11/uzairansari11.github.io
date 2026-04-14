export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  techStacks?: TechStack[]
}

export interface TechStack {
  id: string
  title: string
  src?: string
}

export interface SkillWithIcon {
  id: string
  title: string
  src: string
}

export interface Tool {
  id: string
  title: string
  src: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export const personalInfo = {
  name: "Uzair Ansari",
  title: "Full Stack Developer",
  email: "uzairans532@gmail.com",
  location: "Mumbai, India",
  bio: "Software Engineer with 2+ years of experience developing scalable web applications using React, Next.js, Node.js, and Express.js. Experienced in building CRM systems, finance automation tools, and real-time communication platforms.",
  longBio:
    "I'm a Full Stack Developer with 2+ years of professional experience building production-grade applications. I independently architected and shipped 3 major products — a real-time VoIP platform, a financial ERP system, and an enterprise CRM — serving 1,500+ active users. I specialize in the React ecosystem and take ownership from architecture to deployment.",
  avatarUrl: "/profile-uzair.jpeg",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw",
  socialLinks: {
    github: "https://github.com/uzairansari11",
    linkedin: "https://linkedin.com/in/uzairansari11",
    portfolio: "https://uzairansari11.github.io",
  },
}

export const skillsWithIcons: SkillWithIcon[] = [
  { id: "1", title: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: "2", title: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: "3", title: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: "4", title: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { id: "5", title: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: "6", title: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { id: "7", title: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: "8", title: "Material UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { id: "9", title: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "10", title: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: "11", title: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: "12", title: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: "13", title: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { id: "14", title: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { id: "15", title: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { id: "16", title: "SIP.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webrtc/webrtc-original.svg" },
]

export const tools: Tool[] = [
  { id: "t1", title: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { id: "t2", title: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { id: "t3", title: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: "t4", title: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { id: "t5", title: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { id: "t6", title: "npm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
]

export const projects: Project[] = [
  {
    id: "p6",
    title: "Clothify",
    description: "Full-stack e-commerce platform with a curated collection of branded clothing. Features product filtering, cart management, user auth, and payment flow.",
    image: "/clothify.png",
    tags: ["React", "Redux", "Chakra UI", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://clothify-rho.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/Clothify",
  },
  {
    id: "p5",
    title: "Gadget Galaxy",
    description: "E-commerce store for designer phone cases and tech accessories. Built with full MERN stack featuring search, filtering, and responsive design.",
    image: "/gadgetgalaxy.png",
    tags: ["React", "Redux", "Chakra UI", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://gadgetgalaxy.netlify.app/",
    githubUrl: "https://github.com/uzairansari11/native-order-609",
  },
  {
    id: "p2",
    title: "Crocs Land",
    description: "Footwear e-commerce platform with unique designs at competitive prices. Includes product catalog, cart, and checkout flow.",
    image: "/crocsland.png",
    tags: ["React", "Redux", "Chakra UI", "JavaScript", "JSON Server"],
    demoUrl: "https://crocsland-8rzn-git-main-uzairansari11.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/spicy-nerve-9354",
  },
  {
    id: "p1",
    title: "Home Elementary",
    description: "Online marketplace for furniture and home decor. Features category browsing, product details, and a seamless shopping experience.",
    image: "/homeelementry.png",
    tags: ["React", "Redux", "Chakra UI", "JavaScript", "JSON Server"],
    demoUrl: "https://eminent-tin-5074.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/eminent-tin-5074",
  },
  {
    id: "p3",
    title: "Apna E-Cart",
    description: "Consumer electronics retail platform with one-day delivery. Features product search, wishlist, cart management, and order tracking.",
    image: "/apnaEcart.png",
    tags: ["JavaScript", "HTML", "CSS", "Mock API", "Local Storage"],
    demoUrl: "https://apna-e-cart.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/-wanting-advertisement-5951",
  },
  {
    id: "p4",
    title: "Cult Body",
    description: "Fitness products and training platform. Browse fitness gear, book online/offline training sessions, and track fitness goals.",
    image: "/cultbody.png",
    tags: ["JavaScript", "HTML", "CSS", "Mock API", "Local Storage"],
    demoUrl: "https://cultbody-uzairansari11.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/-verdant-recess-5792",
  },
]

export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectHighlight {
  name: string
  tagline: string
  techStack: string[]
  description: string
  metrics: ProjectMetric[]
  keyFeatures: string[]
  contributions: string[]
}

export const projectHighlights: ProjectHighlight[] = [
  {
    name: "Nourma",
    tagline: "Financial ERP & Cashflow Forecasting Platform",
    techStack: ["React", "Next.js", "HeroUI", "React Query", "React Hook Form", "Zod", "TanStack Table", "Tailwind CSS"],
    description:
      "Independently built major frontend modules from scratch for an AI-powered finance platform with OCR-driven document handling, 90-day cashflow forecasting, and automated vendor email draft generation — reducing up to 60% of manual intervention.",
    metrics: [
      { value: "60%", label: "Less Manual Work" },
      { value: "1000+", label: "Data Points Handled" },
      { value: "90-Day", label: "Cashflow Forecasting" },
    ],
    keyFeatures: [
      "90-day cashflow forecasting with hierarchical grids",
      "OCR-driven document handling & automation",
      "AI-powered chat with real-time streaming responses",
      "Automated vendor email draft generation",
      "High-performance virtualized tables (1000+ rows)",
      "Dynamic forms with Zod schema validation",
    ],
    contributions: [
      "Developed finance automation workflows for OCR-driven document handling, 90-day cashflow forecasting, and automated vendor email draft generation — reducing up to 60% of manual intervention",
      "Built the entire 90-day cashflow forecasting grid system from scratch — hierarchical expandable rows for entities, vendors, and categories with real-time financial data",
      "Designed and implemented high-performance virtualized tables using TanStack Table to handle 1000+ data points with smooth scrolling and no lag",
      "Developed a ChatGPT-like AI chat interface with streaming responses for financial analytics — users can query financial data conversationally",
      "Implemented complex dynamic forms with React Hook Form + Zod validation for transaction entry, vendor management, and financial configurations",
      "Built data visualization dashboards with real-time analytics, charts, and financial summaries for business decision-making",
      "Integrated React Query for server state management with automatic caching, background refetching, and optimistic updates across all financial modules",
      "Created a modular UI system using HeroUI + Tailwind CSS with consistent design patterns, responsive layouts, and reusable financial components",
    ],
  },
  {
    name: "Lineomatic",
    tagline: "Enterprise CRM & Supply Chain Management Platform",
    techStack: ["React", "Next.js", "React Hook Form", "SWR", "Material UI", "JavaScript"],
    description:
      "Independently built the complete frontend from scratch for a high-level enterprise CRM that digitized the company's entire supply chain. Engineered a quotation workflow that reduced quote creation time from 2 hours to 3 minutes, decreased manual effort by 80%, and supported a 30% increase in revenue.",
    metrics: [
      { value: "2hrs→3min", label: "Quote Creation Time" },
      { value: "80%", label: "Less Manual Effort" },
      { value: "30%", label: "Revenue Increase" },
    ],
    keyFeatures: [
      "End-to-end supply chain workflow management",
      "Dynamic quotation system with multi-machine configuration & pricing",
      "Multi-level work order assignment, tracking & cancellation",
      "Order lifecycle management — creation to fulfillment",
      "Real-time revenue tracking & business analytics",
      "Role-based workflows with multi-level approvals",
    ],
    contributions: [
      "Engineered a highly flexible quotation workflow that reduced quote creation time from 2 hours to 3 minutes, decreased manual effort by 80%, and supported a 30% increase in revenue",
      "Single-handedly architected and built the entire frontend for a company-wide CRM that digitized their complete supply chain operations",
      "Designed a dynamic quotation system supporting multiple machine models, configurable units, conditional pricing logic, optional add-ons, and real-time total calculations",
      "Built a multi-level work order system — order creation, assignment across levels, status tracking, escalation, and multi-level cancellation workflows",
      "Implemented complete order management lifecycle — from quotation approval to order placement, fulfillment tracking, and delivery confirmation",
      "Developed advanced form architecture with React Hook Form — dynamic field arrays, nested structures, conditional rendering, and real-time validation for complex business forms",
      "Built revenue and analytics dashboards that gave management real-time visibility into business performance — directly contributing to 30% revenue growth",
      "Integrated SWR for efficient data fetching with automatic caching, revalidation, and optimistic UI updates across the entire platform",
      "Created a scalable modular component system — reusable form inputs, configuration panels, data tables, dialogs, and summary views used across all modules",
    ],
  },
  {
    name: "Pulse",
    tagline: "Unified Communication Platform — Voice, SMS & WhatsApp",
    techStack: ["Next.js", "SIP.js", "WebRTC", "Material UI", "SWR", "Redux"],
    description:
      "Built the complete frontend from scratch for a unified communication platform consolidating VoIP calling, SMS, and WhatsApp chat. Delivered low-latency VoIP workflows for 1,500+ active users with call handling, transfers, live transcription, and multi-channel messaging.",
    metrics: [
      { value: "1,500+", label: "Active Users" },
      { value: "Real-Time", label: "Call Transcription" },
      { value: "3-in-1", label: "Voice, SMS & WhatsApp" },
    ],
    keyFeatures: [
      "Inbound & outbound VoIP calling with SIP.js & WebRTC",
      "Call barge, blind transfer & attended transfer",
      "Real-time call transcription during active calls",
      "SMS & WhatsApp chat with unified inbox",
      "System notifications for incoming calls on inactive tabs",
      "Multi-session calling, conference & DTMF tones",
    ],
    contributions: [
      "Built the complete unified communication frontend from scratch using Next.js — voice, SMS, and WhatsApp all in one platform",
      "Implemented full VoIP calling system with SIP.js & WebRTC — inbound calls, outbound calls, hold/unhold, mute, and multi-session management",
      "Built advanced call controls — call barge (listen/whisper/join), blind transfer, attended transfer, and conference calling with DTMF tone support",
      "Developed real-time call transcription UI that displays live transcripts during active calls",
      "Built SMS and WhatsApp chat interfaces with real-time messaging, conversation history, and unified inbox",
      "Created system notification system — browser notifications for incoming calls even when the tab is inactive, ensuring no calls are missed",
      "Managed complex call state machine with Redux — handling simultaneous sessions, call transfers between agents, and real-time status updates",
      "Integrated SWR for efficient data fetching across all communication modules with caching and real-time sync",
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "TalkWisely Platforms",
    position: "Software Engineer",
    duration: "Apr 2024 - Present",
    description: [
      "Contributed to development across 3 high-impact products supporting finance, CRM, and real-time communication workflows",
      "Engineered a quotation workflow that reduced quote creation time from 2 hours to 3 minutes, decreased manual effort by 80%, and supported a 30% increase in revenue",
      "Developed finance automation workflows for OCR-driven document handling, 90-day cashflow forecasting, and automated vendor email draft generation — reducing up to 60% of manual intervention",
      "Delivered low-latency VoIP workflows for 1,500+ active users, including call handling, transfers, transcripts, SMS, and WhatsApp messaging",
      "Built complex, workflow-driven product experiences from scratch for an AI-powered finance platform, a custom CRM, and a SIP.js-based VoIP solution",
    ],
    technologies: ["React", "Next.js", "SIP.js", "WebRTC", "Redux", "React Query", "TanStack Table", "Material UI", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "Fastor7 Technology",
    position: "Software Development Engineer",
    duration: "Feb 2024 - Apr 2024",
    description: [
      "Built admin dashboards and business-facing frontend modules for e-commerce operations using Next.js, supporting reporting, operational workflows, and day-to-day usability",
      "Created reusable UI components and API-driven workflows that improved maintainability, frontend consistency, and faster delivery of new features",
    ],
    technologies: ["React", "Next.js", "JavaScript", "REST APIs", "Git"],
  },
  {
    id: "exp-3",
    company: "Clayfin Technologies",
    position: "Software Trainee",
    duration: "Aug 2023 - Oct 2023",
    description: [
      "Built an office meeting management system for meeting room booking, helping streamline internal scheduling and reduce manual coordination",
      "Developed leave management, multi-level approval, task assignment, and API-integrated workflow modules for an internal business application",
    ],
    technologies: ["React", "Redux", "Material UI", "JavaScript"],
  },
  // {
  //   id: "exp-4",
  //   company: "Masai School",
  //   position: "Full Stack Web Development",
  //   duration: "Jul 2022 - Jul 2023",
  //   description: [
  //     "Completed 1500+ hours of intensive full-stack web development training",
  //     "Built 6+ full-stack projects using the MERN stack with real-world constraints",
  //     "Practiced DSA, system design fundamentals, and collaborative development workflows",
  //   ],
  //   technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
  // },
]

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Chakra UI", "GSAP", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth", "WebRTC", "SIP.js", "Python", "Django"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "npm/pnpm"],
  },
  {
    category: "Core Skills",
    items: ["System Design", "Problem Solving", "Agile Development", "Code Reviews", "Team Leadership"],
  },
]
