import { Project } from "@/types";

export const projects: Project[] = [
  {
    type: "showcase",
    category: "신규개발",
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    thumbnail: "/images/projects/ecommerce/thumbnail.jpg",
    shortDescription: "실시간 재고 관리와 결제 시스템이 통합된 이커머스 플랫폼",

    overview: {
      company: "개인프로젝트",
      period: "2024.01 ~ 2024.03",
      team: "6명 (FE 2, BE 2, Designer 2)",
      role: "Frontend Developer",
      description: `Next.js 기반의 종합 이커머스 플랫폼으로, 실시간 재고 관리, 
결제 연동, 관리자 대시보드를 포함합니다. SSR과 ISR을 활용하여 
성능을 최적화했으며, 사용자 경험을 최우선으로 설계했습니다.`,
      features: [
        "실시간 재고 추적 시스템",
        "Stripe 결제 연동",
        "관리자 대시보드 및 분석",
        "Algolia 기반 상품 검색",
        "이메일 알림 시스템",
        "완벽한 반응형 디자인",
      ],
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],

      // 프로젝트 대표 이미지들 (캐러셀용)
      images: [
        "/images/projects/ecommerce/screenshot-1.jpg",
        "/images/projects/ecommerce/screenshot-2.jpg",
        "/images/projects/ecommerce/screenshot-3.jpg",
      ],

      links: {
        github: "https://github.com",
        demo: "https://demo.com",
      },
    },

    myContribution: {
      responsibilities: [
        {
          title: "프론트엔드 전체 아키텍처 설계 및 구현",
          details: {
            description: `Next.js 13의 App Router를 활용하여 SEO에 최적화된 구조를 설계했습니다.
Server Components와 Client Components를 적절히 분리하여 성능을 극대화했습니다.`,
            images: ["/images/projects/ecommerce/architecture.jpg"],
          },
        },
        {
          title: "상품 목록 및 상세 페이지 개발",
          details: {
            description: `무한 스크롤, 필터링, 정렬 기능을 구현했습니다.
상품 상세 페이지에는 이미지 줌, 리뷰 시스템, 연관 상품 추천 기능을 추가했습니다.`,
          },
        },
        {
          title: "장바구니 및 결제 프로세스 구현",
        },
        {
          title: "관리자 대시보드 개발",
        },
      ],
      achievements: [
        {
          title: "초기 로딩 성능 개선",
          description:
            "코드 스플리팅, 이미지 최적화, SSR 적용으로 전환율 개선에 기여",
          images: ["/images/projects/ecommerce/lighthouse.jpg"],
          metrics: {
            before: "3.5초",
            after: "1.2초",
            label: "초기 로딩 시간",
          },
        },
      ],
      challenges: [
        {
          problem: "초기 로딩 속도가 느려 전환율이 낮았음",
          solution:
            "Next.js의 Image 최적화, 동적 import, SSR을 활용하여 critical content를 우선 렌더링",
          result: "초기 로딩 시간 66% 단축 및 전환율 향상",
        },
        {
          problem: "대량의 상품 데이터 렌더링 시 성능 저하",
          solution:
            "가상 스크롤링(React Window) 도입 및 데이터 페이지네이션 최적화",
          result: "10,000개 상품도 부드럽게 스크롤 가능",
        },
      ],
    },
  },

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
      achievements: [
        {
          title: "렌더링 성능 최적화",
          description: "Firebase 리스너 최적화와 React.memo 적용",
          metrics: {
            before: "250회",
            after: "60회",
            label: "업데이트당 리렌더 횟수",
          },
        },
      ],
      challenges: [
        {
          problem: "실시간 업데이트로 인한 과도한 리렌더링",
          solution:
            "Firestore 쿼리 최적화, React.memo, 적절한 dependency array 사용",
          result: "리렌더링 76% 감소 및 부드러운 UX 달성",
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
