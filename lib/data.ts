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
  title: "Full Stack MERN Developer",
  email: "uzairans532@gmail.com",
  location: "Mumbai, India",
  bio: "Full Stack Web Developer with expertise in MERN stack, passionate about creating responsive and user-friendly web applications.",
  longBio:
    "I'm a Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). With experience across multiple companies, I've contributed to various projects ranging from e-commerce platforms to real-time communication applications. I'm passionate about creating seamless, user-centric web experiences and constantly learning new technologies to stay at the forefront of web development.",
  avatarUrl:
    "/profile-uzair.jpeg",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/uzairansari11",
    linkedin: "https://linkedin.com/in/uzairansari11",
    portfolio: "https://uzairansari11.github.io",
  },
}

// New structured skills with icons
export const skillsWithIcons: SkillWithIcon[] = [
  {
    id: "1",
    title: "React Js",
    src: "https://www.svgrepo.com/show/342156/react.svg",
  },
  {
    id: "2",
    title: "Next Js",
    src: "https://www.svgrepo.com/show/342062/next-js.svg",
  },
  {
    id: "3",
    title: "React Native",
    src: "https://www.svgrepo.com/show/342156/react.svg",
  },
  {
    id: "4",
    title: "Redux",
    src: "https://www.svgrepo.com/show/306657/redux.svg",
  },
  {
    id: "5",
    title: "Node Js",
    src: "https://www.svgrepo.com/show/445914/node-js.svg",
  },
  {
    id: "6",
    title: "Express Js",
    src: "https://www.svgrepo.com/show/330398/express.svg",
  },
  {
    id: "7",
    title: "MongoDB",
    src: "https://www.svgrepo.com/show/342044/mongodb.svg",
  },
  {
    id: "8",
    title: "Chakra UI",
    src: "https://img.icons8.com/fluency-systems-regular/512/chakra-ui.png",
  },
  {
    id: "9",
    title: "Tailwind CSS",
    src: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    id: "10",
    title: "TypeScript",
    src: "https://www.svgrepo.com/show/369021/typescript.svg",
  },
  {
    id: "11",
    title: "JavaScript",
    src: "https://www.svgrepo.com/show/508924/js02.svg",
  },
  {
    id: "12",
    title: "HTML",
    src: "https://www.svgrepo.com/show/325298/html5.svg",
  },
  {
    id: "13",
    title: "CSS",
    src: "https://www.svgrepo.com/show/325072/css3.svg",
  },
]

