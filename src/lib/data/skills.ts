export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building beautiful and performant user interfaces",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "Redux/Zustand", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Deploying and maintaining applications efficiently",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Linux", level: 75 },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Integrating AI capabilities into applications",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "Vector Databases", level: 75 },
      { name: "RAG Systems", level: 75 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
];

export const tools = [
  "VS Code",
  "Figma",
  "Postman",
  "GitHub",
  "Jira",
  "Notion",
  "Slack",
  "ChatGPT",
];
