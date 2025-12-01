import { CaseStudyProject } from "@/types";

/**
 * 🎯 Case Study 프로젝트 템플릿
 * 
 * 특정 문제 해결, 마이그레이션, 성능 개선 등 
 * 일부만 참여한 프로젝트용 템플릿
 * 
 * 예: "토스 → KG이니시스 결제 모듈 마이그레이션"
 */

export const caseStudyTemplate: CaseStudyProject = {
  // ============================================
  // 기본 정보
  // ============================================
  type: "case-study",
  id: "unique-case-study-id",
  
  // 카테고리 선택 (하나만 선택)
  // 💡 Case Study는 보통: "마이그레이션", "리팩토링", "성능개선", "기능추가", "유지보수" 중 하나
  category: "마이그레이션",
  
  title: "회사명 - 작업 제목", // 예: "레어리 - 결제 시스템 마이그레이션"
  thumbnail: "/images/projects/프로젝트폴더명/thumbnail.jpg",
  shortDescription: "카드에 표시될 짧은 설명 (1줄로 문제 요약)",
  
  // ============================================
  // Case Study 내용
  // ============================================
  context: {
    company: "주식회사 레어리",
    period: "2024.03 ~ 2024.04",
    role: "Frontend Developer",
  },
  
  challenge: {
    title: "토스페이먼츠 → KG이니시스 결제 시스템 마이그레이션",
    
    background: `
토스 페이먼츠에서 KG이니시스로 결제 모듈을 전환해야 하는 상황.
기존 코드와의 호환성을 유지하면서 안정적으로 마이그레이션 필요.
    `.trim(),
    
    problem: `
- 기존 토스페이먼츠 API에 강하게 결합된 코드
- 결제 프로세스 차이로 인한 호환성 문제
- 서비스 중단 없이 전환 필요
    `.trim(),
    
    solution: `
1. 추상화 레이어 도입으로 PG사 독립성 확보
2. Feature Flag를 활용한 단계적 전환
3. 통합 테스트 환경 구축
4. 실시간 모니터링 시스템 구축
    `.trim(),
    
    result: `
- 서비스 중단 없이 1주일 내 전체 전환 완료
- 결제 전환율 저하 0% 달성
- 향후 PG사 전환 비용 70% 절감 예상
    `.trim(),
    
    techStack: [
      "React",
      "TypeScript",
      "KG이니시스 SDK",
      "Zustand",
    ],
    
    metrics: {
      before: "토스페이먼츠",
      after: "KG이니시스",
      label: "결제 모듈 전환",
    },
  },
};

// ============================================
// 📝 작성 가이드 (Case Study)
// ============================================

/*

### Case Study는 언제 사용하나요?

✅ 사용하는 경우:
- 특정 기능만 개발/수정한 경우
- 마이그레이션 작업 (A → B 전환)
- 성능 개선만 진행한 경우
- 버그 수정 및 리팩토링
- 기술 스택 전환

❌ 사용하지 않는 경우:
- 프로젝트 전체를 개발한 경우
- 여러 기능을 개발한 경우
→ 이런 경우는 Full Project 타입 사용!

### 작성 팁

1. **company**: 
   - 회사명 또는 프로젝트명
   - 예: "레어리", "당근마켓", "토스"

2. **projectName**: 
   - 해결한 문제를 명확하게
   - 예: "결제 모듈 마이그레이션", "페이지 로딩 성능 개선", "레거시 코드 리팩토링"

3. **problem**: 
   - 왜 이 작업이 필요했는가?
   - 어떤 문제가 있었는가?
   - 배경 설명

4. **solution**: 
   - 어떻게 해결했는가?
   - 구체적인 접근 방법
   - 사용한 기술/전략
   - 번호로 단계별 설명하면 좋음

5. **result**: 
   - 결과는 어땠는가?
   - 수치로 표현 가능하면 최고!
   - 부수적인 효과도 작성

6. **metrics** (선택):
   - Before/After를 숫자로 표현
   - 예: "3초 → 1초", "500KB → 150KB"
   - 문자열도 OK: "토스 → 이니시스"

### 예시 1: 마이그레이션

```typescript
{
  type: "case-study",
  id: "payment-migration",
  thumbnail: "/images/projects/payment/thumbnail.jpg",
  shortDescription: "토스 결제에서 KG이니시스로 안정적 마이그레이션",
  caseStudy: {
    company: "레어리",
    projectName: "결제 모듈 마이그레이션",
    period: "2024.03 ~ 2024.04",
    role: "Frontend Developer",
    problem: "...",
    solution: "...",
    result: "...",
    techStack: ["React", "KG이니시스"],
  }
}
```

### 예시 2: 성능 개선

```typescript
{
  type: "case-study",
  id: "performance-optimization",
  thumbnail: "/images/projects/perf/thumbnail.jpg",
  shortDescription: "초기 로딩 성능 70% 개선",
  caseStudy: {
    company: "당근마켓",
    projectName: "메인 페이지 로딩 성능 개선",
    period: "2024.02",
    role: "Frontend Developer",
    problem: "메인 페이지 초기 로딩이 5초로 너무 느림",
    solution: "1. 번들 사이즈 분석\n2. Code splitting 적용\n3. 이미지 최적화",
    result: "로딩 시간 5초 → 1.5초로 70% 개선",
    techStack: ["Next.js", "Lighthouse"],
    metrics: {
      before: "5초",
      after: "1.5초",
      label: "초기 로딩 시간"
    }
  }
}
```

### 예시 3: 레거시 리팩토링

```typescript
{
  type: "case-study",
  id: "legacy-refactoring",
  shortDescription: "jQuery → React 점진적 마이그레이션",
  caseStudy: {
    company: "토스",
    projectName: "레거시 대시보드 리팩토링",
    period: "2024.01 ~ 2024.03",
    role: "Frontend Developer",
    problem: "jQuery 기반 대시보드의 유지보수성 문제",
    solution: "페이지별 점진적 React 전환 전략 수립 및 실행",
    result: "핵심 페이지 React 전환 완료, 유지보수 시간 50% 단축",
    techStack: ["React", "TypeScript", "jQuery"],
  }
}
```

*/

