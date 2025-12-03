import { MigrationProject } from "@/types";

const mainImg = "/projects/rarelee/rarelee.webp";

export const rareleeData: MigrationProject = {
  type: "migration",
  // ============================================
  // 기본 정보 (카드에 표시됨)
  // ============================================
  id: "rarelee",
  category: "마이그레이션",
  title: "레어리 - 결제시스템 마이그레이션",
  thumbnail: mainImg,
  shortDescription: "토스페이먼츠에서 KG이니시스로 결제 시스템 전환",
  images: [mainImg],

  // ============================================
  // 프로젝트 컨텍스트
  // ============================================
  context: {
    company: "네이처컴바인드",
    period: "2025.04 ~ 2025.05",
    role: "Frontend Developer",
  },

  // ============================================
  // 기술 스택
  // ============================================
  techStack: ["Next.js", "Typescript", "KG inicis"],

  // ============================================
  // 내 기여 & 성과
  // ============================================
  myContribution: {
    // 담당 업무 (기능)
    responsibilities: [
      {
        title: "결제 모듈 마이그레이션",
        details: {
          description: `
          - 기존 토스페이먼츠 결제 모듈을 KG이니시스 결제 모듈로 마이그레이션
          - 웹/모바일 모두 사용 가능하도록 구현 및 테스팅 완료
          - 설정된 브라우저 언어에 맞춰 결제 페이지 언어 변경
          `,
        },
      },
      {
        title: "미비된 다국어 지원 기능 구현",
        details: {
          description: `
          - 고객사의 요청에 따라 일부 페이지의 다국어 기능 구현
          `,
        },
      },
    ],
  },
};
