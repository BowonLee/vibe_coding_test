# RunMate GitHub Landing Page 계획서

## 📌 문서 정보
- **작성일**: 2025-01-XX
- **목적**: RunMate 프로젝트 소개용 GitHub Pages 제작 계획
- **기반 문서**: PRD v1.0

---

## 1. 목표 및 목적

### 1.1 주요 목표
- **프로젝트 소개**: RunMate의 비전과 가치 제안을 명확히 전달
- **기술 스택 홍보**: Next.js, Supabase, OpenAI 기반 기술 스택 강조
- **커뮤니티 구축**: 오픈소스 기여자 및 베타 테스터 모집
- **투자자/파트너 어필**: 제품의 잠재력과 시장 기회 제시

### 1.2 타겟 오디언스
1. **개발자 커뮤니티**: 오픈소스 기여자, 기술 블로거
2. **잠재 사용자**: 러닝 앱을 찾는 사용자들
3. **투자자/파트너**: 스타트업 투자자, 협업 파트너
4. **기술 리뷰어**: 테크 미디어, 유튜버

---

## 2. 페이지 구조 및 섹션

### 2.1 전체 레이아웃 (Single Page Application)

```
┌─────────────────────────────────────┐
│  Hero Section (Above the fold)      │
│  - 헤드라인 + 서브헤드라인           │
│  - CTA 버튼 (베타 신청, GitHub 링크)│
│  - 히어로 이미지/비디오             │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Problem Section                    │
│  - 3가지 핵심 문제                  │
│  - 사용자 증언 (인터뷰 기반)        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Solution Section                   │
│  - Value Proposition                │
│  - 핵심 기능 소개 (5개)             │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Features Deep Dive                 │
│  - Feature 1: AI 피드백             │
│  - Feature 2: 유연한 챌린지         │
│  - Feature 3: 러닝 트래킹           │
│  - Feature 4: 팀 챌린지             │
│  - Feature 5: 마일스톤              │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Tech Stack Section                 │
│  - Next.js, Supabase, OpenAI        │
│  - 아키텍처 다이어그램              │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Roadmap Section                    │
│  - MVP (Month 1-3)                  │
│  - Post-MVP (Month 4-6)             │
│  - Future (Month 7-12)              │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  CTA Section                        │
│  - 베타 신청                        │
│  - GitHub 링크                      │
│  - 이메일 구독                      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Footer                             │
│  - 소셜 링크                        │
│  - 연락처                           │
└─────────────────────────────────────┘
```

### 2.2 각 섹션 상세 계획

#### Hero Section
**목적**: 첫 인상, 즉시 가치 제안 전달

**콘텐츠**:
- **헤드라인**: "작심삼일로 끝나는 러닝을 평생 습관으로 만드는 AI 동반자"
- **서브헤드라인**: "실시간 AI 피드백과 유연한 챌린지로 꾸준히 달리세요"
- **CTA 버튼**:
  - [베타 신청하기] (Primary)
  - [GitHub 보기] (Secondary)
- **비주얼**: 러닝 앱 UI 모킹업 또는 애니메이션

**디자인 요구사항**:
- 다크 모드 지원
- 반응형 디자인 (모바일 우선)
- 부드러운 스크롤 애니메이션

---

#### Problem Section
**목적**: 사용자 페인 포인트 공감대 형성

**콘텐츠**:
1. **Problem 1**: "내가 지금 잘하고 있는지" 알 수 없음
   - 사용자 증언: 민준, 태윤, 수진
   - 아이콘: ❓

2. **Problem 2**: 하루 실패하면 챌린지 전체 실패
   - 사용자 증언: 민준, 서현
   - 아이콘: 💔

3. **Problem 3**: 혼자 달리면 3일 만에 포기
   - 사용자 증언: 지우, 서현
   - 아이콘: 😔

**디자인**:
- 카드 레이아웃 (3열 → 모바일 1열)
- 각 문제별 색상 구분
- 사용자 증언은 인용구 스타일

---

#### Solution Section
**목적**: RunMate의 차별화된 해결책 제시

