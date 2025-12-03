// ============================================
// 프로젝트 타입 구분
// ============================================
export type ProjectType = "showcase" | "refactor" | "migration";

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
// 미디어 타입 (이미지, 동영상, GIF)
export interface MediaItem {
  url: string; // 파일 경로
  type?: "image" | "video" | "gif"; // 타입 (생략시 확장자로 자동 판별)
  caption?: string; // 설명
  poster?: string; // 동영상용 썸네일
}

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
  images?: string[]; // 하위 호환성 유지
  media?: MediaItem[]; // 새로운 미디어 지원
}

// 담당 업무 항목
export interface Responsibility {
  title: string; // 업무 제목 (리스트에 보임)
  details?: {
    description: string; // 상세 설명
    images?: string[]; // 관련 이미지들 (선택) - 하위 호환성
    media?: MediaItem[]; // 관련 미디어들 (선택) - 새로운 지원
  };
}

// 성능개선 & 문제해결 (통합)
export interface ProblemSolving {
  title: string; // 제목 (예: "상품 로딩 성능 개선")
  problem: string; // 문제상황 (여러 줄 가능)
  solution: string; // 해결과정 (여러 줄 가능)
  result: string; // 결과 (여러 줄 가능)
  metrics?: {
    // 수치로 표현 가능한 성과
    before: string;
    after: string;
    label: string; // 예: "로딩 시간"
  };
  images?: string[]; // 관련 이미지들 (선택) - 하위 호환성
  media?: MediaItem[]; // 관련 미디어들 (선택) - 새로운 지원
}

export interface MyContribution {
  responsibilities: Responsibility[]; // 담당한 부분
  problemSolvings?: ProblemSolving[]; // 성능개선 & 문제해결
}

export interface ShowcaseProject extends BaseProject {
  type: "showcase";
  overview: ProjectOverview;
  myContribution: MyContribution;
}

// ============================================
// Refactor / Migration 프로젝트 공통 구조
// ============================================
interface ChallengeProjectBase extends BaseProject {
  // 프로젝트 컨텍스트
  context: {
    company: string; // "주식회사 레어리"
    period: string; // "2024.03 ~ 2024.04"
    role: string; // "Frontend Developer"
  };

  // 기술 스택
  techStack: string[];

  // 프로젝트 미디어 (선택 - 이미지/동영상 캐러셀용)
  media?: MediaItem[];

  // 내 기여 & 성과 (Showcase와 동일한 구조)
  myContribution: MyContribution;
}

// Refactor 프로젝트 (코드 리팩토링, 구조 개선)
export interface RefactorProject extends ChallengeProjectBase {
  type: "refactor";
}

// Migration 프로젝트 (기술 스택 전환, 시스템 마이그레이션)
export interface MigrationProject extends ChallengeProjectBase {
  type: "migration";
}

// ============================================
// 통합 프로젝트 타입
// ============================================
export type Project = ShowcaseProject | RefactorProject | MigrationProject;
