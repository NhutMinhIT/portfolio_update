export const profile = {
  name: "Nguyễn Nhựt Minh",
  nameEn: "Nguyen Nhut Minh",
  role: "Software Engineer",
  headline: "Software Engineer | AI Application | MSE",
  location: "Ho Chi Minh City, Viet Nam",
  email: "nhutminh.it19@gmail.com",
  phone: "+84369269410",
  phoneDisplay: "(+84) 369 269 410",
  yearsOfExperience: 4,
  summary:
    "I'm a Software Engineer with 4 years of experience building web applications in domains such as Management Information Systems (MIS), ERP, CRM, Recruitment, and Online Booking. Proficient in modern JavaScript/TypeScript frameworks (React, Next.js, Vue.js) and experienced with Node.js. Currently pursuing a Master's degree in AI to expand my expertise in intelligent solutions and large-scale system architecture.",
  url: "https://nhutminhit.io.vn",
  cv: "/CV_NguyenNhutMinh_SoftwareEngineer.pdf",
  socials: {
    github: "https://github.com/NhutMinhIT",
    linkedin: "https://www.linkedin.com/in/nhutminhit2001/",
    website: "https://nhutminhit.io.vn",
  },
} as const;

export type Education = {
  school: string;
  degree: string;
  period: string;
  highlight?: string;
  description: string;
};

export const educations: Education[] = [
  {
    school: "FPT School of Business & Technology",
    degree: "Master of Software Engineering (AI)",
    period: "2025 - 2027",
    highlight: "Highest Master's Scholarship",
    description:
      "Pursuing advanced studies focused on software engineering practices, intelligent systems, and large-scale architecture.",
  },
  {
    school: "FPT University, Ho Chi Minh City",
    degree: "B.Sc., Software Engineering",
    period: "Nov 2019 - Dec 2023",
    highlight: "Honors Degree · 2nd Prize — F-Voice Competition",
    description:
      "Completed the program with excellent academic results and actively joined competitions and extracurricular activities to sharpen engineering skills.",
  },
];

export type Award = {
  title: string;
  org: string;
  year: string;
};

export const awards: Award[] = [
  { title: "Employee Performance Rating: Good – Very Good", org: "THACO Group", year: "2025" },
  { title: "Highest Master's Scholarship", org: "FPT University", year: "2025" },
  { title: "Honor Student of the Semester", org: "FPT University", year: "2021" },
  { title: "Second Prize – F-Voice Contest", org: "FPT University", year: "2020" },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  { name: "Automate Data Capture at Scale with Document AI", issuer: "Google Cloud", year: "2025" },
  { name: "Build Custom Processors with Document AI", issuer: "Google Cloud", year: "2025" },
  { name: "Prompt Design in Vertex AI", issuer: "Google Cloud", year: "2025" },
  { name: "Enhance Gemini Model Capabilities", issuer: "Google Cloud", year: "2025" },
  { name: "Google Project Management", issuer: "Coursera", year: "2024" },
  { name: "Software Development Lifecycle", issuer: "Coursera", year: "2024" },
  { name: "User Experience Research and Design", issuer: "Coursera", year: "2024" },
  { name: "Academic English: Writing", issuer: "Coursera", year: "2024" },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Micro-Frontend",
    ],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "NestJS", "FastAPI (Python)", "RESTful APIs", "Prisma", "MS SQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Azure DevOps", "Nginx", "VPS", "Git", "RabbitMQ"],
  },
  {
    category: "AI",
    items: ["Document AI", "Vertex AI", "Prompt Design", "Gemini Model", "Dify.ai", "n8n Automation"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "THACO Group",
    period: "Feb 2025 - Present",
    points: [
      "Develop and implement new features for large-scale internal management software serving 60,000+ daily users across 6+ corporations.",
      "Design core system architecture and standardize source code to ensure consistency across the team.",
      "Apply microservices architecture to build internal systems and proposed strategic PoC projects (n8n & AI automation, Dify.ai virtual assistant, Seafile + OnlyOffice).",
      "Support leadership in adopting new technologies, contribute development ideas, and actively share knowledge within the team.",
    ],
    tags: ["Microservices", "System Architecture", "React", "AI Automation"],
  },
  {
    role: "Front-End Engineer",
    company: "Daoukiwoom Innovation",
    period: "Feb 2024 - Feb 2025",
    points: [
      "Developed and deployed new features for the recruitment platform using micro-frontend architecture.",
      "Built and maintained internal management and event systems.",
      "Contributed product development ideas and actively shared knowledge across the team.",
    ],
    tags: ["Micro-frontend", "Next.js", "Performance"],
  },
  {
    role: "Front-End Developer (Intern)",
    company: "FPT Software",
    period: "Sep 2022 - Feb 2023",
    points: [
      "Participated directly in a company project with a Japanese client.",
      "Learned deployment and software development workflows.",
      "Supported the Tester/QC team through Unit and Integration testing phases.",
    ],
    tags: ["React", "Testing", "Booking System"],
  },
];

