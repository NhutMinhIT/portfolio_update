import type { Content } from "./content";
import { skills } from "./shared";

export const contentEn: Content = {
  lang: "en",
  htmlLang: "en",
  path: "/",
  role: "Software Engineer",
  // Founder version — temporarily disabled, restore if the founder role goes public again.
  // headline: "Software Engineer | AI Application | Founder",
  headline: "Software Engineer | AI | Digital Transformation",
  tagline:
    "Software Engineer at THACO Group and Master’s student in AI Applications, specializing in software development, system analysis, and building practical, scalable enterprise solutions that remain stable as businesses grow.",
  summary: [
    "Born and raised in Vietnam, I earned a Bachelor’s degree in Software Engineering from FPT University Ho Chi Minh City in 2024. In 2025, I began pursuing a Master’s degree in Artificial Intelligence Applications at the School of Management and Technology (FSB), FPT University. Since 2026, I have been actively involved in scientific research, focusing on Computer Vision and Natural Language Processing (NLP), with an interest in bridging academic research and real-world applications.",
    "I currently work as a Software Engineer at THACO Group, where I am responsible for analyzing, developing, and enhancing enterprise software systems serving more than 60,000 employees across the group. I am involved throughout the development lifecycle, from business requirements analysis and solution design to system development, optimization, and enhancement. My work focuses on delivering stable, scalable, and practical technology solutions that effectively address the operational needs of the organization.",
    // Founder version — temporarily disabled.
    // "In addition to my professional and research activities, I am the Founder of Phuc Nguyen Trading & Import-Export Co., Ltd., a startup operating in the logistics and consumer electronics sectors. I oversee the company’s digital transformation, e-commerce development, marketing, and business strategy, with a focus on leveraging technology to optimize operations, improve customer experience, and drive business growth.",
    "Alongside my professional and research activities, I am responsible for digital transformation at Phuc Nguyen Trading & Import-Export Co., Ltd., a company operating in the logistics and consumer electronics sectors. My work there covers e-commerce development, marketing, and business strategy, with a focus on leveraging technology to optimize operations, improve customer experience, and drive business growth.",
  ],
  focusAreas: [
    {
      label: "Engineering",
      title: "Software Engineer",
      detail: "THACO Group · Enterprise software systems",
    },
    {
      label: "Research",
      title: "MSE in AI Applications",
      detail: "FSB, FPT University · Computer Vision & NLP",
    },
    // Founder version — temporarily disabled.
    // {
    //   label: "Entrepreneurship",
    //   title: "Founder",
    //   detail: "Phuc Nguyen Trading & Import-Export Co., Ltd.",
    // },
    {
      label: "Business",
      title: "Digital Transformation",
      detail: "Phuc Nguyen Trading & Import-Export · E-commerce & operations",
    },
  ],
  location: "Ho Chi Minh City, Viet Nam",
  // Founder version — temporarily disabled.
  // metaDescription:
  //   "Software Engineer at THACO Group building enterprise systems, Master’s student in AI Applications researching Computer Vision and NLP, and Founder of Phuc Nguyen Trading & Import-Export.",
  metaDescription:
    "Software Engineer at THACO Group building enterprise systems, Master’s student in AI Applications researching Computer Vision and NLP, and driving digital transformation in logistics & e-commerce.",
  navLinks: [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  ui: {
    badge: "Open to opportunities",
    greeting: "Hi, welcome to my portfolio!",
    intro: "I'm",
    getInTouch: "Get in touch",
    downloadCv: "Download CV",
    backToTop: "back to top",
    awardsTitle: "Awards & Achievements",
    projectsInRole: "Projects",
    venturesTitle: "Digital transformation projects",
    stats: [
      { value: "5+", label: "Years experience" },
      { value: "60K+", label: "Employees served" },
      { value: "5K+", label: "Daily active users" },
      { value: "10+", label: "Production projects" },
    ],
    switchLanguage: "Xem bản tiếng Việt",
    switchLanguageShort: "VI",
    githubLabel: "GitHub profile",
    linkedinLabel: "LinkedIn profile",
    emailLabel: "Send email",
    menuLabel: "Toggle navigation menu",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    channels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      website: "Website",
    },
  },
  sections: {
    about: {
      label: "about",
      title: "Who I am",
      // Founder version — temporarily disabled.
      // description: "Engineering, research, and entrepreneurship — three threads of the same interest in turning technology into something people actually use.",
      description:
        "Engineering, research, and digital transformation — three threads of the same interest in turning technology into something people actually use.",
    },
    education: {
      label: "education-awards",
      title: "Education & Awards",
      description: "Highlighted education history and major recognitions.",
    },
    skills: {
      label: "skills",
      title: "Tech Stack & Skills",
      description:
        "Tools and technologies I use to build scalable, high-performance products.",
    },
    experience: {
      label: "experience",
      title: "Experience & Projects",
      description:
        "Roles where I've delivered production software for real businesses, and the projects I built in them.",
    },
    contact: {
      label: "contact",
      title: "Let's work together",
      description:
        "Have a project, role, or idea in mind? I'm always open to a conversation.",
    },
  },
  educations: [
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
  ],
  awards: [
    { title: "Employee Performance Rating: Good – Very Good", org: "THACO Group", year: "2025" },
    { title: "Highest Master's Scholarship", org: "FPT University", year: "2025" },
    { title: "Honor Student of the Semester", org: "FPT University", year: "2021" },
    { title: "Second Prize – F-Voice Contest", org: "FPT University", year: "2020" },
  ],
  experiences: [
    {
      role: "Software Engineer",
      company: "THACO Group",
      period: "Feb 2025 - Present",
      points: [
        "Develop and implement new features for large-scale internal management software serving 60,000+ employees across 6+ corporations in the group, with 5,000+ daily active users.",
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
  ],
  projects: [
    {
      name: "THACO E-Sign – Digital Signature & E-Approval Platform",
      org: "THACO Group",
      role: "Software Engineer",
      period: "Feb 2026 - Present",
      teamSize: "4 members · 20,000+ users · 70,000+ documents/month · ~3,000 documents/day · 6 member corporations",
      points: [
        "Analyzed and developed a Digital Signature & E-Approval platform serving 20,000+ users across 6 member corporations, processing 70,000+ documents per month.",
        "Integrated Viettel MySign, THACO Internal CA, and the THACO Document Archive Management system, forming an end-to-end electronic document flow from submission and approval to digital signing and archiving.",
        "Built a Dynamic Workflow Engine supporting flexible configuration of signing levels, signing methods, processing conditions, and sequential/parallel flows without depending on a fixed workflow.",
        "Developed full document lifecycle management: submit, approve, request changes, return, reject, recall, edit, and re-submit.",
        "Optimized the document processing pipeline, file streaming/upload/download, and database queries, improving responsiveness for a system with high document throughput.",
        "Optimized architecture and infrastructure resources, contributing to lower operating costs, less redundant data processing, and better system scalability.",
        "Contributed to digitizing the signing/approval process: fewer paper documents, shorter turnaround time, better traceability, and standardized business processes across the organization.",
      ],
      stack: ["Node.js (Express)", "TypeScript", "React.js", "Vite", "Tailwind CSS", "Ant Design", "Redux Toolkit"],
    },
    {
      name: "THACO AUTO MIS",
      org: "THACO Group",
      role: "Software Engineer",
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
      role: "Software Engineer",
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
  ],
  skills,
};