**콘텐츠**:
- **Value Proposition** (PRD 1.2 참조)
- **핵심 기능 5개 요약**:
  1. 🤖 AI 맥락적 피드백
  2. 🎯 유연한 챌린지 시스템
  3. 📊 러닝 기록 및 추적
  4. 👥 팀 챌린지 & 실시간 매칭
  5. 🏆 마일스톤 & 레벨 시스템

**디자인**:
- 아이콘 + 제목 + 간단한 설명
- 호버 효과로 상세 정보 표시

---

#### Features Deep Dive
**목적**: 각 기능의 상세 설명 및 차별점 강조

**구조** (각 Feature별):
- **제목**: 기능명
- **해결하는 문제**: 명시
- **핵심 기능**: 3-4개 포인트
- **예시/데모**: 스크린샷 또는 GIF
- **기술 스택**: 사용 기술 명시

**예시 (Feature 1: AI 피드백)**:
```
🤖 AI 맥락적 피드백 시스템

문제 해결: "내가 지금 잘하고 있는지" 알 수 없음

핵심 기능:
✓ 실시간 진행 상태 판단
✓ 목표 달성 가능성 예측
✓ 페이스 적정성 판단
✓ 개인화된 조언

예시:
"민준님, 지금 페이스면 10km 목표 달성 가능성 85%예요!
이번 주 3회 뛰신 건 계획보다 1회 많아서 훌륭해요."

기술: OpenAI GPT-4o-mini
```

---

#### Tech Stack Section
**목적**: 기술적 우수성 및 현대적 스택 어필

**콘텐츠**:
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: Next.js API Routes
- **Database**: Supabase PostgreSQL
- **Auth**: Supabase Auth
- **AI**: OpenAI API (GPT-4o-mini)
- **Deployment**: Vercel (예정)

**디자인**:
- 로고 그리드
- 간단한 아키텍처 다이어그램
- 각 기술의 역할 설명

---

#### Roadmap Section
**목적**: 개발 진행 상황 및 향후 계획 공개

**콘텐츠**:
- **MVP (Month 1-3)**: ✅ 완료된 항목 표시
- **Post-MVP (Month 4-6)**: 🔄 진행 중
- **Future (Month 7-12)**: 📅 계획

**디자인**:
- 타임라인 스타일
- 진행률 표시 (Progress bar)
- 각 단계별 상세 기능 리스트

---

#### CTA Section
**목적**: 사용자 액션 유도

**콘텐츠**:
- **베타 신청**: 이메일 수집 폼
- **GitHub 링크**: 저장소 바로가기
- **이메일 구독**: 뉴스레터 구독

**디자인**:
- 강조된 배경색
- 명확한 CTA 버튼
- 간단한 폼 (이메일만)

---

## 3. 디자인 컨셉

### 3.1 컬러 팔레트
- **Primary**: 러닝 느낌의 활기찬 색상 (오렌지/레드 계열)
  - 예: `#FF6B35` (주황), `#F7931E` (오렌지)
- **Secondary**: 신뢰감 있는 블루
  - 예: `#4A90E2` (파랑)
- **Accent**: 성공/완료를 나타내는 그린
  - 예: `#50C878` (초록)
- **Background**: 다크 모드 지원
  - Light: `#FFFFFF`, `#F5F5F5`
  - Dark: `#1A1A1A`, `#2D2D2D`
- **Text**: 
  - Light: `#333333`, `#666666`
  - Dark: `#FFFFFF`, `#CCCCCC`

### 3.2 타이포그래피
- **헤드라인**: Bold, Sans-serif (예: Inter, Pretendard)
- **본문**: Regular, 가독성 좋은 폰트
- **코드/기술**: Monospace (예: Fira Code)

### 3.3 이미지/비주얼
- **히어로**: 러닝 앱 UI 모킹업 또는 일러스트
- **기능 설명**: 스크린샷 또는 GIF
- **아이콘**: 일관된 스타일 (예: Heroicons, Lucide)
- **일러스트**: 러닝 테마의 미니멀한 일러스트

### 3.4 애니메이션
- **스크롤 애니메이션**: Fade-in, Slide-up
- **호버 효과**: 버튼, 카드
- **로딩**: 부드러운 트랜지션
- **라이브러리**: Framer Motion 또는 CSS animations

---

## 4. 기술 스택

