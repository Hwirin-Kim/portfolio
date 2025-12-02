// 스킬 레벨 타입
export type SkillLevel = "expert" | "proficient" | "familiar";

// 레벨별 정보
export const skillLevelInfo: Record<
  SkillLevel,
  { label: string; description: string; color: string; bgColor: string }
> = {
  expert: {
    label: "전문",
    description: "심화 개념 이해, 최적화/아키텍처 설계, 팀 내 기술 리드 가능",
    color: "text-primary",
    bgColor: "bg-primary/20 border-primary/50",
  },
  proficient: {
    label: "숙련",
    description: "실무에서 독립적으로 활용, 문제 해결 및 구현 가능",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20 border-blue-500/50",
  },
  familiar: {
    label: "기초",
    description: "기본 개념 이해, 프로젝트에서 활용 경험 있음",
    color: "text-white/60",
    bgColor: "bg-white/10 border-white/20",
  },
};

// 개별 스킬 인터페이스
export interface Skill {
  name: string;
  level: SkillLevel;
  experience: string; // "3년+", "2년", "6개월" 등
}

// 스킬 카테고리 인터페이스
export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

// 스킬 데이터 - 라이브러리/프레임워크 단위
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Core",
    icon: "⚛️",
    skills: [
      { name: "React", level: "expert", experience: "3년+" },
      { name: "Next.js", level: "proficient", experience: "2년" },
      { name: "TypeScript", level: "expert", experience: "3년+" },
      { name: "JavaScript", level: "expert", experience: "3년+" },
    ],
  },
  {
    category: "State Management",
    icon: "🔄",
    skills: [
      { name: "React Query", level: "expert", experience: "3년+" },
      { name: "Redux Toolkit", level: "expert", experience: "3년+" },
      { name: "Zustand", level: "proficient", experience: "2년" },
      { name: "Recoil", level: "proficient", experience: "1년" },
    ],
  },
  {
    category: "Styling",
    icon: "🎨",
    skills: [
      { name: "styled-components", level: "expert", experience: "3년+" },
      { name: "Tailwind CSS", level: "proficient", experience: "1년" },
      { name: "SCSS", level: "familiar", experience: "1년" },
    ],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: [{ name: "React Native", level: "proficient", experience: "1년+" }],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "proficient", experience: "2년" },
      { name: "Express", level: "proficient", experience: "2년" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MariaDB", level: "proficient", experience: "2년" },
      { name: "PostgreSQL", level: "proficient", experience: "1년" },
    ],
  },
  {
    category: "Infra / DevOps",
    icon: "🏗️",
    skills: [
      { name: "AWS EC2", level: "proficient", experience: "2년" },
      { name: "AWS S3", level: "proficient", experience: "2년" },
      { name: "AWS CloudFront", level: "proficient", experience: "2년" },
      { name: "Nginx", level: "proficient", experience: "2년" },
      { name: "PM2", level: "proficient", experience: "2년" },
      { name: "Docker", level: "familiar", experience: "6개월" },
    ],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: [
      { name: "RAG", level: "proficient", experience: "1년" },
      { name: "ChromaDB", level: "familiar", experience: "6개월" },
    ],
  },
];

// 도구 목록
export const tools = [
  "VS Code",
  "Cursor",
  "Figma",
  "Postman",
  "GitHub",
  "Discord",
  "Notion",
  "Slack",
  "DBeaver",
  "GPT codex",
];
