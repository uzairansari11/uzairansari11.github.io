// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

export const PERSONAL_INFO = {
  name: 'Uzair Ansari',
  title: 'Software Engineer – GenAI | Frontend & Full Stack',
  email: 'uzairans532@gmail.com',
  phone: '+917271880500',
  phoneFormatted: '+91 (7271) 880-500',
  location: 'Mumbai, India',
  bio: 'Software Engineer – GenAI at Newtuple Technologies, building enterprise proofs of concept, conversational interfaces, and workflow automation. Brings 2.5+ years of frontend and full-stack experience with React, Next.js, TypeScript, and Node.js, including four enterprise products serving 1,500+ users.',
  longBio:
    'Software Engineer – GenAI at Newtuple Technologies, where I build enterprise proofs of concept, conversational interfaces, chat API integrations, and workflow automation for client use cases. I bring 2.5+ years of frontend and full-stack experience with React, Next.js, TypeScript, Node.js, and PostgreSQL. Previously led frontend work across four enterprise products serving 1,500+ users. I am currently deepening my skills in Python, FastAPI, SQLAlchemy, and agentic AI.',
  avatarUrl: '/profile-uzair.jpeg',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw',
  socialLinks: {
    github: 'https://github.com/uzairansari11',
    linkedin: 'https://linkedin.com/in/uzairansari11',
    whatsapp: 'https://wa.me/917271880500',
    portfolio: 'https://uzairansari11.github.io',
  },
  yearsOfExperience: '2.5+',
  availability: {
    status: 'Currently at Newtuple Technologies',
    remote: true,
    onsite: true,
  },
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const;

// =============================================================================
// HERO SECTION
// =============================================================================

export const HERO_CONTENT = {
  badge: {
    status: 'Currently at Newtuple Technologies',
    showPulse: true,
  },
  description:
    'I build enterprise GenAI proofs of concept, conversational interfaces, and workflow automation at Newtuple Technologies. Previously, I led frontend delivery across four products serving 1,500+ users with React, Next.js, and TypeScript.',
  cta: {
    primary: {
      text: 'Get In Touch',
      href: '#contact',
      icon: 'Send',
    },
    secondary: {
      text: 'View Resume',
      href: PERSONAL_INFO.resumeUrl,
      icon: 'Download',
      external: true,
    },
  },
  stats: [
    { icon: 'Rocket', value: '4', label: 'Products Shipped' },
    { icon: 'Code2', value: '20+', label: 'Technologies' },
    { icon: 'Users', value: '1,500+', label: 'Active Users' },
  ],
  coreTechnologies: ['React.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'Redux'],
  achievement: {
    title: 'Key Achievement',
    description:
      'Spearheaded frontend development across 4 enterprise products — reduced manual effort by 80% and improved performance by 70%',
  },
  liveProjects: [
    { name: 'AI Finance System', icon: 'Sparkles' },
    { name: 'VOIP Platform', icon: 'Phone' },
    { name: 'Custom CRM', icon: 'Users' },
    { name: 'Time Tracker', icon: 'Clock' },
  ],
  experienceLabel: {
    years: 'Years',
    experience: 'Experience',
  },
  liveProjectsSection: {
    title: 'Live Projects',
    status: 'Active',
  },
  coreTechLabel: 'Core Technologies',
  socialLinks: [
    { platform: 'GitHub', icon: 'Github' },
    { platform: 'LinkedIn', icon: 'Linkedin' },
    { platform: 'Email', icon: 'Mail' },
  ],
} as const;

// =============================================================================
// ABOUT SECTION
// =============================================================================

export const ABOUT_CONTENT = {
  heading: {
    title: 'From complex workflows to clear experiences',
    subtitle: 'A product-minded software engineer working across GenAI, frontend, and full-stack engineering.',
  },
  paragraphs: [
    "I'm a <strong>Software Engineer – GenAI</strong> on Newtuple Technologies' Solutions Team, building enterprise proofs of concept, conversational interfaces, and workflow automation.",
    'Previously, I led frontend development across <strong>four enterprise products</strong> at TalkWisely, spanning finance, CRM, communications, and project management for 1,500+ users. I also mentor developers and work closely with solution architects, backend teams, and stakeholders.',
    "Based in <strong>Mumbai, India</strong>, I work with <strong>React, Next.js, TypeScript, and Node.js</strong> and am deepening my skills in <strong>Python, FastAPI, SQLAlchemy, and agentic AI</strong>.",
  ],
  services: [
    {
      icon: 'Globe',
      title: 'Frontend Engineering',
      desc: 'Enterprise-grade UIs with React, Next.js, Redux, and modern UI libraries.',
      num: '01',
    },
    {
      icon: 'Layers',
      title: 'Backend Development',
      desc: 'Scalable REST APIs with Node.js, Express, PostgreSQL, and MongoDB.',
      num: '02',
    },
    {
      icon: 'Code2',
      title: 'Full Stack Solutions',
      desc: 'End-to-end product development with workflow automation and analytics.',
      num: '03',
    },
    {
      icon: 'Radio',
      title: 'Real-Time Applications',
      desc: 'VoIP platforms, WebRTC, live dashboards, and communication systems.',
      num: '04',
    },
    {
      icon: 'Sparkles',
      title: 'GenAI & Workflow Prototypes',
      desc: 'Conversational interfaces, chat API integrations, onboarding flows, and enterprise proof-of-concept builds.',
      num: '05',
    },
  ],
  cta: {
    primary: { text: 'View My Work', href: '#projects' },
    secondary: { text: 'Get In Touch', href: '#contact' },
  },
} as const;

// =============================================================================
// PROJECTS
// =============================================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  techStacks?: TechStack[];
}

export interface TechStack {
  id: string;
  title: string;
  src?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'p6',
    title: 'Clothify',
    description:
      'Full-stack e-commerce platform with a curated collection of branded clothing. Features product filtering, cart management, user auth, and payment flow.',
    image: '/clothify.png',
    tags: ['React', 'Redux', 'Chakra UI', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://clothify-rho.vercel.app/',
    githubUrl: 'https://github.com/uzairansari11/Clothify',
  },
  {
    id: 'p5',
    title: 'Gadget Galaxy',
    description:
      'E-commerce store for designer phone cases and tech accessories. Built with full MERN stack featuring search, filtering, and responsive design.',
    image: '/gadgetgalaxy.png',
    tags: ['React', 'Redux', 'Chakra UI', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://gadgetgalaxy.netlify.app/',
    githubUrl: 'https://github.com/uzairansari11/native-order-609',
  },
  {
    id: 'p2',
    title: 'Crocs Land',
    description:
      'Footwear e-commerce platform with unique designs at competitive prices. Includes product catalog, cart, and checkout flow.',
    image: '/crocsland.png',
    tags: ['React', 'Redux', 'Chakra UI', 'JavaScript', 'JSON Server'],
    demoUrl: 'https://crocsland-8rzn-git-main-uzairansari11.vercel.app/',
    githubUrl: 'https://github.com/uzairansari11/spicy-nerve-9354',
  },
  {
    id: 'p1',
    title: 'Home Elementary',
    description:
      'Online marketplace for furniture and home decor. Features category browsing, product details, and a seamless shopping experience.',
    image: '/homeelementry.png',
    tags: ['React', 'Redux', 'Chakra UI', 'JavaScript', 'JSON Server'],
    demoUrl: 'https://eminent-tin-5074.vercel.app/',
    githubUrl: 'https://github.com/uzairansari11/eminent-tin-5074',
  },
  {
    id: 'p3',
    title: 'Apna E-Cart',
    description:
      'Consumer electronics retail platform with one-day delivery. Features product search, wishlist, cart management, and order tracking.',
    image: '/apnaEcart.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Mock API', 'Local Storage'],
    demoUrl: 'https://apna-e-cart.vercel.app/',
    githubUrl: 'https://github.com/uzairansari11/-wanting-advertisement-5951',
  },
  {
    id: 'p4',
    title: 'Cult Body',
    description:
      'Fitness products and training platform. Browse fitness gear, book online/offline training sessions, and track fitness goals.',
    image: '/cultbody.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Mock API', 'Local Storage'],
    demoUrl: 'https://cultbody-uzairansari11.vercel.app/',
    githubUrl: 'https://github.com/uzairansari11/-verdant-recess-5792',
  },
] as const;

