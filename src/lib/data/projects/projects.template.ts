import { ShowcaseProject } from "@/types";

/**
 * 🎯 Showcase 프로젝트 추가 템플릿
 *
 * A to Z 참여한 프로젝트용
 *
 * 이 파일을 복사해서 projects.ts에 추가하세요!
 */

export const showcaseProjectTemplate: ShowcaseProject = {
  type: "showcase",
  // ============================================
  // 기본 정보 (카드에 표시됨)
  // ============================================
  id: "unique-project-id", // 고유 ID (URL에 사용)

  // 카테고리 선택 (하나만 선택)
  category: "신규개발", // "신규개발" | "유지보수" | "리팩토링" | "마이그레이션" | "성능개선" | "기능추가"

  title: "프로젝트 제목",
  thumbnail: "/images/projects/프로젝트폴더명/thumbnail.jpg",
  shortDescription: "카드에 표시될 짧은 설명 (1-2줄)",

  // 추가 이미지 (선택사항 - 모달에서 슬라이드로 표시)
  images: [
    "/images/projects/프로젝트폴더명/screen1.jpg",
    "/images/projects/프로젝트폴더명/screen2.jpg",
  ],

  // ============================================
  // 탭1: 프로젝트 소개
  // ============================================
  overview: {
    company: "개인프로젝트", // 또는 "네이처컴바인드", "주식회사 OO" 등
    period: "2024.01 ~ 2024.03",
    team: "5명 (FE 2, BE 2, Designer 1)", // 선택사항
    role: "Frontend Developer",

    description: `
프로젝트에 대한 상세한 설명을 작성하세요.
여러 줄로 작성 가능합니다.

- 어떤 문제를 해결하는 서비스인가요?
- 주요 타겟은 누구인가요?
- 프로젝트의 목표는 무엇인가요?
    `.trim(),

    features: ["주요 기능 1", "주요 기능 2", "주요 기능 3"],

    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],

    // 프로젝트 이미지 (선택사항 - 캐러셀로 표시됨)
    images: [
      "/images/projects/프로젝트폴더명/screenshot-1.jpg",
      "/images/projects/프로젝트폴더명/screenshot-2.jpg",
      "/images/projects/프로젝트폴더명/screenshot-3.jpg",
    ],

    links: {
      github: "https://github.com/username/repo",
      demo: "https://demo-url.com",
      notion: "https://notion.so/...", // 선택사항
    },
  },

  // ============================================
  // 탭2: 내 기여 & 성과
  // ============================================
  myContribution: {
    // 내가 담당한 부분 (클릭하면 펼쳐짐)
    responsibilities: [
      {
        title: "전체 프론트엔드 설계 및 개발",
        details: {
          description: `상세한 설명을 작성하세요.
무엇을 어떻게 개발했는지 구체적으로 작성하면 좋습니다.`,
          images: ["/images/projects/프로젝트폴더명/responsibility-1.jpg"], // 선택사항
        },
      },
      {
        title: "반응형 UI/UX 구현",
        // details 없이 제목만 있어도 OK
      },
      {
        title: "API 연동 및 상태 관리",
        details: {
          description: "상세 설명...",
          // images 없이 설명만 있어도 OK
        },
      },
      {
        title: "배포 및 CI/CD 구축",
      },
    ],

    // 성능개선 & 문제해결 (선택사항)
    problemSolvings: [
      {
        title: "페이지 로딩 성능 개선",
        problem: `초기 로딩 시간이 3.5초로 느려 사용자 이탈률이 높았습니다.
번들 사이즈가 커서 모바일 환경에서 특히 느렸습니다.`,
        solution: `코드 스플리팅과 dynamic import를 적용했습니다.
이미지 최적화(WebP 변환, lazy loading)를 구현했습니다.
Critical CSS를 인라인으로 처리하여 초기 렌더링을 빠르게 했습니다.`,
        result: `초기 로딩 시간이 3.5초에서 1.2초로 66% 단축되었습니다.
Lighthouse Performance 점수가 45점에서 92점으로 향상되었습니다.`,
        metrics: {
          before: "3.5초",
          after: "1.2초",
          label: "초기 로딩 시간",
        },
      },
      {
        title: "대량 데이터 렌더링 최적화",
        problem: `10,000개 이상의 아이템을 렌더링할 때 스크롤이 버벅였습니다.
메모리 사용량이 급격히 증가하여 저사양 기기에서 문제가 발생했습니다.`,
        solution: `React Virtualized를 도입하여 가상 스크롤링을 구현했습니다.
화면에 보이는 아이템만 렌더링하도록 최적화했습니다.`,
        result: `10,000개 아이템도 60fps로 부드럽게 스크롤됩니다.
메모리 사용량이 80% 감소했습니다.`,
      },
    ],
  },
};

// ============================================
// 📝 작성 가이드
// ============================================

/*

1. 이미지 준비
   - public/images/projects/ 폴더에 프로젝트별 폴더 생성
   - thumbnail.jpg (필수): 카드에 표시될 대표 이미지
   - screen1.jpg, screen2.jpg (선택): 추가 스크린샷

2. ID 작성
   - 소문자와 하이픈만 사용 (예: "my-awesome-project")
   - 고유해야 함 (중복 불가)

3. 짧은 설명 (shortDescription)
   - 1-2줄로 핵심만
   - 카드에서 눈에 띄게

4. 프로젝트 설명 (overview.description)
   - 3-5 문단 정도
   - 프로젝트의 배경, 목표, 결과 포함

5. 담당 업무 (responsibilities)
   - 구체적으로 작성
   - "전체", "일부" 같은 애매한 표현 지양

6. 성과 (achievements)
   - 수치화할 수 있으면 최고!
   - Before/After로 개선 효과 강조

7. 기술적 도전 (challenges)
   - 단순 기능 구현이 아닌 "해결한 문제"에 초점
   - 어떤 생각과 과정으로 해결했는지 설명

*/