export type Project = {
  name: string;
  org: string;
  role: string;
  period: string;
  teamSize: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Office Operations Management System",
    org: "THACO Group",
    role: "Software Engineer",
    period: "Feb 2026 - Present",
    teamSize: "6 members",
    points: [
      "Developed meeting room booking and approval workflows for multiple corporations and regions within THACO Group.",
      "Built meeting management features: participants, chairpersons, agendas, discussions/comments, and supporting services.",
      "Developed document approval workflows with template-based and dynamic signing processes integrated with digital signatures.",
      "Implemented role-based access control and data authorization by corporation and permission groups for secure enterprise operations.",
    ],
    stack: ["Node.js (Express)", "TypeScript", "React.js", "Vite", "Tailwind CSS", "Ant Design", "MUI", "Redux Toolkit"],
  },
  {
    name: "THACO AUTO MIS",
    org: "THACO Group",
    role: "FullStack Engineer",
    period: "May 2025 - Present",
    teamSize: "~15 members",
    points: [
      "Developed role-based access control for business platforms (Manufacturing, Business Operations, Market Reports, Business Analysis).",
      "Implemented authorization by position, geographic region, and company scope for multi-entity, multi-region operations.",
      "Built statistical dashboards for Vehicle Business, Parts & Service, and Manufacturing aggregated by time, region, and brand.",
      "Implemented market & VAMA reporting features and KPI/target import workflows; managed Frontend Portal and CMS source code and production deployments.",
    ],
    stack: ["TypeScript", "Vue.js", "Nuxt.js", "React.js", "TanStack Query", "Pinia", "Tailwind CSS"],
  },
  {
    name: "Personnel Evaluation System",
    org: "THACO Group",
    role: "Software Engineer",
    period: "Jun 2025 - Dec 2025",
    teamSize: "6 members",
    points: [
      "Established the frontend architecture, managed source code, conducted code reviews, and maintained development standards.",
      "Developed user management and organizational permission modules for THACO Group and its 6 member corporations.",
      "Built evaluation cycle management: periods, criteria groups, and employee assignment within assessment cycles.",
      "Implemented corporation-level evaluation aggregation and reporting, digitizing and standardizing the personnel evaluation process.",
    ],
    stack: ["TypeScript", "React.js", "Vite", "Tailwind CSS", "Ant Design", "Redux Toolkit"],
  },
  {
    name: "THACO Document Management",
    org: "THACO Group",
    role: "FullStack Engineer",
    period: "Mar 2025 - May 2025",
    teamSize: "~4 members",
    points: [
      "Designed role-based access control for secure, fine-grained document access by roles and departments.",
      "Developed a centralized document management system with creation, editing, version control, and classification.",
      "Built approval workflows and access policies (public, restricted, private) to standardize document governance.",
      "Integrated dynamic watermarking and offboarding data synchronization; deployed the full stack with Docker on internal infrastructure.",
    ],
    stack: ["TypeScript", "Python", "Next.js", "NestJS", "FastAPI", "Material UI", "Prisma", "MS SQL", "RabbitMQ", "Docker"],
  },
  {
    name: "Topdev.vn",
    org: "Daoukiwoom Innovation",
    role: "Front-End Engineer",
    period: "Feb 2024 - Feb 2025",
    teamSize: "~10 members",
    points: [
      "Developed a community-based IT recruitment platform with strong focus on UX and performance.",
      "Optimized performance using lazy loading, code-splitting, and caching to reduce load time.",
      "Collaborated with Product Owner and SEO Specialist to apply SEO best practices and technical SEO compliance.",
      "Built employer dashboards, CV search, job posting workflows, salary tools (gross/net), and high-traffic event websites.",
    ],
    stack: ["TypeScript", "React.js", "Next.js", "Vue.js", "Tailwind CSS", "Shadcn UI", "Material UI", "Redux Toolkit", "Storybook"],
  },
  {
    name: "Online Booking System",
    org: "FPT Software",
    role: "Front-End Engineer",
    period: "Sep 2022 - Feb 2023",
    teamSize: "~200 members",
    points: [
      "Developed a web-based room booking system with over 40 advanced filters.",
      "Optimized API data loading performance using debounce, pagination, and lazy loading.",
      "Applied mobile-first design principles.",
      "Supported QA and Tester teams to ensure product quality.",
    ],
    stack: ["TypeScript", "React.js", "Redux Toolkit", "single-spa", "MS SQL"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
