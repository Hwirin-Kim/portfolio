import { Project } from "@/types";
import { toddlierData } from "./toddlier";
import { dkData } from "./dk";

export const projects: Project[] = [
  toddlierData,
  dkData,

  {
    type: "showcase",
    category: "신규개발",
    id: "task-management",
    title: "Task Management App",
    thumbnail: "/images/projects/task-app/thumbnail.jpg",
    shortDescription: "실시간 협업이 가능한 태스크 관리 애플리케이션",

    overview: {
      company: "개인프로젝트",
      period: "2023.09 ~ 2023.12",
      team: "4명 (FE 2, BE 1, Designer 1)",
      role: "Frontend Developer",
      description: `드래그 앤 드롭 기능과 실시간 협업을 지원하는 모던 태스크 관리 앱입니다.
팀 워크스페이스와 고급 필터링 기능으로 생산성을 높입니다.`,
      features: [
        "드래그 앤 드롭 태스크 관리",
        "실시간 협업 기능",
        "팀 워크스페이스",
        "고급 필터 및 검색",
        "커스텀 태그 및 라벨",
        "활동 타임라인",
      ],
      techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      links: {
        github: "https://github.com",
      },
    },

    myContribution: {
      responsibilities: [
        { title: "드래그 앤 드롭 인터페이스 구현" },
        { title: "Firebase 실시간 데이터 동기화" },
        { title: "반응형 UI/UX 개발" },
        { title: "Framer Motion 애니메이션 적용" },
      ],
      problemSolvings: [
        {
          title: "실시간 업데이트 렌더링 최적화",
          problem: `Firebase 실시간 리스너로 인해 작은 변경에도 전체 컴포넌트가 리렌더링되었습니다.
업데이트당 250회 이상의 리렌더가 발생하여 UI가 버벅였습니다.`,
          solution: `Firestore 쿼리를 최적화하여 필요한 데이터만 구독하도록 변경했습니다.
React.memo와 useMemo를 적절히 적용했습니다.
dependency array를 정확하게 관리하여 불필요한 리렌더를 방지했습니다.`,
          result: `리렌더링 횟수가 250회에서 60회로 76% 감소했습니다.
드래그앤드롭 시에도 부드러운 60fps UX를 달성했습니다.`,
          metrics: {
            before: "250회",
            after: "60회",
            label: "업데이트당 리렌더 횟수",
          },
        },
      ],
    },
  },

  {
    type: "showcase",
    category: "신규개발",
    id: "ai-content-generator",
    title: "AI Content Generator",
    thumbnail: "/images/projects/ai-content/thumbnail.jpg",
    shortDescription: "GPT-4를 활용한 마케팅 콘텐츠 생성 플랫폼",

    overview: {
      company: "개인프로젝트",
      period: "2023.05 ~ 2023.08",
      role: "Full Stack Developer",
      description: `AI를 활용하여 블로그 포스트, 소셜 미디어 콘텐츠, 
광고 카피를 생성하는 플랫폼입니다.`,
      features: [
        "다양한 콘텐츠 타입 지원",
        "톤앤매너 커스터마이징",
        "콘텐츠 템플릿",
        "다양한 포맷으로 내보내기",
        "버전 히스토리",
        "팀 협업 기능",
      ],
      techStack: ["Next.js", "OpenAI API", "Prisma", "shadcn/ui"],
      links: {
        demo: "https://demo.com",
      },
    },

    myContribution: {
      responsibilities: [
        { title: "프론트엔드 및 백엔드 전체 개발" },
        { title: "OpenAI API 연동 및 프롬프트 엔지니어링" },
        { title: "사용자 인터페이스 설계 및 구현" },
        { title: "데이터베이스 스키마 설계" },
      ],
    },
  },

  {
    type: "showcase",
    category: "신규개발",
    id: "portfolio-cms",
    title: "Portfolio CMS",
    thumbnail: "/images/projects/portfolio-cms/thumbnail.jpg",
    shortDescription: "크리에이터를 위한 헤드리스 CMS 플랫폼",

    overview: {
      company: "개인프로젝트",
      period: "2023.02 ~ 2023.04",
      role: "Frontend Developer",
      description: `크리에이티브 전문가들이 자신의 작업물을 쉽게 쇼케이스할 수 있는 
헤드리스 CMS입니다. 아름다운 템플릿과 커스터마이징 기능을 제공합니다.`,
      features: [
        "비주얼 에디터",
        "커스텀 템플릿",
        "SEO 최적화",
        "애널리틱스 통합",
        "커스텀 도메인 지원",
        "이미지 최적화",
      ],
      techStack: ["Next.js", "Sanity", "TypeScript", "Vercel"],
      links: {
        github: "https://github.com",
        demo: "https://demo.com",
      },
    },

    myContribution: {
      responsibilities: [
        { title: "Next.js 기반 프론트엔드 개발" },
        { title: "Sanity CMS 스키마 설계" },
        { title: "템플릿 시스템 구축" },
        { title: "SEO 최적화" },
      ],
    },
  },

  // ============================================
  // Case Study 예시 (참고용 - 실제 데이터로 교체하세요)
  // ============================================
  {
    type: "case-study",
    category: "마이그레이션",
    id: "payment-migration",
    title: "레어리 - 결제 시스템 마이그레이션",
    thumbnail: "/images/projects/payment-migration/thumbnail.jpg",
    shortDescription: "토스페이먼츠에서 KG이니시스로 결제 모듈 전환",

    context: {
      company: "주식회사 레어리",
      period: "2024.03 ~ 2024.04",
      role: "Frontend Developer",
    },

    challenge: {
      title: "토스페이먼츠 → KG이니시스 결제 시스템 마이그레이션",
      background: `레어리의 메인 서비스에서 사용 중이던 토스페이먼츠 결제 시스템을 
KG이니시스로 전환해야 하는 상황이 발생했습니다. 수수료 구조 변경과 
추가 기능 요구사항 때문에 마이그레이션이 필요했습니다.`,

      problem: `- 기존 토스페이먼츠 결제 흐름이 전체 서비스에 깊게 결합되어 있음
- 약 15개의 컴포넌트에서 결제 모듈 사용 중
- 사용자 경험을 해치지 않으면서 무중단 전환 필요
- 기존 결제 데이터와의 호환성 유지`,

      solution: `1. **어댑터 패턴 적용**: 결제 시스템을 추상화하여 교체 가능한 구조로 변경
2. **단계별 마이그레이션**: Feature Flag로 점진적 전환
3. **안전장치 구축**: 롤백 대비 기존 코드 유지, 에러 트래킹 강화
4. **테스트 강화**: E2E 테스트로 모든 결제 플로우 검증`,

      result: `- 무중단으로 결제 시스템 전환 완료
- 결제 성공률 99.2% → 99.7%로 개선
- 평균 결제 처리 시간 15% 단축
- 월 결제 수수료 약 20% 절감`,

      techStack: ["React", "TypeScript", "KG이니시스 API", "Jest"],

      metrics: {
        before: "99.2%",
        after: "99.7%",
        label: "결제 성공률",
      },
    },
  },
];
