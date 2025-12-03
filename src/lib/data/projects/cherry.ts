import { ShowcaseProject } from "@/types";
import { cherryImages } from "./cherry_image";

const {
  main,
  splash,
  main2,
  qr_code,
  menu,
  chatbot,
  embedding,
  map_setting,
  bike,
  appstore,
} = cherryImages;

export const cherryData: ShowcaseProject = {
  type: "showcase",
  category: "신규개발",
  id: "cherry",
  title: "체리 - 공유전기자전거",
  thumbnail: main,
  shortDescription:
    "앱을 통해 전기자전거를 대여·반납·결제할 수 있는 공유 모빌리티 서비스로 사용자 편의성과 운영 효율성을 동시에 강화하기 위해 AI 고객지원 챗봇, 지도 기반 주차 구역 관리, 위치 추적 안정화 등의 핵심 기능을 구현",

  overview: {
    company: "네이처컴바인드",
    period: "2024.06 ~ 2024.08",
    team: "FE 2, BE 1",
    role: "Frontend Developer",
    description: `앱을 통해 전기자전거를 대여·반납·결제할 수 있는 공유 모빌리티 서비스로 사용자 편의성과 운영 효율성을 동시에 강화하기 위해 AI 고객지원 챗봇, 지도 기반 주차 구역 관리, 위치 추적 안정화 등의 핵심 기능을 구현`,
    features: [
      "전기자전거 대여·반납·결제",
      "AI 고객지원 챗봇",
      "쿠폰·패스 등 다양한 할인 기능",
      "지도 기반 주차 구역 관리",
    ],
    techStack: [
      "React Native",
      "React",
      "TypeScript",
      "React Query",
      "Redux toolkit",
      "styled-components",
      "Naver Map API",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS EC2 / S3 / Route 53",
      "Python",
      "FastAPI",
      "ChromaDB",
      "OpenAI API",
    ],
    images: [
      main,
      splash,
      main2,
      qr_code,
      menu,
      chatbot,
      embedding,
      map_setting,
      bike,
      appstore,
    ],
    links: {
      demo: "https://cherry.bike/",
    },
  },

  myContribution: {
    responsibilities: [
      {
        title: "회원가입 및 본인인증 기능 개발",
        details: {
          description: `
  - PASS 기반 본인인증 연동으로 실명 사용자 가입 플로우 구축
  - 인증 실패/재시도/비정상 종료 대비 예외 플로우 설계로 사용자 경험 안정화`.trim(),
        },
      },
      {
        title: "AI 고객지원 챗봇 및 실시간 채팅 시스템 개발",
        details: {
          description: `
  - RAG 기반 자동 응답 챗봇으로 1차 문의 자동 처리
  - WebSocket 기반 실시간 상담 기능으로 운영자 호출 시 1:1 상담 전환
  - 신규 메시지 및 운영자 답변을 FCM 푸시로 사용자에게 실시간 전달`.trim(),
          media: [
            {
              url: chatbot,
              type: "image",
              caption: "챗봇 기능 구현",
            },
            {
              url: embedding,
              type: "image",
              caption: "RAG 기능 구현",
            },
          ],
        },
      },
      {
        title: "지도 기반 주차 구역 관리 기능 개발",
        details: {
          description: `
  - Naver Map 기반 지도 UI에서 관리자들이 주차 금지 구역을 다각형으로 지정할 수 있는 인터페이스 구현
  - 반납 요청 시 자전거 위치가 금지 구역 내에 있으면 반납 불가 처리 → 불법 주차 감소`.trim(),
          media: [
            {
              url: map_setting,
              type: "image",
              caption: "지도 기반 주차 구역 관리 기능",
            },
          ],
        },
      },
      {
        title: "GPS 기반 자전거 위치 추적 안정화",
        details: {
          description: `
  - GPS 모듈 오류 발생 시 사용자 스마트폰 GPS로 자동 전환하는 이중 위치 추적 구조 설계
  - 불안정한 위치값 보정 로직 및 신호 손실 대비 처리로 탐색 성공률 향상`.trim(),
        },
      },
      {
        title: "이벤트 및 공지 자동 노출 기능 개발",
        details: {
          description: `
  - 각 지점 관리자가 작성한 이벤트/공지사항을 앱 내 팝업 형태로 노출
  - 특정 지점/사용자 그룹별 타겟팅 노출을 지원해 참여율 향상`.trim(),
        },
      },
      {
        title: "스토어 배포 및 버전 관리",
        details: {
          description: `
  - Google Play Store 및 Apple App Store 배포 담당
  - 강제 업데이트 기능을 개발해 사용자 단편화 및 버전 호환 이슈 방지`.trim(),
          media: [
            {
              url: appstore,
              type: "image",
              caption: "스토어 배포 및 버전 관리",
            },
          ],
        },
      },
    ],

    problemSolvings: [
      {
        title: "불법 주차 증가로 인한 CS 폭주",
        problem: `
  정해진 주차구역이 없어 자전거가 임의 장소에 방치되는 사례 증가 → 신고 및 CS가 급격히 늘어나는 문제 발생`.trim(),
        solution: `
  - 지도 기반 관리자페이지를 구현해 주차 금지 구역을 다각형으로 자유롭게 지정하도록 지원
  - 반납 시 위치가 금지 구역 내이면 반납 불가 처리하도록 로직 추가`.trim(),
        result: `
  - 불법 주차 신고 문의 대폭 감소
  - 운영 인력의 CS 대응 부담 완화 및 서비스 품질 향상`.trim(),
      },
      {
        title: "GPS 모듈 오류로 인한 자전거 위치 불명확 문제",
        problem: `
  일부 자전거의 GPS 모듈이 불안정하여 지도에서 위치가 표시되지 않거나 잘못 표시되는 문제가 발생 → 분실 및 회수 불가 이슈로 매출 손실 증가`.trim(),
        solution: `
  - 자전거 GPS 이상 감지 시 사용자 스마트폰 GPS로 자동 전환하는 이중 위치 추적 방식 도입
  - 위치값 보정 로직 및 신호 손실 예외 처리를 적용해 위치 추적 안정화`.trim(),
        result: `
  - 분실 자전거 수가 감소해 매출 손실 감소
  - 사용자 위치 탐색 성공률 향상 및 서비스 만족도 개선`.trim(),
      },
      {
        title: "고객센터 문의 폭주로 인한 운영 부담 증가",
        problem: `
  사용자 문의 중 단순 문의 비중이 높아 운영자 대응 시간이 많이 소요되고, 골든타임 내 응답이 어려운 문제가 발생`.trim(),
        solution: `
  - RAG 기반 자동 응답 챗봇을 도입해 빈번한 문의 자동 처리
  - 상담 필요 시 WebSocket으로 운영자 1:1 상담 전환
  - 신규 메시지를 FCM 푸시로 안내해 상담 지연 방지`.trim(),
        result: `
  - 전체 문의 중 다수의 단순 문의가 챗봇으로 처리되어 운영 부담 감소
  - 문의 대응 시간 단축 및 고객 만족도 향상`.trim(),
      },
    ],
  },
};
