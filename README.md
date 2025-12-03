# 김휘린 포트폴리오

개인 포트폴리오 웹사이트입니다.

## 🔗 배포 링크

**[https://hwirin-kim.github.io/portfolio/](https://hwirin-kim.github.io/portfolio/)**

## 🚀 기술 스택

| 분류           | 기술                         |
| -------------- | ---------------------------- |
| **Framework**  | Next.js 15 (App Router)      |
| **Language**   | TypeScript                   |
| **Styling**    | Tailwind CSS                 |
| **Animation**  | Framer Motion                |
| **Icons**      | Lucide React                 |
| **Deployment** | GitHub Pages (Static Export) |

## 📁 프로젝트 아키텍처

```
src/
├── app/                      # 페이지 라우트 (App Router)
│   ├── page.tsx              # 랜딩 페이지
│   ├── about/                # About 페이지
│   ├── projects/             # Projects 페이지
│   ├── skills/               # Skills 페이지
│   └── contact/              # Contact 페이지
│
├── components/               # 재사용 가능한 컴포넌트
│   ├── layout/               # Header, Footer, ScrollReset
│   ├── animations/           # 애니메이션 컴포넌트
│   │   ├── ScrollReveal      # 스크롤 기반 등장 애니메이션
│   │   ├── MagneticButton    # 마그네틱 효과 버튼
│   │   ├── SpotlightCard     # 스포트라이트 카드 효과
│   │   ├── TiltCard          # 3D 틸트 효과
│   │   └── TypewriterEffect  # 타이핑 효과
│   ├── projects/             # 프로젝트 관련 컴포넌트
│   ├── skills/               # 스킬 관련 컴포넌트
│   ├── about/                # About 관련 컴포넌트
│   ├── contact/              # Contact 관련 컴포넌트
│   ├── common/               # 공통 컴포넌트 (CTASection 등)
│   ├── ui/                   # UI 컴포넌트 (MediaViewer, Accordion 등)
│   └── chatbot/              # AI 챗봇 컴포넌트
│
├── lib/
│   ├── animations/           # 애니메이션 variants, hooks
│   ├── data/                 # 정적 데이터
│   │   ├── projects/         # 프로젝트 데이터
│   │   ├── about.ts          # About 페이지 데이터
│   │   ├── skills.ts         # 스킬 데이터
│   │   └── contact.ts        # 연락처 데이터
│   └── utils/                # 유틸리티 함수
│       ├── cn.ts             # 클래스명 병합
│       └── path.ts           # 정적 에셋 경로 처리
│
├── styles/
│   └── globals.css           # 글로벌 CSS + 색상 토큰
│
└── types/
    └── index.ts              # TypeScript 타입 정의
```

### 페이지별 특징

| 페이지       | 설명                                             |
| ------------ | ------------------------------------------------ |
| **Home**     | Hero 섹션, 타이핑 효과, 배경 글로우 애니메이션   |
| **About**    | 스크롤텔링 스타일, 개발 철학, 경력/교육 타임라인 |
| **Projects** | 프로젝트 카드, 상세 모달, 담당 업무/성과 표시    |
| **Skills**   | 기술 스택 시각화, 레벨 가이드, 도구 그리드       |
| **Contact**  | 연락처 카드, FAQ 섹션                            |

## 👤 Author

**김휘린**

- GitHub: [@Hwirin-Kim](https://github.com/Hwirin-Kim)
- Email: [kimhuirin@gmail.com](mailto:kimhuirin@gmail.com)
- Blog: [huirin.tistory.com](https://huirin.tistory.com/)
