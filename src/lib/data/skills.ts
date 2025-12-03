// 스킬 레벨 타입
export type SkillLevel = "advanced" | "intermediate" | "basic";

// 레벨별 정보
export const skillLevelInfo: Record<
  SkillLevel,
  { label: string; description: string; color: string; bgColor: string }
> = {
  advanced: {
    label: "Advanced",
    description: "심화 개념 이해, 최적화/아키텍처 설계, 기술 리드 가능",
    color: "text-primary",
    bgColor: "bg-primary/20 border-primary/50",
  },
  intermediate: {
    label: "Intermediate",
    description: "실무에서 독립적으로 활용, 문제 해결 및 구현 가능",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20 border-blue-500/50",
  },
  basic: {
    label: "Basic",
    description: "기본 개념 이해, 프로젝트에서 활용 경험 있음",
    color: "text-white/60",
    bgColor: "bg-white/10 border-white/20",
  },
};

// 개별 스킬 인터페이스
export interface Skill {
  name: string;
  level: SkillLevel;
  capabilities: string[];
}

// 스킬 카테고리 인터페이스
export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

// 스킬 데이터
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Core",
    icon: "⚛️",
    skills: [
      {
        name: "React",
        level: "advanced",
        capabilities: [
          "복잡한 상태/데이터 흐름을 고려한 페이지 및 컴포넌트 구조 설계",
          "비즈니스 로직과 UI 로직 분리한 유지보수 중심 설계",
          "렌더링 병목 지점 최적화 및 렌더 비용 감소",
          "Suspense / Error Boundary 기반 품질 안정화 처리",
          "대규모 리팩토링 및 성능 개선 주도 경험",
        ],
      },
      {
        name: "Next.js",
        level: "intermediate",
        capabilities: [
          "SSR / SSG / ISR 선택적 활용을 통한 데이터 전략 설계",
          "Dynamic Route · Middleware · Image 최적화 구성",
          "App Router 기반 폴더 아키텍처 및 클라이언트/서버 경계 설계",
          "API Route 기반 서버 로직 구축 및 SEO 대응",
        ],
      },
      {
        name: "TypeScript",
        level: "advanced",
        capabilities: [
          "타입 안정성을 고려한 API 및 도메인 모델 설계",
          "타입 기반 리팩토링으로 유지보수성 향상",
          "JavaScript 프로젝트를 TypeScript로 마이그레이션한 경험 보유",
        ],
      },
      {
        name: "JavaScript",
        level: "advanced",
        capabilities: [
          "비동기 흐름(Promise/async-await)과 이벤트 루프 기반 제어",
          "모듈 패턴 및 클로저 기반 구조 활용",
          "대규모 코드 리팩토링 경험",
        ],
      },
    ],
  },
  {
    category: "State Management",
    icon: "🔄",
    skills: [
      {
        name: "React Query",
        level: "advanced",
        capabilities: [
          "서버 상태/클라이언트 상태 경계 정의 및 분리 전략 설계",
          "캐싱·리페치·옵티미스틱 업데이트 기반의 실전 데이터 흐름 구축",
          "Suspense / Error Boundary 연동을 통한 데이터 UI 안정화",
        ],
      },
      {
        name: "Redux Toolkit",
        level: "advanced",
        capabilities: [
          "도메인 단위 Slice 기반 전역 상태 설계",
          "규모 확장성과 유지보수 중심의 상태 모델 구성",
          "대규모 페이지 구조 리팩토링 경험",
        ],
      },
      {
        name: "Zustand",
        level: "intermediate",
        capabilities: [
          "경량 글로벌 상태 기반 UI 설계",
          "가독성과 구조화를 고려한 store 분리 패턴 적용",
          "컴포넌트 의존성을 낮춘 비즈니스 로직 분리 경험",
        ],
      },
      {
        name: "Recoil",
        level: "intermediate",
        capabilities: [
          "Atom 기반 상태 의존 관계 모델링",
          "Selector 기반 파생 데이터 관리",
        ],
      },
    ],
  },
  {
    category: "Styling",
    icon: "🎨",
    skills: [
      {
        name: "styled-components",
        level: "advanced",
        capabilities: [
          "컴포넌트 단위 스타일 아키텍처 설계",
          "테마 시스템/토큰 기반 디자인 시스템 구축",
          "CSS-in-JS 성능 이슈 대응 경험",
        ],
      },
      {
        name: "Tailwind CSS",
        level: "intermediate",
        capabilities: [
          "반응형/다크모드/애니메이션 포함한 유틸리티 기반 스타일 구성",
          "디자인 시안 없는 프로젝트에서 빠른 UI 구축",
        ],
      },
      {
        name: "SCSS",
        level: "basic",
        capabilities: ["믹스인, 네스팅, 변수 기반 스타일 적용 경험"],
      },
    ],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: [
      {
        name: "React Native",
        level: "intermediate",
        capabilities: [
          "상태/네트워크/내장 센서 활용 APK/IPA 실 서비스 개발 경험",
          "FCM Device Token 발급 및 푸시 메시지 구독 연동 가능",
          "스토어 배포 및 앱 업데이트 대응 경험",
        ],
      },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        level: "intermediate",
        capabilities: [
          "REST API 설계 및 Express 기반 비즈니스 로직 구현",
          "파일 업로드, 인증, 캐싱, 미디어 처리 등 실전 기능 적용",
          "API 성능 최적화 및 DB 쿼리 구조 개선",
        ],
      },
      {
        name: "Express",
        level: "intermediate",
        capabilities: [
          "레이어드 아키텍처 기반 모듈화",
          "middleware 기반 인증/에러 처리/로깅 구성",
          "AWS/DB/외부 API 연동 프로젝트 운영 경험",
        ],
      },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      {
        name: "MariaDB",
        level: "intermediate",
        capabilities: [
          "정규화/인덱싱을 고려한 스키마 설계",
          "복잡한 조인/통계/집계 쿼리 작성",
          "대규모 테이블 성능 병목 개선",
        ],
      },
    ],
  },
  {
    category: "Infra / DevOps",
    icon: "🏗️",
    skills: [
      {
        name: "AWS (EC2 / S3 / CloudFront)",
        level: "intermediate",
        capabilities: [
          "정적/서버 배포 시스템 구성 및 무중단 운영",
          "CloudFront 기반 이미지 최적화 및 응답 성능 개선",
          "IAM, SSL, 보안 그룹 등 운영 실전 구성",
        ],
      },
      {
        name: "Nginx / PM2",
        level: "intermediate",
        capabilities: [
          "리버스 프록시 및 라우팅/압축/캐싱 구성",
          "프로세스 재시작 및 로그 기반 장애 대응",
          "실 서비스 장기 운영 경험",
        ],
      },
      {
        name: "AWS Lambda",
        level: "intermediate",
        capabilities: [
          "Sharp 기반 이미지 리사이징/최적화 파이프라인 구축",
          "S3 → Lambda → CloudFront 흐름으로 비용 절감 및 로딩 개선",
        ],
      },
      {
        name: "Docker",
        level: "basic",
        capabilities: ["서비스 단위 컨테이너화 및 개발 환경 표준화 경험"],
      },
    ],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: [
      {
        name: "RAG",
        level: "intermediate",
        capabilities: [
          "임베딩 기반 검색 → 답변 생성 파이프라인 구축",
          "프롬프트 엔지니어링 및 응답 품질 평가/튜닝",
          "쿼리 비용 절감 및 캐싱 전략 구성",
        ],
      },
      {
        name: "ChromaDB",
        level: "basic",
        capabilities: [
          "로컬 및 서버 환경 벡터 저장소 구축",
          "메타데이터 기반 검색 세분화 및 정밀도 개선",
        ],
      },
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