export const PROJECTS_CONTENT = {
  heading: {
    title: "What I've Built",
    subtitle: 'Side projects and apps crafted from the ground up',
  },
} as const;

// =============================================================================
// EXPERIENCE & PROJECT HIGHLIGHTS
// =============================================================================

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectHighlight {
  name: string;
  tagline: string;
  techStack: string[];
  description: string;
  metrics: ProjectMetric[];
  keyFeatures: string[];
  contributions: string[];
}

export const PROJECT_HIGHLIGHTS: ProjectHighlight[] = [
  {
    name: 'Nourma',
    tagline: 'Financial ERP & Cashflow Forecasting Platform',
    techStack: [
      'React',
      'Next.js',
      'HeroUI',
      'React Query',
      'React Hook Form',
      'Zod',
      'TanStack Table',
      'Tailwind CSS',
    ],
    description:
      'Independently built major frontend modules from scratch for an AI-powered finance platform with OCR-driven document handling, 90-day cashflow forecasting, and automated vendor email draft generation — reducing up to 60% of manual intervention.',
    metrics: [
      { value: '60%', label: 'Less Manual Work' },
      { value: '1000+', label: 'Data Points Handled' },
      { value: '90-Day', label: 'Cashflow Forecasting' },
    ],
    keyFeatures: [
      '90-day cashflow forecasting with hierarchical grids',
      'OCR-driven document handling & automation',
      'AI-powered chat with real-time streaming responses',
      'Automated vendor email draft generation',
      'High-performance virtualized tables (1000+ rows)',
      'Dynamic forms with Zod schema validation',
    ],
    contributions: [
      'Developed finance automation workflows for OCR-driven document handling, 90-day cashflow forecasting, and automated vendor email draft generation — reducing up to 60% of manual intervention',
      'Built the entire 90-day cashflow forecasting grid system from scratch — hierarchical expandable rows for entities, vendors, and categories with real-time financial data',
      'Designed and implemented high-performance virtualized tables using TanStack Table to handle 1000+ data points with smooth scrolling and no lag',
      'Developed a ChatGPT-like AI chat interface with streaming responses for financial analytics — users can query financial data conversationally',
      'Implemented complex dynamic forms with React Hook Form + Zod validation for transaction entry, vendor management, and financial configurations',
      'Built data visualization dashboards with real-time analytics, charts, and financial summaries for business decision-making',
      'Integrated React Query for server state management with automatic caching, background refetching, and optimistic updates across all financial modules',
      'Created a modular UI system using HeroUI + Tailwind CSS with consistent design patterns, responsive layouts, and reusable financial components',
    ],
  },
  {
    name: 'Lineomatic',
    tagline: 'Enterprise CRM & Supply Chain Management Platform',
    techStack: ['React', 'Next.js', 'React Hook Form', 'SWR', 'Material UI', 'JavaScript'],
    description:
      "Independently built the complete frontend from scratch for a high-level enterprise CRM that digitized the company's entire supply chain. Engineered a quotation workflow that reduced quote creation time from 2 hours to 3 minutes, decreased manual effort by 80%, and supported a 30% increase in revenue.",
    metrics: [
      { value: '2hrs→3min', label: 'Quote Creation Time' },
      { value: '80%', label: 'Less Manual Effort' },
      { value: '30%', label: 'Revenue Increase' },
    ],
    keyFeatures: [
      'End-to-end supply chain workflow management',
      'Dynamic quotation system with multi-machine configuration & pricing',
      'Multi-level work order assignment, tracking & cancellation',
      'Order lifecycle management — creation to fulfillment',
      'Real-time revenue tracking & business analytics',
      'Role-based workflows with multi-level approvals',
    ],
    contributions: [
      'Engineered a highly flexible quotation workflow that reduced quote creation time from 2 hours to 3 minutes, decreased manual effort by 80%, and supported a 30% increase in revenue',
      'Single-handedly architected and built the entire frontend for a company-wide CRM that digitized their complete supply chain operations',
      'Designed a dynamic quotation system supporting multiple machine models, configurable units, conditional pricing logic, optional add-ons, and real-time total calculations',
      'Built a multi-level work order system — order creation, assignment across levels, status tracking, escalation, and multi-level cancellation workflows',
      'Implemented complete order management lifecycle — from quotation approval to order placement, fulfillment tracking, and delivery confirmation',
      'Developed advanced form architecture with React Hook Form — dynamic field arrays, nested structures, conditional rendering, and real-time validation for complex business forms',
      'Built revenue and analytics dashboards that gave management real-time visibility into business performance — directly contributing to 30% revenue growth',
      'Integrated SWR for efficient data fetching with automatic caching, revalidation, and optimistic UI updates across the entire platform',
      'Created a scalable modular component system — reusable form inputs, configuration panels, data tables, dialogs, and summary views used across all modules',
    ],
  },
  {
    name: 'Pulse',
    tagline: 'Unified Communication Platform — Voice, SMS & WhatsApp',
    techStack: ['Next.js', 'SIP.js', 'WebRTC', 'Material UI', 'SWR', 'Redux'],
    description:
      'Built the complete frontend from scratch for a unified communication platform consolidating VoIP calling, SMS, and WhatsApp chat. Delivered low-latency VoIP workflows for 1,500+ active users with call handling, transfers, live transcription, and multi-channel messaging.',
    metrics: [
      { value: '1,500+', label: 'Active Users' },
      { value: 'Real-Time', label: 'Call Transcription' },
      { value: '3-in-1', label: 'Voice, SMS & WhatsApp' },
    ],
    keyFeatures: [
      'Inbound & outbound VoIP calling with SIP.js & WebRTC',
      'Call barge, blind transfer & attended transfer',
      'Real-time call transcription during active calls',
      'SMS & WhatsApp chat with unified inbox',
      'System notifications for incoming calls on inactive tabs',
      'Multi-session calling, conference & DTMF tones',
    ],
    contributions: [
      'Built the complete unified communication frontend from scratch using Next.js — voice, SMS, and WhatsApp all in one platform',
      'Implemented full VoIP calling system with SIP.js & WebRTC — inbound calls, outbound calls, hold/unhold, mute, and multi-session management',
      'Built advanced call controls — call barge (listen/whisper/join), blind transfer, attended transfer, and conference calling with DTMF tone support',
      'Developed real-time call transcription UI that displays live transcripts during active calls',
      'Built SMS and WhatsApp chat interfaces with real-time messaging, conversation history, and unified inbox',
      'Created system notification system — browser notifications for incoming calls even when the tab is inactive, ensuring no calls are missed',
      'Managed complex call state machine with Redux — handling simultaneous sessions, call transfers between agents, and real-time status updates',
      'Integrated SWR for efficient data fetching across all communication modules with caching and real-time sync',
    ],
  },
  {
    name: 'TimeTracker',
    tagline: 'Internal Project Management & Time-Tracking Tool',
    techStack: ['React', 'Next.js', 'Material UI', 'Redux', 'REST APIs'],
    description:
      'Drove frontend development of a project management and time-tracking platform that replaced a paid SaaS solution. Established a shared component library that reduced feature delivery time by 40%.',
    metrics: [
      { value: '40%', label: 'Faster Delivery' },
      { value: 'SaaS', label: 'Replacement' },
      { value: 'Shared', label: 'Component Library' },
    ],
    keyFeatures: [
      'Project and task management workflows',
      'Time tracking with billable hours calculation',
      'Team productivity dashboards and reports',
      'Sprint planning and resource allocation',
      'Shared component library for rapid development',
      'Multi-project time tracking and allocation',
    ],
    contributions: [
      'Drove frontend development of the project management platform, replacing a paid SaaS tool and reducing operational costs',
      'Established a shared component library used across all 4 products, reducing feature delivery time by 40%',
      'Built project and task management workflows with drag-and-drop interfaces for sprint planning',
      'Developed time tracking functionality with billable hours calculation and automated timesheet generation',
      'Created productivity dashboards showing team velocity, burndown charts, and resource utilization',
      'Implemented multi-project time tracking allowing developers to allocate hours across multiple projects',
      'Built reporting system for project managers to track progress, budgets, and team performance',
      'Designed reusable form components, data tables, and UI patterns adopted across all company products',
    ],
  },
] as const;

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  location?: string;
  group?: 'Software' | 'Earlier engineering';
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-0',
    company: 'Newtuple Technologies',
    position: 'Software Engineer – GenAI',
    duration: 'Sep 2026 - Present',
    location: 'Pune Division, Maharashtra, India',
    group: 'Software',
    description: [
      'Build GenAI-powered proofs of concept and product demonstrations for enterprise client use cases as part of the Solutions Team',
      'Develop conversational cockpit interfaces and integrate chat APIs into enterprise workflows',
      'Implement product, supplier, and finance onboarding flows with forms, inherited fields, and linked records',
      'Configure and test workflow conditions, approval paths, clarification loops, and rework scenarios end to end',
      'Work with solution architects and stakeholders to translate business requirements into clear, working demos',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'GenAI APIs', 'Workflow Automation'],
  },
  {
    id: 'exp-1',
    company: 'TalkWisely Platforms',
    position: 'Software Engineer | Frontend Development',
    duration: 'May 2024 - May 2026',
    location: 'Ahmedabad, Gujarat, India',
    group: 'Software',
    description: [
      'Led frontend development across four enterprise products in finance, CRM, communications, and project management, serving more than 1,500 users',
      'Built finance automation and cashflow forecasting workflows; improved invoice verification time by 80%',
      'Streamlined CRM quotation workflows from two hours to three minutes through better interfaces and API integrations',
      'Developed real-time VoIP, SMS, and WhatsApp interfaces using WebRTC, SIP.js, and Redux',
      'Migrated finance modules from HeroUI to shadcn/ui while preserving application state, business logic, and API integrations',
      'Created complex validated forms, improved performance with code splitting and lazy loading, and mentored three junior developers',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'SIP.js',
      'WebRTC',
      'Redux',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Material UI',
      'Tailwind CSS',
      'Shadcn UI',
    ],
  },
  {
    id: 'exp-2',
    company: 'Fastor7 Technology',
    position: 'Software Development Engineer | Frontend Developer',
    duration: 'Feb 2024 - Apr 2024',
    location: 'Delhi, India',
    group: 'Software',
    description: [
      'Built five-plus admin dashboard modules for order management, inventory reporting, and seller analytics',
      'Created responsive interfaces and reusable Material UI components for consistent experiences',
      'Integrated REST APIs, managed server data with React Query, and improved performance through code splitting and lazy loading',
      'Collaborated with backend teams to deliver dashboard features and maintain reliable data flows',
    ],
    technologies: ['React.js', 'Next.js', 'JavaScript', 'Material UI', 'React Query', 'REST APIs', 'Git'],
  },
  {
    id: 'exp-3',
    company: 'Clayfin',
    position: 'Software Trainee | Frontend Developer',
    duration: 'Aug 2023 - Oct 2023',
    location: 'Chennai, Tamil Nadu, India',
    group: 'Software',
    description: [
      'Contributed to frontend development for enterprise applications in the banking and corporate domain',
      'Built responsive UI components and features with React, JavaScript, and Material UI; followed team design patterns and review practices',
    ],
    technologies: ['React.js', 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Git'],
  },
  {
    id: 'exp-4',
    company: 'MK Precision',
    position: 'Mechanical Design Engineer',
    duration: 'Oct 2021 - Jul 2022',
    location: 'Navi Mumbai, Maharashtra, India',
    group: 'Earlier engineering',
    description: [
      'Handled end-to-end product design and development, from requirements and concept design through 3D modelling, validation, prototyping, and documentation',
      'Worked with clients and manufacturing teams to deliver functional, manufacturable designs using SolidWorks and Siemens NX',
    ],
    technologies: ['SolidWorks', 'Siemens NX', '3D Modelling', 'Design Validation'],
  },
  {
    id: 'exp-5',
    company: 'AMON Engineers Private Limited',
    position: 'Intern',
    duration: 'Oct 2020 - Dec 2020',
    location: 'Thane, Maharashtra, India',
    group: 'Earlier engineering',
    description: [
      'Worked on mechanical design and HVAC layouts, heat-load calculations, duct and riser sizing, and grill selection',
      'Coordinated HVAC layouts with building utilities and applied industry standards to plan air distribution systems',
    ],
    technologies: ['AutoCAD', 'HVAC Layouts', 'Heat-Load Calculations'],
  },
  {
    id: 'exp-6',
    company: 'Indian Railways',
    position: 'Summer Trainee',
    duration: 'May 2017 - Jun 2017',
    location: 'Lucknow, Uttar Pradesh, India',
    group: 'Earlier engineering',
    description: ['Completed training focused on diesel locomotive supercharging systems and their components'],
    technologies: ['Diesel Locomotives', 'Mechanical Systems'],
  },
] as const;

