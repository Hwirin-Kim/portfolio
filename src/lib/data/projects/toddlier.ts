import { ShowcaseProject } from "@/types";
import { toddlierImages } from "./toddlier_image";

const {
  main,
  book1,
  book2,
  complete,
  media_detail,
  media,
  player,
  quiz,
  record,
  speak_mic,
  speak,
  tutor,
  wordbook,
} = toddlierImages;

export const toddlierData: ShowcaseProject = {
  type: "showcase",
  category: "신규개발",
  id: "toddlier",
  title: "토들리에",
  thumbnail: main,
  shortDescription:
    "TTS, 퀴즈, 단어장, 녹음 기능이 결합된 인터랙티브 영어 학습 플랫폼",

  overview: {
    company: "SI프로젝트",
    period: "2024.09 ~ 2024.12",
    team: "FE 2, BE 1, Designer 1",
    role: "Frontend Developer",
    description: `React 기반의 어린이를 대상으로 하는 디지털 영어 도서관 플랫폼으로 인터랙티브한 디지털 도서로 영어를 학습하고 각종 학습기능 및 AI 튜터와 함께 영어를 공부할 수 있는 서비스`,
    features: [
      "영어 원서 인터랙티브 리딩",
      "TTS 기반 문장/단어 재생",
      "단어장 · 퀴즈 · 음성 녹음 기능",
      "책/단어/퀴즈별 학습 진도 및 통계",
      "학부모용 학습 리포트",
      "모바일/태블릿 최적화 UI",
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
      "AWS EC2 / S3 / CloudFront / Route 53 / Lambda",
    ],

    // 프로젝트 이미지 슬라이드
    images: [
      main,
      book1,
      book2,
      complete,
      media_detail,
      media,
      player,
      quiz,
      record,
      speak_mic,
      speak,
      tutor,
      wordbook,
    ],

    links: {
      demo: "https://toddlier.co.kr/",
    },
  },

  myContribution: {
    responsibilities: [
      {
        title: "책 읽기 뷰어 전체 UI/UX 설계 및 개발",
        details: {
          description: `
  - 책 넘김 기반의 화면 구성, 챕터 이동, 페이지 이동, 책 진행률 표시를 설계
  - 텍스트, 이미지, TTS, 퀴즈, 단어장 기능이 한 화면에서 자연스럽게 동작하도록 인터랙션을 설계`.trim(),
          media: [
            {
              url: "/projects/toddlier/video/toddlier_bookflip.mp4",
              type: "video",
              caption: "책 넘김 기능 시연",
              poster: book2,
            },
          ],
        },
      },
      {
        title: "TTS 및 오디오 재생 기능 개발",
        details: {
          description: `
  문장별/단어별 TTS 재생, 재생 위치 동기화, 반복 재생, 책 진행과 TTS 진행이 동기화되는 구조로 구현`.trim(),
        },
      },
      {
        title: "AI 발음 분석 기능 개발",
        details: {
          description: `
            Azure AI의 SpeechRecognizer를 활용하여 학습자의 발음을 분석하고 OpenAI API 를 활용하여 부족한 발음 연습 방법 피드백 기능 개발
            `.trim(),
        },
      },
      {
        title: "단어장 및 퀴즈 시스템 개발",
        details: {
          description:
            `도서에 등장하는 단어를 학습하고 퀴즈로 학습율을 평가하는 기능 개발
            `.trim(),
        },
      },
      {
        title: "챗봇형 말하기 AI 튜터 개발",
        details: {
          description:
            `- 각 도서 콘텐츠를 기반으로 학습자의 이해도를 점검하고 영어 말하기를 유도하는 대화형 튜터 기능 신규 개발
- ElevenLabs TTS를 적용하여 자연스러운 영어 발음을 제공, 학습자가 반복 청취 및 발음 교정 가능
- 학습자가 선택한 난이도(Level)에 따라 질문의 난이도 및 말하기 속도를 동적으로 조절하여 맞춤형 학습 경험을 제공
            `.trim(),
        },
      },
      {
        title: "커스텀 플레이어 개발",
        details: {
          description:
            `네이버 클라우드 Live Station에서 제공하는 .m3u8 스트리밍을 hls.js 기반으로 커스터마이징하여 일시정지, 배속, AI튜터 호출 등 기능을 통합한 플레이어 개발`.trim(),
        },
      },
    ],

    problemSolvings: [
      {
        title: "대용량 이미지 사용으로 인한 페이지 로딩 성능 문제",
        problem:
          `도서 이미지가 한 장당 약 10MB 이상의 크기를 가지고 있어 페이지 로딩 성능이 크게 저하되는 문제 발생`.trim(),
        solution:
          `- CloudFront + Lambda@Edge 기반 이미지 온디맨드 최적화 파이프라인 구축
        - Sharp로 요청 시점 리사이징 및 WebP 변환 수행 → 최초 1회만 처리
        - 최적화 후 S3에 저장하고 CloudFront 캐시와 연동해 재요청 시 즉시 응답
        - 디바이스/해상도별 필요한 사이즈만 생성해 저장 공간 및 트래픽 비용 절감
        - 코드 변경 없이 URL 파라미터(?w=800 등)만으로 다양한 이미지 규격 지원
        `.trim(),
        result:
          `- 평균 이미지 크기 200KB로 축소, 로딩 시간 3초 → 80ms로 단축 (약 37배 성능 개선)
        - CloudFront 캐싱 적용으로 대규모 사용 시에도 안정적인 서비스 제공
          `.trim(),
      },
      {
        title: "Android 태블릿에서 말하기 기능 사용 불가 문제 해결",
        problem:
          `Android 태블릿에서 말하기 기능 사용 시 마이크 권한이 있음에도 불구하고 녹음이 불가능한 문제 발생`.trim(),
        solution:
          `- 원인은 Android chrome이 하나의 마이크 스트림을 여러곳에서 사용하려고 할 때 한 번만 연결되고 다른 연결은 무시됨
        - 하지만 해당 기능은 soundwave를 그려주는 기능과 webSpeech API를 사용하는 두 부분에서 마이크 스트림을 연결하려 함
        - 따라서 Android 태블릿을 사용하는 경우엔 soundwave를 비활성화 시켜 webSpeech API가 마이크 스트림을 점유할 수 있도록 수정하여 해결함
          `.trim(),
        result:
          `일부 가맹 학원의 학습 태블릿 (약 30대)에서 말하기 기능 정상 사용 확인`.trim(),
      },
      {
        title: "도서 업로드 UX 개선",
        problem:
          `도서 업로드가 한 문장씩 업로드 하도록 설계 되어있어 업로드 시간이 길어 사용자 경험이 저하되는 문제 발생`.trim(),
        solution:
          `고객사가 이용하는 도서 엑셀 포맷을 분석하여 엑셀 업로드 시 자동으로 문장이 적용 되도록 수정
        `.trim(),
        result:
          `기존 10분 이상 소요되던 도서 업로드 시간을 1분 이내로 크게 단축`.trim(),
      },
    ],
  },
};
