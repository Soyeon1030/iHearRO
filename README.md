# 🌟 iHearRO Landing Page

## 📝 프로젝트 소개

아이의 안전한 성장을 위한 스마트 케어 솔루션 **iHearRO**의 랜딩 페이지입니다.

---

## ✨ 주요 기능

* **실시간 소리 모니터링**
  * 아이의 작은 소리도 놓치지 않는 민감한 센서
  * 실시간 스마트폰 전송으로 생생한 소리 전달
  * AI 기반 울음소리.위험소리 감지 알림

* **스마트 세이프존**
  * 블루투스 기반 실시간 위치 추적
  * 맞춤형 안전 거리 설정
  * 실시간 이탈 알림

* **360도 전방향 감지**
  * 오뚝이처럼 서는 귀여운 디자인
  * 어디든 올려두기만 하면 OK
  * 넘어져도 저절로 일어나는 안정감

---

## 🛠️ 기술 스택

### 프론트엔드
* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
* ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### 라이브러리
* **AOS** (Animate On Scroll) - 스크롤 애니메이션
* **GSAP** (GreenSock Animation Platform) - 고급 애니메이션
* **jQuery** - DOM 조작 및 이벤트 핸들링

---

## 📁 프로젝트 구조

```bash
/
├── src/
│   ├── scss/
│   │   ├── abstracts/        # 변수, 믹스인 등
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── base/            # 기본 스타일
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _base.scss
│   │   └── main.scss        # 메인 SCSS 파일
│   ├── js/
│   │   └── common.js        # 공통 JavaScript
│   └── img/                 # 이미지 리소스
├── index.html              # 메인 HTML 파일
└── README.md
```

---

## 🚀 시작하기

1. **SCSS 컴파일**
   ```bash
   sass --watch src/scss/main.scss src/scss/main.css
   ```

2. **개발 서버 실행**
   * VS Code Live Server 또는 로컬 서버를 통해 index.html 실행

---

## 📱 반응형 브레이크포인트

| 디바이스 | 크기 |
|----------|------|
| Desktop | 1400px+ |
| Laptop | 1200px |
| Tablet | 768px |
| Mobile | 576px |

---

## 🎨 애니메이션

### 1. 인트로 애니메이션
* SVG 패스 애니메이션
* 로고 페이드인/아웃
* 디바이스 이미지 트랜지션

### 2. 스크롤 애니메이션 (AOS)
* 페이드 업 효과
* 섹션별 지연 효과
* 커스텀 트랜지션

### 3. GSAP 애니메이션
* 디바이스 플로팅 효과
* 스크롤 트리거 기반 애니메이션
* 부드러운 섹션 전환

---

## 🌐 브라우저 지원

* ![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white) **Chrome** (Latest)
* ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=flat-square&logo=firefoxbrowser&logoColor=white) **Firefox** (Latest)
* ![Safari](https://img.shields.io/badge/Safari-000000?style=flat-square&logo=safari&logoColor=white) **Safari** (Latest)
* ![Edge](https://img.shields.io/badge/Edge-0078D7?style=flat-square&logo=microsoftedge&logoColor=white) **Edge** (Latest)

---

## 📄 라이선스

All rights reserved © IHU Inc.

---

## 🔍 참고사항

* 실제 디바이스 및 앱 출시 예정
* 추가 기능 및 업데이트 예정
* 문의사항: CEO@ihu-labs.com