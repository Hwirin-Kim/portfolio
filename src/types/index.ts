// ============================================
// 프로젝트 타입 구분
// ============================================
export type ProjectType = "showcase" | "case-study";

// 프로젝트 카테고리 (태그)
export type ProjectCategory =
  | "신규개발" // 새로 만든 프로젝트
  | "유지보수" // 기존 프로젝트 유지보수
  | "리팩토링" // 코드 개선
  | "마이그레이션" // 기술 스택 전환
  | "성능개선" // 최적화
  | "기능추가"; // 기존 프로젝트에 기능 추가

// ============================================
// 공통 베이스
// ============================================
interface BaseProject {
  id: string;
  type: ProjectType;
  category: ProjectCategory; // 카테고리 태그
  title: string;
  thumbnail: string;
  shortDescription: string;
  images?: string[];
}

// ============================================
// Showcase 프로젝트 (전체 개발 참여)
// ============================================
export interface ProjectOverview {
  company?: string; // 회사명 또는 "개인프로젝트"
  period: string;
  team?: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
  links?: {
    github?: string;
    demo?: string;
    notion?: string;
  };
  // 프로젝트 대표 이미지들 (선택 - 캐러셀용)
  images?: string[];
}

// 담당 업무 항목
export interface Responsibility {
  title: string; // 업무 제목 (리스트에 보임)
  details?: {
    description: string; // 상세 설명
    images?: string[]; // 관련 이미지들 (선택)
  };
}

// 성과/개선 사항
export interface Achievement {
  title: string; // 예: "성능 최적화"
  description: string; // 상세 설명
  images?: string[]; // 관련 이미지들 (선택)
  metrics?: {
    // 수치로 표현 가능한 성과
    before: string;
    after: string;
    label: string; // 예: "로딩 시간"
  };
}

// 기술적 도전과 해결
export interface Challenge {
  problem: string; // 어떤 문제가 있었나
  solution: string; // 어떻게 해결했나
  result?: string; // 결과
  images?: string[]; // 관련 이미지들 (선택)
}

export interface MyContribution {
  responsibilities: Responsibility[]; // 담당한 부분
  achievements?: Achievement[]; // 주요 성과
  challenges?: Challenge[]; // 기술적 도전과 해결
}

export interface ShowcaseProject extends BaseProject {
  type: "showcase";
  overview: ProjectOverview;
  myContribution: MyContribution;
}

// ============================================
// Case Study 프로젝트 (특정 문제 해결)
// ============================================
export interface CaseStudyProject extends BaseProject {
  type: "case-study";

  // 프로젝트 컨텍스트
  context: {
    company: string; // "주식회사 레어리"
    period: string; // "2024.03 ~ 2024.04"
    role: string; // "Frontend Developer"
  };

  // 해결한 문제 (메인 콘텐츠)
  challenge: {
    title: string; // "토스페이먼츠 → KG이니시스 결제 시스템 마이그레이션"
    background: string; // 왜 이 작업이 필요했는지
    problem: string; // 구체적인 문제/요구사항
    solution: string; // 어떻게 해결했는지
    result: string; // 결과 및 효과
    techStack: string[]; // 사용한 기술
    metrics?: {
      // 수치화 가능한 성과
      before: string;
      after: string;
      label: string;
    };
  };
}

// ============================================
// 통합 프로젝트 타입
// ============================================
export type Project = ShowcaseProject | CaseStudyProject;
