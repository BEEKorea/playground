# Shorts & Test - Standalone Astro Project

독립형 인터랙티브 웹 페이지 프로젝트 (Astro 기반)

## 프로젝트 개요

이 프로젝트는 MediAccess 웹사이트에서 분리된 두 개의 인터랙티브 페이지를 포함합니다:

### 📱 /shorts - 세로형 스토리 플레이어
- 3개의 수직 스크롤 장면 (TikTok/Instagram Reels 스타일)
- 터치/마우스 스와이프 내비게이션
- 키보드 방향키 지원
- 대화형 스토리텔링 경험

### 🎯 /test - 인터랙티브 퀴즈 플로우차트
- 의사결정 트리 시각화
- Prezi 스타일 줌/팬 애니메이션
- 연필 질감 SVG 효과
- 16개 노드의 분기형 퀴즈

## 시작하기

### 의존성 설치

```bash
cd site
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:4321`에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
npm run preview
```

## 프로젝트 구조

```
site/
├── src/
│   ├── pages/
│   │   ├── index.astro      # 홈페이지 (랜딩 페이지)
│   │   ├── shorts.astro     # 세로형 스토리 플레이어
│   │   └── test.astro       # 인터랙티브 퀴즈
│   ├── layouts/
│   │   └── Layout.astro     # 기본 레이아웃
│   ├── styles/
│   │   ├── global.css       # 전역 스타일 및 폰트
│   │   ├── animations.css   # 애니메이션 정의
│   │   └── mobile-ux.css    # 모바일 최적화
│   └── scripts/
│       └── scroll-animations.ts  # 스크롤 애니메이션 로직
├── public/
│   ├── fonts/               # 커스텀 폰트
│   ├── peep-*.png          # 캐릭터 이미지
│   └── question-mark-*.svg # 아이콘 에셋
└── astro.config.mjs
```

## 기술 스택

- **Astro 5.16.0** - 정적 사이트 생성기
- **Tailwind CSS v4** - 유틸리티 우선 CSS 프레임워크
- **TypeScript** - 타입 안전성

## 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### 배포 설정

1. **GitHub Pages 활성화**:
   - GitHub 저장소 → Settings → Pages
   - Source: "GitHub Actions" 선택

2. **자동 배포**:
   - `main` 브랜치에 푸시하면 자동으로 빌드 및 배포됩니다
   - `.github/workflows/deploy.yml` 워크플로 사용

3. **배포 URL**:
   - https://beekorea.github.io/playground

### 수동 배포

Actions 탭에서 "Deploy to GitHub Pages" 워크플로를 수동으로 실행할 수 있습니다.

## 커스텀 폰트

- **Pretendard** (300-800 weights) - 현대적인 한글 산세리프
- **Ongeullip Cocoa** (온글잎 코코아체) - 주요 디스플레이 폰트

## 라이선스

원본 프로젝트에서 분리됨 - MediAccess