export const EXPERIENCE_CONTENT = {
  heading: {
    title: "Where I've Worked",
    subtitle: 'GenAI solutions today; enterprise software and product engineering before that',
  },
  sections: {
    products: 'Products I Built',
    workHistory: 'Work History',
  },
} as const;

// =============================================================================
// SKILLS
// =============================================================================

export interface SkillWithIcon {
  id: string;
  title: string;
  src: string;
}

export interface Tool {
  id: string;
  title: string;
  src: string;
}

export interface SkillCategoryInterface {
  title: string;
  icon: string;
  skills: string[];
}

export const SKILLS_WITH_ICONS: SkillWithIcon[] = [
  {
    id: '1',
    title: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: '2',
    title: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    id: '3',
    title: 'Redux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    id: '4',
    title: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: '5',
    title: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    id: '6',
    title: 'Express',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    id: '7',
    title: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    id: '8',
    title: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    id: '9',
    title: 'Material UI',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  },
  {
    id: '10',
    title: 'Tailwind',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    id: '11',
    title: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: '12',
    title: 'HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    id: '13',
    title: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    id: '14',
    title: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
] as const;

export const TOOLS: Tool[] = [
  {
    id: 't1',
    title: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    id: 't2',
    title: 'GitHub',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    id: 't3',
    title: 'Postman',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
  {
    id: 't4',
    title: 'Figma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    id: 't5',
    title: 'Vercel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
  },
  {
    id: 't6',
    title: 'VS Code',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
] as const;

export const SOFT_SKILL: SkillCategoryInterface[] = [
  {
    title: 'Professional Skills',
    icon: 'Users',
    skills: [
      'Communication',
      'Team Collaboration',
      'Problem Solving',
      'Leadership',
      'Mentoring',
      'Adaptability',
      'Time Management',
      'Attention to Detail',
    ],
  },
];
export const SKILL_CATEGORIES: SkillCategoryInterface[] = [
  {
    title: 'Frontend',
    icon: 'Code2',
    skills: [
      'React.js',
      'Next.js',
      'Redux',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Material UI',
      'Shadcn UI',
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'PostgreSQL', 'Prisma', 'MongoDB', 'SQL'],
  },
  {
    title: 'Tools & Methodologies',
    icon: 'Wrench',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Figma',
      'Vercel',
      'Netlify',
      'Claude Code',
      'Agile (Scrum)',
      'Code Reviews',
    ],
  },
  {
    title: 'GenAI & Current Learning',
    icon: 'Brain',
    skills: ['GenAI Solutions', 'Chat API Integration', 'Workflow Automation', 'Python', 'FastAPI', 'SQLAlchemy', 'Agentic AI'],
  },
] as const;

export const SKILLS_CONTENT = {
  heading: {
    title: 'Skills',
    subtitle: 'Technologies and tools I use to bring ideas to life',
  },
} as const;

// =============================================================================
// CONTACT
// =============================================================================

export const CONTACT_CONTENT = {
  heading: {
    title: "Tell me what you're building.",
    subtitle: "Share a project, question, or idea. Reach me through the form or your preferred channel.",
  },
  form: {
    title: 'Send me a message',
    description: "Fill in a few details and your email app will open with the message ready to send.",
    fields: {
      name: {
        label: 'Name',
        placeholder: 'John Doe',
        required: true,
        minLength: 2,
        errorMessage: 'Name must be at least 2 characters',
      },
      email: {
        label: 'Email',
        placeholder: 'john@example.com',
        required: true,
        errorMessage: 'Please enter a valid email address',
      },
      subject: {
        label: 'Subject',
        placeholder: 'Project collaboration',
        required: true,
        minLength: 3,
        errorMessage: 'Subject must be at least 3 characters',
      },
      message: {
        label: 'Message',
        placeholder: 'Tell me about your project...',
        required: true,
        minLength: 10,
        rows: 5,
        errorMessage: 'Message must be at least 10 characters',
      },
    },
    submitButton: {
      default: 'Send Message',
      sending: 'Sending...',
      success: 'Message Sent!',
    },
    toast: {
      success: {
        title: 'Message Sent!',
        description: "I'll get back to you as soon as possible.",
      },
      error: {
        title: 'Failed to Send',
        description: 'Please try again or email me directly.',
      },
      validation: {
        title: 'Validation Error',
        description: 'Please fix the errors before submitting.',
      },
      missingConfig: {
        title: 'Email setup missing',
        description: 'EmailJS environment variables are not configured.',
      },
    },
  },
  contactInfo: [
    {
      icon: 'Mail',
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      clickable: true,
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: PERSONAL_INFO.phoneFormatted,
      href: `tel:${PERSONAL_INFO.phone}`,
      clickable: true,
    },
    {
      icon: 'MessageCircle',
      label: 'WhatsApp',
      value: PERSONAL_INFO.phoneFormatted,
      href: PERSONAL_INFO.socialLinks.whatsapp,
      clickable: true,
    },
  ],
} as const;

// =============================================================================
// FOOTER
// =============================================================================

export const FOOTER_CONTENT = {
  branding: {
    name: 'Uzair Ansari',
    shortName: 'UA',
    role: 'Full Stack Developer',
  },
  copyright: {
    text: 'Uzair Ansari',
  },
  social: [
    { icon: 'Github', href: PERSONAL_INFO.socialLinks.github, label: 'GitHub' },
    { icon: 'Linkedin', href: PERSONAL_INFO.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: 'MessageCircle', href: PERSONAL_INFO.socialLinks.whatsapp, label: 'WhatsApp' },
    { icon: 'Mail', href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
  ],
} as const;