### 4.1 프레임워크
- **Next.js 14+**: App Router, Server Components
- **React 18+**: 최신 React 기능 활용

### 4.2 스타일링
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **CSS Modules** (선택): 컴포넌트별 스타일
- **Dark Mode**: `next-themes` 라이브러리

### 4.3 애니메이션
- **Framer Motion**: 복잡한 애니메이션
- **CSS Transitions**: 간단한 효과

### 4.4 폼 처리
- **React Hook Form**: 폼 관리
- **Zod**: 폼 검증

### 4.5 배포
- **GitHub Pages**: 정적 호스팅
- **또는 Vercel**: Next.js 최적화

### 4.6 추가 라이브러리
- **react-icons**: 아이콘
- **react-intersection-observer**: 스크롤 감지
- **date-fns**: 날짜 포맷팅

---

## 5. 콘텐츠 전략

### 5.1 톤앤매너
- **친근하고 격려하는**: 러닝 코치처럼
- **명확하고 간결한**: 기술적이지만 이해하기 쉽게
- **긍정적이고 동기부여**: "할 수 있다"는 메시지

### 5.2 키워드
- AI 러닝 앱
- 러닝 습관 형성
- 작심삼일 해결
- 러닝 동기부여
- 팀 챌린지
- Next.js 프로젝트

### 5.3 SEO 최적화
- **메타 태그**: Open Graph, Twitter Cards
- **구조화된 데이터**: JSON-LD
- **시맨틱 HTML**: 적절한 헤딩 태그
- **alt 텍스트**: 모든 이미지

---

## 6. 구현 단계

### Phase 1: 기본 구조 (Week 1)
- [ ] Next.js 프로젝트 설정
- [ ] 기본 레이아웃 구성
- [ ] Hero Section 구현
- [ ] Navigation 구현

### Phase 2: 콘텐츠 섹션 (Week 2)
- [ ] Problem Section
- [ ] Solution Section
- [ ] Features Deep Dive (5개)
- [ ] Tech Stack Section

### Phase 3: 추가 기능 (Week 3)
- [ ] Roadmap Section
- [ ] CTA Section (폼 연동)
- [ ] Footer
- [ ] Dark Mode 구현

### Phase 4: 최적화 (Week 4)
- [ ] 애니메이션 추가
- [ ] 반응형 디자인 완성
- [ ] SEO 최적화
- [ ] 성능 최적화
- [ ] 접근성 개선

### Phase 5: 배포 및 테스트 (Week 5)
- [ ] GitHub Pages 설정
- [ ] 도메인 연결 (선택)
- [ ] 크로스 브라우저 테스트
- [ ] 모바일 테스트
- [ ] 피드백 수집 및 개선

---

## 7. 파일 구조

```
landing-page/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── Features.tsx
│       ├── TechStack.tsx
│       ├── Roadmap.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── public/
│   ├── images/
│   └── icons/
├── lib/
│   └── utils.ts
├── styles/
│   └── animations.css
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 8. 성공 지표

### 8.1 정량적 지표
- **페이지 조회수**: 월 1,000+ (목표)
- **베타 신청**: 월 100+ (목표)
- **GitHub 스타**: 50+ (목표)
- **평균 체류 시간**: 2분+ (목표)
- **이탈률**: 50% 이하 (목표)

### 8.2 정성적 지표
- **피드백**: 사용자/개발자 피드백 수집
- **공유**: SNS 공유 횟수
- **기여**: 오픈소스 기여자 유입

---

## 9. 참고 자료

### 9.1 참고할 랜딩 페이지
- Vercel Landing Page
- Supabase Landing Page
- Linear Landing Page
- Stripe Landing Page

### 9.2 디자인 리소스
- **일러스트**: unDraw, Storyset
- **아이콘**: Heroicons, Lucide Icons
- **폰트**: Google Fonts (Inter, Pretendard)
- **색상**: Coolors, Adobe Color

---

## 10. 다음 단계

1. ✅ 계획서 작성 완료
2. 🔲 디자인 시안 제작 (Figma)
3. 🔲 개발 환경 구축
4. 🔲 Phase 1 구현 시작
5. 🔲 정기적인 피드백 수집 및 개선

---

**END OF PLAN**