export const tools: Tool[] = [
  {
    id: "t1",
    title: "VS Code",
    src: "https://www.svgrepo.com/show/424927/vs-code-logo-microsoft.svg",
  },
  {
    id: "t6",
    title: "Codepen",
    src: "https://www.svgrepo.com/show/313739/codepen.svg",
  },
  {
    id: "t2",
    title: "GitHub",
    src: "https://www.svgrepo.com/show/378421/github-outline-fill.svg",
  },
  {
    id: "t4",
    title: "Postman",
    src: "https://www.svgrepo.com/show/306590/postman.svg",
  },
  {
    id: "t3",
    title: "Netlify",
    src: "https://www.svgrepo.com/show/306463/netlify.svg",
  },
  {
    id: "t5",
    title: "Vercel",
    src: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
]

// Updated projects with new structure
export const projects: Project[] = [
  {
    id: "p6",
    title: "Clothify",
    description:
      "Clothify is an innovative online platform that offers a diverse range of high-quality branded clothing at affordable prices. With a keen focus on style and value, we curate a collection that caters to all fashion enthusiasts.",
   "image": "/clothify.png",
    tags: ["React", "Redux", "Chakra UI", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://clothify-rho.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/Clothify.git",
    techStacks: [
      { id: "4", title: "React JS", src: "https://www.svgrepo.com/show/342156/react.svg" },
      { id: "5", title: "Redux", src: "https://www.svgrepo.com/show/306657/redux.svg" },
      { id: "6", title: "Chakra UI", src: "https://img.icons8.com/fluency-systems-regular/512/chakra-ui.png" },
      { id: "7", title: "Node Js", src: "https://www.svgrepo.com/show/445914/node-js.svg" },
      { id: "8", title: "Express Js", src: "https://www.svgrepo.com/show/330398/express.svg" },
      { id: "9", title: "MongoDB", src: "https://www.svgrepo.com/show/342044/mongodb.svg" },
    ],
  },
  {
    id: "p5",
    title: "Gadget Galaxy",
    description:
      "GadgetGalaxy is a clone of an Indian online store that specializes in selling a wide range of designer mobile phone cases, laptop sleeves, and other tech accessories.",
    image: "/gadgetgalaxy.png",
    tags: ["React", "Redux", "Chakra UI", "Node.js", "Express", "MongoDB", "Mantine UI"],
    demoUrl: "https://gadgetgalaxy.netlify.app/",
    githubUrl: "https://github.com/uzairansari11/native-order-609",
    techStacks: [
      { id: "t1", title: "HTML", src: "https://www.svgrepo.com/show/325298/html5.svg" },
      { id: "t2", title: "CSS", src: "https://www.svgrepo.com/show/325072/css3.svg" },
      { id: "t3", title: "JavaScript", src: "https://www.svgrepo.com/show/508924/js02.svg" },
      { id: "4", title: "React JS", src: "https://www.svgrepo.com/show/342156/react.svg" },
      { id: "5", title: "Redux", src: "https://www.svgrepo.com/show/306657/redux.svg" },
      { id: "6", title: "Chakra UI", src: "https://img.icons8.com/fluency-systems-regular/512/chakra-ui.png" },
      { id: "7", title: "Node Js", src: "https://www.svgrepo.com/show/445914/node-js.svg" },
      { id: "8", title: "Express Js", src: "https://www.svgrepo.com/show/330398/express.svg" },
      { id: "9", title: "MongoDB", src: "https://www.svgrepo.com/show/342044/mongodb.svg" },
    ],
  },
  {
    id: "p2",
    title: "Crocs Land",
    description:
      "Crocs Land is a E-commerce website that sells a wide range of footware products having unique and attrative design at very low prices.",
    image: "/crocsland.png",
    tags: ["React", "Redux", "Chakra UI", "JavaScript", "CSS", "JSON Server"],
    demoUrl: "https://crocsland-8rzn-git-main-uzairansari11.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/spicy-nerve-9354.git",
    techStacks: [
      { id: "t1", title: "JavaScript", src: "https://www.svgrepo.com/show/508924/js02.svg" },
      { id: "t2", title: "HTML", src: "https://www.svgrepo.com/show/325298/html5.svg" },
      { id: "t3", title: "CSS", src: "https://www.svgrepo.com/show/325072/css3.svg" },
      { id: "5", title: "Chakra UI", src: "https://img.icons8.com/fluency-systems-regular/512/chakra-ui.png" },
      { id: "6", title: "React JS", src: "https://www.svgrepo.com/show/342156/react.svg" },
      { id: "7", title: "Redux", src: "https://www.svgrepo.com/show/306657/redux.svg" },
    ],
  },
  {
    id: "p1",
    title: "Home Elementry",
    description:
      "Home Elementry is an Indian online marketplace that sells variety of furniture and home décor at a affordable price with top notch quality.",
    image: "/homeelementry.png",
    tags: ["React", "Redux", "Chakra UI", "JavaScript", "CSS", "JSON Server"],
    demoUrl: "https://eminent-tin-5074.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/eminent-tin-5074.git",
    techStacks: [
      { id: "t1", title: "JavaScript", src: "https://www.svgrepo.com/show/508924/js02.svg" },
      { id: "t2", title: "HTML", src: "https://www.svgrepo.com/show/325298/html5.svg" },
      { id: "t3", title: "CSS", src: "https://www.svgrepo.com/show/325072/css3.svg" },
      { id: "5", title: "Chakra UI", src: "https://img.icons8.com/flplaceholderuency-systems-regular/512/chakra-ui.png" },
      { id: "6", title: "React JS", src: "https://www.svgrepo.com/show/342156/react.svg" },
      { id: "7", title: "Redux", src: "https://www.svgrepo.com/show/306657/redux.svg" },
    ],
  },
  {
    id: "p3",
    title: "Apna-E-Cart",
    description:
      "Apna - E - Cart is an Indian consumer electronics retailer. It sells differnt kinds of electronic products and delivere the products within one day.",
    image: "/apnaEcart.png",
    tags: ["JavaScript", "HTML", "CSS", "Mock API", "Local Storage"],
    demoUrl: "https://apna-e-cart.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/-wanting-advertisement-5951.git",
    techStacks: [
      { id: "t1", title: "JavaScript", src: "https://www.svgrepo.com/show/508924/js02.svg" },
      { id: "t2", title: "HTML", src: "https://www.svgrepo.com/show/325298/html5.svg" },
      { id: "t3", title: "CSS", src: "https://www.svgrepo.com/show/325072/css3.svg" },
      { id: "t5", title: "Local Storage" },
    ],
  },
  {
    id: "p4",
    title: "Cult Body",
    description:
      "CultBody provides product related to your fintness and also provide diffrent kind of fitness trianing via online and offline.",
    image: "/cultbody.png",
    tags: ["JavaScript", "HTML", "CSS", "Mock API", "Local Storage"],
    demoUrl: "https://cultbody-uzairansari11.vercel.app/",
    githubUrl: "https://github.com/uzairansari11/-verdant-recess-5792.git",
    techStacks: [
      { id: "t1", title: "JavaScript", src: "https://www.svgrepo.com/show/508924/js02.svg" },
      { id: "t2", title: "HTML", src: "https://www.svgrepo.com/show/325298/html5.svg" },
      { id: "t3", title: "CSS", src: "https://www.svgrepo.com/show/325072/css3.svg" },
      { id: "t5", title: "Local Storage" },
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "TalkWisely Platforms",
    position: "Software Engineer",
    duration: "May 2024 - Present",
    description: [
      "Contributed to the development of three impactful projects: Startify, Puls, and Lineometric CRM",
      "Developed Startify, a project management platform for tracking time and tasks for organizations",
      "Built Puls, a real-time call application using JsSIP for VoIP calling with AWS integration",
      "Created Lineometric CRM, a customized solution for managing sales of machinery products",
      "Leveraged expertise in front-end technologies and web engineering",
    ],
    technologies: ["React.js", "Material-UI", "SWR", "Front-End Development", "Web Engineering"],
  },
  {
    id: "exp-2",
    company: "Fastor7 Technology",
    position: "SDE",
    duration: "Feb 2024 - May 2024",
    description: [
      "Worked as a Software Development Engineer focusing on front-end development",
      "Contributed to time-sensitive projects requiring efficient time management",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
    ],
    technologies: ["Front-End Development", "Time Management", "React", "JavaScript"],
  },
  {
    id: "exp-3",
    company: "Clayfin",
    position: "Software Trainee",
    duration: "Aug 2023 - Oct 2023",
    description: [
      "Contributed to the development of a people management application, focusing on frontend aspects",
      "Utilized React, Redux, JavaScript, and Material UI to create a robust and user-friendly interface",
      "Collaborated with cross-functional teams to ensure seamless integration of front-end components",
      "Enhanced overall user experience through responsive design and intuitive features",
    ],
    technologies: ["Material-UI", "JavaScript", "React", "Redux"],
  },
  {
    id: "exp-4",
    company: "Masai",
    position: "Web Development Intern",
    duration: "Jul 2022 - Jul 2023",
    description: [
      "Completed intensive full-stack web development training",
      "Developed multiple projects using the MERN stack",
      "Learned and applied problem-solving skills and collaborative teamwork",
      "Stayed updated with industry trends and best practices",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
  },
]

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Material UI",
      "Chakra UI",
      "Ant Design",
      "Tailwind CSS",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "REST API", "JWT", "Password Hashing"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
  },
  {
    category: "Other Skills",
    items: ["Problem Solving", "Team Collaboration", "Time Management", "Project Management", "Communication"],
  },
]
