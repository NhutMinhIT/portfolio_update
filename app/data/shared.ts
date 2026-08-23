/** Language-neutral data: identity, contact channels, and technology names. */

export const profile = {
  name: "Nguyễn Nhựt Minh",
  nameEn: "Nguyen Nhut Minh",
  email: "nhutminh.it19@gmail.com",
  phone: "+84369269410",
  phoneDisplay: "(+84) 369 269 410",
  yearsOfExperience: 5,
  url: "https://nhutminhit.io.vn",
  cv: "/CV_NguyenNhutMinh_SoftwareEngineer.pdf",
  socials: {
    github: "https://github.com/NhutMinhIT",
    linkedin: "https://www.linkedin.com/in/nhutminhit2001/",
    website: "https://nhutminhit.io.vn",
  },
} as const;

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
    items: ["Node.js", "NestJS", "FastAPI (Python)", "RESTful APIs", "Prisma", "MS SQL", "MySQL", "MongoDB"],
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

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

/** Not rendered on the page — kept for the JSON-LD `hasCredential` structured data. */
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
