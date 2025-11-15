# RunMate Landing Page

RunMate 프로젝트 소개용 GitHub Pages 랜딩페이지입니다.

## 기술 스택

- **Next.js 14+**: App Router, Server Components
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Framer Motion**: 애니메이션
- **next-themes**: 다크 모드 지원

## 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 배포

GitHub Actions를 통해 main 브랜치에 푸시할 때마다 자동으로 GitHub Pages에 배포됩니다.

## 구조

```
landing-page/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 글로벌 스타일
├── components/
│   ├── Navigation.tsx  # 네비게이션
│   ├── Hero.tsx        # 히어로 섹션
│   ├── Problem.tsx     # 문제 섹션
│   ├── Solution.tsx    # 해결책 섹션
│   ├── Features.tsx    # 기능 섹션
│   ├── TechStack.tsx   # 기술 스택 섹션
│   ├── Roadmap.tsx     # 로드맵 섹션
│   ├── CTA.tsx         # CTA 섹션
│   ├── Footer.tsx      # 푸터
│   └── ThemeProvider.tsx # 테마 프로바이더
└── plans/
    └── landing-page-plan.md # 계획서
```

## 라이선스

MIT

