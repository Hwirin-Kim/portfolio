import { ShowcaseProject } from "@/types";

export const dkData: ShowcaseProject = {
  type: "showcase",
  category: "신규개발",
  id: "dk",
  title: "DK-EDMS",
  thumbnail: "",
  shortDescription:
    "필리핀 지방정부와 한국 지방정부 간의 해외 노동자 송출 계약을 관리하기 위한 B2B SaaS 솔루션으로 노동자·한국 지자체·필리핀 지자체 간의 삼자 계약서를 온라인에서 작성·검토·승인·보관할 수 있도록 함",

  overview: {
    company: "SI프로젝트",
    period: "2024.08 ~ 2024.09",
    team: "Full Stack 1",
    role: "Full Stack Developer",
    description: `필리핀 지방정부와 한국 지방정부 간의 해외 노동자 송출 계약을 관리하기 위한 B2B SaaS 솔루션으로 노동자·한국 지자체·필리핀 지자체 간의 삼자 계약서를 온라인에서 작성·검토·승인·보관할 수 있도록 함`,
    features: [
      "전자 계약서 작성·서명",
      "다국어/기관별 계약서 자동 생성",
      "계약 상태·이력 관리",
      "기관 간 문서 공유·승인",
      "권한 기반 열람/다운로드/승인 제어",
      "pdf/docx등 원하는 확장자로 다운로드",
    ],
    techStack: [
      "React",
      "TypeScript",
      "React Query",
      "Redux toolkit",
      "styled-components",
      "Node.js",
      "Express",
      "MariaDB",
      "AWS EC2",
    ],

    // links: {},
  },

  myContribution: {
    responsibilities: [
      {
        title: "전자 계약 시스템 전체 아키텍처 설계 및 개발",
        details: {
          description: `
  - 고객 요구사항 분석 → 기능정의서 작성 → 고객사 컨펌까지 전 과정 단독 수행
  - 프론트·백엔드 아키텍처를 기획부터 구현까지 단독 진행
  - 필리핀 지방정부, 한국 지자체, 노동자 3자 간 사용자 흐름과 권한 구조를 설계`.trim(),
        },
      },
      {
        title: "모바일 전자서명(PWA) 기반 계약서 작성 기능 개발",
        details: {
          description: `
  - 태블릿 최적화 UI에서 노동자가 계약 내용을 입력하고 서명까지 진행할 수 있는 전자계약 플로우 구현
  - 터치 기반 서명 데이터 저장 및 계약서에 자동 반영
  - 네트워크 환경이 열악한 현장에서도 안정적으로 동작하도록 UX 개선`.trim(),
        },
      },
      {
        title: "다국어 / 기관별 계약서 자동 생성 기능 개발",
        details: {
          description: `
  - 계약 입력 데이터를 JSON 스키마로 저장하고, 기관별·언어별 템플릿(DOCX/PDF)에 자동 매핑되는 로직 구현
  - 계약 1회 작성으로 영문/한글·기관별 제출 문서가 자동 생성되도록 설계
  - 템플릿 변경 시 전체 문서 형식이 일괄 반영되는 구조 확보`.trim(),
        },
      },
      {
        title: "문서 포맷 변환 및 다운로드 기능 개발",
        details: {
          description: `
  - 계약서를 DOCX, PDF 등 다양한 제출 포맷으로 실시간 변환 및 다운로드 지원
  - 필리핀 지방정부 및 한국 지자체의 제출 요건 차이를 고려한 문서 호환성 확보`.trim(),
        },
      },
      {
        title: "계약 검색·관리·이력 시스템 개발",
        details: {
          description: `
  - 계약자·지역·기관별 고급 검색 및 필터링 지원
  - 다중 선택 후 일괄 다운로드 기능 제공`.trim(),
        },
      },
      {
        title: "AWS 기반 클라우드 인프라 구축 및 운영",
        details: {
          description: `
  - AWS EC2 기반 서비스 배포 및 운영 자동화
  - Nginx Reverse Proxy 및 SSL 적용으로 안정성과 보안 강화`.trim(),
        },
      },
    ],

    // problemSolvings: [
    //   {
    //     title: "대용량 이미지 사용으로 인한 페이지 로딩 성능 문제",
    //     problem:
    //       `도서 이미지가 한 장당 약 10MB 이상의 크기를 가지고 있어 페이지 로딩 성능이 크게 저하되는 문제 발생`.trim(),
    //     solution:
    //       `- CloudFront + Lambda@Edge 기반 이미지 온디맨드 최적화 파이프라인 구축
    //     - Sharp로 요청 시점 리사이징 및 WebP 변환 수행 → 최초 1회만 처리
    //     - 최적화 후 S3에 저장하고 CloudFront 캐시와 연동해 재요청 시 즉시 응답
    //     - 디바이스/해상도별 필요한 사이즈만 생성해 저장 공간 및 트래픽 비용 절감
    //     - 코드 변경 없이 URL 파라미터(?w=800 등)만으로 다양한 이미지 규격 지원
    //     `.trim(),
    //     result:
    //       `- 평균 이미지 크기 200KB로 축소, 로딩 시간 3초 → 80ms로 단축 (약 37배 성능 개선)
    //     - CloudFront 캐싱 적용으로 대규모 사용 시에도 안정적인 서비스 제공
    //       `.trim(),
    //   },
    //   {
    //     title: "Android 태블릿에서 말하기 기능 사용 불가 문제 해결",
    //     problem:
    //       `Android 태블릿에서 말하기 기능 사용 시 마이크 권한이 있음에도 불구하고 녹음이 불가능한 문제 발생`.trim(),
    //     solution:
    //       `- 원인은 Android chrome이 하나의 마이크 스트림을 여러곳에서 사용하려고 할 때 한 번만 연결되고 다른 연결은 무시됨
    //     - 하지만 해당 기능은 soundwave를 그려주는 기능과 webSpeech API를 사용하는 두 부분에서 마이크 스트림을 연결하려 함
    //     - 따라서 Android 태블릿을 사용하는 경우엔 soundwave를 비활성화 시켜 webSpeech API가 마이크 스트림을 점유할 수 있도록 수정하여 해결함
    //       `.trim(),
    //     result:
    //       `일부 가맹 학원의 학습 태블릿 (약 30대)에서 말하기 기능 정상 사용 확인`.trim(),
    //   },
    //   {
    //     title: "도서 업로드 UX 개선",
    //     problem:
    //       `도서 업로드가 한 문장씩 업로드 하도록 설계 되어있어 업로드 시간이 길어 사용자 경험이 저하되는 문제 발생`.trim(),
    //     solution:
    //       `고객사가 이용하는 도서 엑셀 포맷을 분석하여 엑셀 업로드 시 자동으로 문장이 적용 되도록 수정
    //     `.trim(),
    //     result:
    //       `기존 10분 이상 소요되던 도서 업로드 시간을 1분 이내로 크게 단축`.trim(),
    //   },
    // ],
  },
};
