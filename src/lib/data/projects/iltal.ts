import { ShowcaseProject } from "@/types";
import { iltalImages } from "./iltal_image";

const {
  web_main,
  web_main_rank,
  web_theme_list,
  web_theme_detail,
  web_company_list,
  web_company_detail,
  web_comment,
  web_mypage,
  web_mypage_history,
  web_mypage_setting,
  mobile_main,
  mobile_theme_filter,
  mobile_theme_detail,
  mobile_company_detail,
  mobile_mypage,
} = iltalImages;

export const iltalData: ShowcaseProject = {
  type: "showcase",
  category: "신규개발",
  id: "iltal",
  title: "일탈 - 일상의 방탈출",
  thumbnail: web_main,
  shortDescription:
    "서울 소재의 방탈출 업체 및 테마를 손쉽게 찾아볼 수 있는 서비스",

  overview: {
    company: "사이드프로젝트",
    period: "2022.11 ~ 2022.12",
    team: "FE 3, BE 3 Designer 1",
    role: "Frontend Developer",
    description: `서울 소재의 방탈출 업체 및 테마를 손쉽게 찾아볼 수 있는 서비스로 업체별, 테마별로 필터를 걸어 원하는 정보를 쉽게 찾을 수 있는 사이트`,
    features: [
      "방탈출 업체 및 테마 모아보기 및 검색",
      "업체 및 테마의 상세 정보 제공",
      "예약 일정 조회",
      "사용자 후기기반 뱃지 획득 시스템 및 랭킹 기능",
      "평점기능을 통한 업체 및 테마 비교",
      "모바일 최적화 UI",
    ],
    techStack: [
      "React",
      "TypeScript",
      "React Query",
      "Recoil",
      "styled-components",
      "Kakao Map API",
      "Kakao OAuth",
      "AWS EC2 / S3 / Route 53 / CloudFront",
    ],
    images: [
      web_main,
      web_main_rank,
      web_theme_list,
      web_theme_detail,
      web_company_list,
      web_company_detail,
      web_comment,
      web_mypage,
      web_mypage_history,
      web_mypage_setting,
      mobile_main,
      mobile_theme_filter,
      mobile_theme_detail,
      mobile_company_detail,
      mobile_mypage,
    ],
    links: {
      demo: "https://il-tal.kr/",
      github: "https://github.com/Hwirin-Kim/il-tal-refactoring",
    },
  },

  myContribution: {
    responsibilities: [
      {
        title: "테마 필터링 UI 개발",
        details: {
          description: `
  - 필터 UI를 통해 사용자가 원하는 테마를 손쉽게 찾을수 있도록 구현`.trim(),
          media: [
            {
              url: web_theme_list,
              type: "image",
              caption: "테마 필터링 UI",
            },
          ],
        },
      },
      {
        title: "좋아요 및 댓글 기능 개발",
        details: {
          description: `
  - 업체 혹은 테마에 좋아요 기능 구현
  - 테마에 댓글 및 해당 테마 평점 기능 구현`.trim(),
          media: [
            {
              url: web_comment,
              type: "image",
              caption: "댓글 기능",
            },
          ],
        },
      },
      {
        title: "카카오 지도 API 연동",
        details: {
          description: `
  - 카카오 지도 API를 통해 업체의 위치를 확인할 수 있도록 구현`.trim(),
        },
      },
    ],

    problemSolvings: [
      {
        title: "기존 Javascript 코드를 Typescript로 리팩토링",
        problem:
          `고도화 작업 진행 중 Javascript로 작성되어 있어 타입 안정성이 떨어지고 개발 중 버그가 자주 발생`.trim(),
        solution: `
  - Javascript를 Typescript로 리팩토링하여 타입 안정성을 높이고 개발 중 버그를 줄이도록 함`.trim(),
        result: `
  - 타입 안정성이 높아지고 DX가 개선되어 단기간에 기능개선 및 모바일 UI 개발을 진행할 수 있게 되었음`.trim(),
      },
      {
        title: "좋아요 반응속도 개선",
        problem:
          `좋아요를 누르면 데이터가 바로 반영되지 않고, 서버의 응답이 도달한 뒤 반영되어 UX가 좋지 않은 문제 존재`.trim(),
        solution: `
  - optimistic update 방식으로 서버 응답에 무관하게 사용자 반응을 먼저 처리하도록 함
  - 만약 서버 에러 혹은 네트워크 에러 발생 시 롤백 처리
  `.trim(),
        result: `
  - 기존 약 80ms 정도가 소요되던 좋아요 반응속도가 즉시 반영되어 사용자 경험을 향상시킬 수 있었음`.trim(),
      },
      {
        title:
          "필터·정렬·탭 상태 유지 기능 개선 (URL QueryString 기반 상태 보존)",
        problem: `
        - 필터·정렬·탭 등 페이지 상태가 브라우저 새로고침 시 초기화되어 사용자가 매번 조건을 다시 선택해야 하는 UX 문제 발생 → 탐색 중 이탈 증가 및 사용성 저하
        - URL로 필터링된 페이지를 공유하지 못하는 문제 존재`.trim(),
        solution: `
        - 기존 컴포넌트 내부 상태 관리 방식을 URL QueryString 기반 상태 관리로 전환
        - 페이지 진입·뒤로가기·북마크 공유 시 동일한 필터 상태로 재진입 가능하도록 설계`.trim(),
        result: `
        - 새로고침·뒤로가기·탭 이동 후에도 사용자가 설정한 필터 유지
        - 평균 탐색 시간 증가 및 UX 개선으로 기능 활용률 향상`.trim(),
      },
      {
        title: "모바일 최적화 UI 개발",
        problem:
          `모바일 친화적이지 않은 UI로 모바일에서 사용하기 어려운 문제 존재`.trim(),
        solution: `
  - 반응형 UI 개발을 통해 모바일에서 사용하기 쉽도록 함`.trim(),
        result: `
  - 모바일에서 사용하기 쉽도록 함으로써 사용자 이탈을 줄이고 서비스 만족도를 향상시킬 수 있었음`.trim(),
      },
    ],
  },
};
