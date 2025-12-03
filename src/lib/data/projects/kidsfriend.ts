import { ShowcaseProject } from "@/types";

export const kidsfriendData: ShowcaseProject = {
  type: "showcase",
  category: "신규개발",
  id: "kidsfriend",
  title: "키즈프렌드",
  thumbnail: "",
  shortDescription:
    "어린이를 대상으로 매일 새로운 뉴스를 제공하고 사용자가 직접 그림을 그리거나 텍스트 프롬프트를 입력하면 AI가 고품질 이미지로 변환하여 생성해주는 서비스",

  overview: {
    company: "네이처컴바인드",
    period: "2024.08 ~ 2024.09",
    team: "Full Stack 1",
    role: "Full Stack Developer",
    description: `어린이를 대상으로 매일 새로운 뉴스를 제공하고 사용자가 직접 그림을 그리거나 텍스트 프롬프트를 입력하면 AI가 고품질 이미지로 변환하여 생성해주는 서비스`,
    features: [
      "매일 새로운 어린이 뉴스 제공",
      "그림 그리기 및 고품질 AI 이미지 생성",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "React Query",
      "Redux toolkit",
      "Canvas API",
      "styled-components",
      "Python",
      "FastAPI",
      "BeautifulSoup",
      "MariaDB",
      "AWS EC2",
      "Stable Diffusion",
    ],
  },

  myContribution: {
    responsibilities: [
      {
        title: "AI 그림 생성 기능 개발",
        details: {
          description: `
  - Canvas API 기반 모바일 그림판을 구현해 어린 사용자가 직접 그림을 그릴 수 있는 UI 제작
  - Stable Diffusion API와 연동하여 사용자가 그린 이미지를 고품질 일러스트로 변환하는 파이프라인 개발
  - 텍스트 프롬프트 입력 시 스타일·내용·배경 등을 반영해 이미지 생성 가능하도록 확장`.trim(),
        },
      },
      {
        title: "어린이 맞춤형 뉴스 생성 기능 개발",
        details: {
          description: `
  - Python 기반 크롤러(requests + BeautifulSoup)로 분야별 최신 뉴스를 매일 자동 수집
  - OpenAI API를 활용해 기사를 어린이 눈높이로 재작성하고, 유해 키워드(NSFW) 필터링 처리 로직 구현`.trim(),
        },
      },
      {
        title: "뉴스 자동 생성 및 배포 파이프라인 구축",
        details: {
          description: `
  - CRON 스케줄러 기반으로 매일 오전 5시에 뉴스 수집 → 재작성 → 이미지 생성 → 서비스 반영까지 자동화
  - 신규 뉴스·일러스트가 별도 운영 개입 없이 매일 갱신되도록 콘텐츠 자동 업데이트 구조 설계`.trim(),
        },
      },
    ],
  },
};
