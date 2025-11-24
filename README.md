# Portfolio Website

고급 인터랙션과 애니메이션이 특징인 개발자 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static Export 지원

## ✨ 주요 기능

### 페이지
- **Landing**: Hero 섹션, 타이핑 효과, 배경 글로우 애니메이션
- **About**: 스크롤텔링 스타일의 자기소개, 철학, 성장 타임라인
- **Projects**: 프로젝트 쇼케이스, 모달, Technical Insight
- **Skills**: 기술 스택 시각화, 스킬 바 애니메이션
- **Contact**: 연락처 정보, FAQ

### 애니메이션
- Scroll Reveal
- Text Reveal (단어별 fade-up)
- Typewriter Effect
- Magnetic Button
- Tilt Card Effect
- Modal Transitions
- Progress Bar Animations

### 컴포넌트
- 재사용 가능한 애니메이션 컴포넌트
- 반응형 네비게이션
- 프로젝트 모달 시스템
- AI 챗봇 플로팅 UI (추후 LLM 연동 가능)

## 🎨 디자인 시스템

### 컬러 팔레트
- Background: #0F0F0F
- Surface: #121212
- Card: #161616
- Border: #1F1F1F
- Primary: #22C55E (Green)
- Primary Light: #4ADE80

### 애니메이션 원칙
- Duration: 250ms ~ 400ms
- Easing: cubic-bezier(0.33, 1, 0.68, 1)
- GPU 가속 사용 (transform, opacity)
- Scroll-based animations

## 🛠 개발 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드
```bash
npm run build
```

### 정적 배포용 빌드
```bash
npm run build
```

## 📁 프로젝트 구조

```
src/
├── app/                    # 페이지 라우트
│   ├── (landing)/         # 메인 페이지
│   ├── about/             # About 페이지
│   ├── projects/          # Projects 페이지
│   ├── skills/            # Skills 페이지
│   └── contact/           # Contact 페이지
├── components/
│   ├── layout/            # Header, Footer
│   ├── animations/        # 재사용 애니메이션 컴포넌트
│   ├── landing/           # 랜딩 페이지 컴포넌트
│   ├── about/             # About 페이지 컴포넌트
│   ├── projects/          # Projects 페이지 컴포넌트
│   ├── skills/            # Skills 페이지 컴포넌트
│   └── chatbot/           # 챗봇 컴포넌트
├── lib/
│   ├── animations/        # 애니메이션 variants, hooks
│   ├── data/              # 프로젝트, 스킬 데이터
│   └── utils/             # 유틸리티 함수
├── styles/                # 글로벌 CSS
└── types/                 # TypeScript 타입 정의
```

## 🎯 커스터마이징

### 개인 정보 수정
1. `src/components/landing/HeroSection.tsx` - 이름, 역할 수정
2. `src/lib/data/about.ts` - About 페이지 내용 수정
3. `src/lib/data/projects.ts` - 프로젝트 정보 추가/수정
4. `src/lib/data/skills.ts` - 스킬 정보 수정
5. `src/app/contact/page.tsx` - 연락처 정보 수정

### 테마 색상 변경
`tailwind.config.ts` 파일에서 색상 커스터마이징 가능

### 이미지 추가
`public/images/` 폴더에 이미지 추가 후 프로젝트 데이터에서 참조

## 📝 추후 구현 예정

- [ ] AI 챗봇 LLM 연동 (Groq/Gemini)
- [ ] 프로젝트 이미지 캐러셀
- [ ] MDX 블로그 섹션
- [ ] 다크/라이트 모드 토글
- [ ] 다국어 지원
- [ ] 성능 최적화 추가

## 📄 라이선스

MIT

## 👤 Author

Your Name - [GitHub](https://github.com) - [Email](mailto:your@email.com)

# portfolio
