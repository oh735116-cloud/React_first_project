# 모바일청첩장_기획서.md

# React 모바일 청첩장 기획서

## 1. 프로젝트 개요

| 항목     | 내용                                                                                |
| ------ | --------------------------------------------------------------------------------- |
| 프로젝트명  | React 모바일 청첩장                                                                     |
| 제작 목적  | React를 활용하여 모바일에서 보기 좋은 원페이지형 청첩장 웹앱을 제작한다.                                       |
| 참고 사이트 | https://toourguest.com/preview/porto                                              |
| 제작 방향  | 참고 사이트의 감성적인 모바일 청첩장 흐름, 공유 기능, 갤러리 구성, 계좌 복사, 지도 연결 기능 등을 참고하되 디자인은 직접 새롭게 구성한다. |
| 최종 결과물 | 모바일 화면에 최적화된 React 기반 청첩장 웹페이지                                                    |
| 제출 결과물 | GitHub 주소, 배포 주소, README.md                                                       |

---

## 2. 전체 페이지 구성

모바일 청첩장은 위에서 아래로 자연스럽게 스크롤되는 **원페이지 구조**로 제작한다.

### 전체 섹션 순서

1. 인트로 화면
2. 메인 비주얼 영역
3. 신랑 / 신부 소개
4. 초대 문구
5. 날짜 및 시간 안내
6. 장소 안내
7. 지도 영역
8. 갤러리
9. 혼주 / 연락처 안내
10. 마음 전하실 곳
11. 참석 의사 전달
12. 공유하기 버튼
13. 푸터

---

## 3. 섹션별 상세 기획

| 섹션명         | 화면 목적                    | 들어갈 내용                 | 필요한 UI 요소            | React 컴포넌트 이름       | 필요한 props 예시                                  | CSS 디자인 방향                    |
| ----------- | ------------------------ | ---------------------- | -------------------- | ------------------- | --------------------------------------------- | ----------------------------- |
| 인트로 화면      | 청첩장 첫 진입 시 감성적인 시작 화면 제공 | 신랑 신부 이름, 결혼 날짜, 입장 버튼 | 전체 화면, 배경 이미지, 입장 버튼 | `IntroSection`      | `groomName`, `brideName`, `date`, `onEnter`   | 화면 전체 높이, 중앙 정렬, 부드러운 fade 효과 |
| 메인 비주얼 영역   | 청첩장의 대표 분위기 전달           | 대표 이미지, 이름, 날짜         | 메인 이미지, 타이틀 텍스트      | `HeroSection`       | `mainImage`, `groomName`, `brideName`, `date` | 세로형 이미지, 넓은 여백, 고급스러운 타이포그래피  |
| 신랑 / 신부 소개  | 결혼 당사자 정보 안내             | 신랑 이름, 신부 이름, 부모님 성함   | 이름 카드, 구분선           | `CoupleSection`     | `groom`, `bride`, `parents`                   | 간결한 카드 레이아웃, 얇은 라인 사용         |
| 초대 문구       | 하객에게 전하는 인사말 표시          | 초대 문장, 짧은 시 문구         | 텍스트 박스               | `InvitationSection` | `message`                                     | 중앙 정렬, 줄간격 넓게, 차분한 색상         |
| 날짜 및 시간 안내  | 예식 일시를 명확하게 전달           | 날짜, 요일, 시간             | 날짜 카드, 캘린더형 UI       | `DateSection`       | `date`, `time`, `day`                         | 숫자 강조, 작은 캘린더 느낌              |
| 장소 안내       | 예식장 정보 제공                | 장소명, 홀명, 주소            | 장소 카드, 주소 복사 버튼      | `LocationSection`   | `venue`, `hall`, `address`                    | 정보 구분이 쉬운 카드형 디자인             |
| 지도 영역       | 위치 확인 및 길찾기 제공           | 지도 이미지 또는 지도 링크        | 지도 박스, 네이버지도/카카오맵 버튼 | `MapSection`        | `mapImage`, `naverMapUrl`, `kakaoMapUrl`      | 지도는 16:9 비율, 버튼은 가로 배치        |
| 갤러리         | 웨딩 사진 감상                 | 사진 배열                  | 이미지 그리드, 모달 보기       | `GallerySection`    | `images`                                      | 2열 그리드, 둥근 모서리, 클릭 확대         |
| 혼주 / 연락처 안내 | 신랑측, 신부측 연락처 제공          | 신랑, 신부, 부모님 연락처        | 전화 버튼, 문자 버튼         | `ContactSection`    | `contacts`                                    | 목록형 UI, 버튼은 작고 명확하게           |
| 마음 전하실 곳    | 계좌 정보 안내                 | 은행명, 계좌번호, 예금주         | 계좌 복사 버튼             | `AccountSection`    | `accounts`                                    | 아코디언 또는 카드형 구성                |
| 참석 의사 전달    | 참석 여부 확인                 | 참석 / 불참 선택, 이름, 인원     | 버튼, 입력창, 제출 버튼       | `RSVPSection`       | `rsvpOptions`, `onSubmit`                     | 폼은 단순하게, 버튼은 터치하기 쉽게          |
| 공유하기 버튼     | 청첩장 공유 기능 제공             | 카카오톡 공유, 주소 복사         | 공유 버튼, URL 복사 버튼     | `ShareSection`      | `shareTitle`, `shareUrl`                      | 하단 고정 또는 섹션형 버튼               |
| 푸터          | 마무리 문구 표시                | 감사 문구, 제작 정보           | 텍스트                  | `FooterSection`     | `footerText`                                  | 작은 글씨, 여백 충분히                 |

---

## 4. React 컴포넌트 구조 설계

```txt
src/
├─ App.jsx
├─ main.jsx
├─ data/
│  └─ weddingData.js
├─ components/
│  ├─ IntroSection.jsx
│  ├─ HeroSection.jsx
│  ├─ CoupleSection.jsx
│  ├─ InvitationSection.jsx
│  ├─ DateSection.jsx
│  ├─ LocationSection.jsx
│  ├─ MapSection.jsx
│  ├─ GallerySection.jsx
│  ├─ ContactSection.jsx
│  ├─ AccountSection.jsx
│  ├─ RSVPSection.jsx
│  ├─ ShareSection.jsx
│  ├─ MusicButton.jsx
│  └─ FooterSection.jsx
└─ styles/
   └─ global.css
```

### 컴포넌트 역할

| 컴포넌트                    | 역할                  |
| ----------------------- | ------------------- |
| `App.jsx`               | 전체 페이지 구성 및 데이터 전달  |
| `weddingData.js`        | 청첩장에 들어가는 모든 데이터 관리 |
| `IntroSection.jsx`      | 첫 진입 화면             |
| `HeroSection.jsx`       | 대표 이미지와 신랑 신부 이름 표시 |
| `CoupleSection.jsx`     | 신랑 신부 및 가족 소개       |
| `InvitationSection.jsx` | 초대 문구 표시            |
| `DateSection.jsx`       | 결혼 날짜와 시간 표시        |
| `LocationSection.jsx`   | 예식장 정보 표시           |
| `MapSection.jsx`        | 지도 및 길찾기 버튼 표시      |
| `GallerySection.jsx`    | 웨딩 사진 갤러리           |
| `ContactSection.jsx`    | 전화 / 문자 연락 기능       |
| `AccountSection.jsx`    | 계좌번호 복사 기능          |
| `RSVPSection.jsx`       | 참석 의사 전달 폼          |
| `ShareSection.jsx`      | 청첩장 공유 기능           |
| `MusicButton.jsx`       | 배경음악 ON / OFF       |
| `FooterSection.jsx`     | 마무리 문구              |

---

## 5. 데이터 구조 설계

청첩장 내용은 컴포넌트 안에 직접 작성하지 않고 `weddingData.js`에서 관리한다.

```js
// src/data/weddingData.js

const weddingData = {
  couple: {
    groomName: "김도윤",
    brideName: "이서연",
    groomFullName: "김도윤",
    brideFullName: "이서연",
  },

  wedding: {
    date: "2026년 10월 24일",
    day: "토요일",
    time: "오후 1시 30분",
    venue: "라온웨딩홀",
    hall: "그랜드홀 2층",
    address: "대구광역시 중구 예식로 123",
  },

  images: {
    main: "/images/main.jpg",
    gallery: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
      "/images/gallery-6.jpg",
    ],
  },

  invitation: {
    title: "소중한 분들을 초대합니다",
    message: `
서로의 계절이 되어주기로 약속한 두 사람이
이제 하나의 길을 함께 걸어가려 합니다.

귀한 걸음으로 함께해 주시면
더없는 기쁨으로 간직하겠습니다.
    `,
  },

  parents: {
    groomParents: {
      father: "김민수",
      mother: "박정희",
    },
    brideParents: {
      father: "이상훈",
      mother: "최영미",
    },
  },

  contacts: [
    {
      group: "신랑",
      name: "김도윤",
      phone: "010-1234-5678",
    },
    {
      group: "신부",
      name: "이서연",
      phone: "010-2345-6789",
    },
    {
      group: "신랑 아버지",
      name: "김민수",
      phone: "010-3456-7890",
    },
    {
      group: "신부 아버지",
      name: "이상훈",
      phone: "010-4567-8901",
    },
  ],

  accounts: [
    {
      group: "신랑측",
      bank: "국민은행",
      number: "123456-78-901234",
      holder: "김도윤",
    },
    {
      group: "신부측",
      bank: "신한은행",
      number: "234567-89-012345",
      holder: "이서연",
    },
  ],

  map: {
    naverMapUrl: "https://map.naver.com/",
    kakaoMapUrl: "https://map.kakao.com/",
  },

  share: {
    title: "김도윤 ♥ 이서연 결혼식에 초대합니다",
    description: "소중한 날, 함께 축복해 주세요.",
    url: "https://example.com/wedding",
  },

  footer: {
    text: "소중한 걸음으로 함께해 주셔서 감사합니다.",
  },
};

export default weddingData;
```

---

## 6. 주요 기능 정리

| 기능             | 설명                       | 구현 방식                                  |
| -------------- | ------------------------ | -------------------------------------- |
| 인트로 화면 후 본문 표시 | 첫 화면에서 버튼 클릭 시 청첩장 본문 표시 | `useState`로 `isEntered` 상태 관리          |
| 이미지 갤러리        | 여러 장의 웨딩 사진 표시           | 배열 데이터 `map()`으로 이미지 출력                |
| 이미지 확대 보기      | 사진 클릭 시 크게 보기            | 모달 상태 관리                               |
| 지도 링크 열기       | 네이버지도, 카카오맵으로 이동         | `window.open(url)` 사용                  |
| 전화 걸기          | 전화 앱 실행                  | `<a href="tel:01012345678">`           |
| 문자 보내기         | 문자 앱 실행                  | `<a href="sms:01012345678">`           |
| 계좌번호 복사        | 계좌번호를 클립보드에 복사           | `navigator.clipboard.writeText()`      |
| 청첩장 주소 복사      | 현재 URL 복사                | `window.location.href` 복사              |
| 카카오톡 공유 버튼 영역  | 카카오톡 공유 기능 영역 구성         | Kakao SDK 연동 또는 버튼 UI 먼저 제작            |
| 참석 의사 전달       | 참석 여부와 인원 입력             | React form 상태 관리                       |
| 배경음악 ON/OFF    | 음악 재생 및 정지               | `audio` 태그와 `useRef` 사용                |
| 스크롤 애니메이션      | 섹션이 보일 때 자연스럽게 등장        | CSS animation 또는 Intersection Observer |

---

## 7. 디자인 스타일 가이드

### 7-1. 전체 분위기

* 감성적이고 차분한 모바일 청첩장
* 과한 장식보다 여백과 타이포그래피 중심
* 웨딩 사진이 돋보이는 미니멀한 디자인
* 카드형 섹션을 사용해 정보 구분을 쉽게 구성

---

### 7-2. 컬러 팔레트

| 용도     | 색상 예시     | 설명            |
| ------ | --------- | ------------- |
| 배경색    | `#F8F4EF` | 따뜻한 아이보리      |
| 메인 텍스트 | `#3E352F` | 부드러운 브라운 블랙   |
| 서브 텍스트 | `#8A7D72` | 은은한 회갈색       |
| 포인트 컬러 | `#B48A78` | 웨딩 무드의 로즈 브라운 |
| 버튼 배경  | `#3E352F` | 진한 브라운        |
| 버튼 글자  | `#FFFFFF` | 흰색            |
| 라인     | `#E6DCD2` | 연한 베이지 라인     |

---

### 7-3. 폰트 방향

```css
font-family: "Noto Serif KR", "Noto Sans KR", serif;
```

| 영역    | 폰트 방향               |
| ----- | ------------------- |
| 제목    | 명조 계열 또는 세리프 느낌     |
| 본문    | 읽기 쉬운 고딕 또는 부드러운 명조 |
| 버튼    | 고딕 계열               |
| 날짜 숫자 | 크고 얇은 숫자 스타일        |

---

### 7-4. 여백 규칙

| 요소        | 여백             |
| --------- | -------------- |
| 섹션 상하 여백  | `80px ~ 120px` |
| 카드 내부 여백  | `24px`         |
| 제목과 본문 사이 | `20px ~ 32px`  |
| 버튼 간격     | `10px ~ 14px`  |
| 모바일 좌우 여백 | `20px`         |

---

### 7-5. 버튼 스타일

```css
button {
  min-height: 44px;
  border-radius: 999px;
  border: none;
  font-size: 14px;
  cursor: pointer;
}
```

버튼은 모바일에서 누르기 쉽게 최소 높이 `44px` 이상으로 제작한다.

### 버튼 종류

| 버튼    | 디자인            |
| ----- | -------------- |
| 기본 버튼 | 진한 배경 + 흰색 글자  |
| 보조 버튼 | 흰색 배경 + 얇은 테두리 |
| 복사 버튼 | 작은 pill 형태     |
| 지도 버튼 | 2개를 가로 배치      |
| 공유 버튼 | 하단 강조 버튼       |

---

### 7-6. 섹션 구분 방식

* 배경색을 크게 바꾸기보다 여백으로 구분
* 필요한 경우 얇은 선 또는 작은 장식 아이콘 사용
* 각 섹션 제목은 중앙 정렬
* 긴 정보는 카드형 박스로 정리

---

### 7-7. 이미지 비율

| 이미지 종류  | 비율                  |
| ------- | ------------------- |
| 메인 이미지  | 세로형, `4:5` 또는 `3:4` |
| 갤러리 썸네일 | 정사각형 `1:1`          |
| 지도 이미지  | 가로형 `16:9`          |
| 인트로 배경  | 전체 화면 cover         |

---

### 7-8. 모바일 화면 기준 너비

```css
.app {
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  background: #F8F4EF;
}
```

* 기본 모바일 기준 너비: `360px ~ 430px`
* PC에서 접속해도 중앙에 모바일 화면처럼 보이게 구성
* `max-width: 430px` 사용

---

### 7-9. 애니메이션 방향

| 애니메이션          | 설명                  |
| -------------- | ------------------- |
| fade-in        | 섹션이 부드럽게 나타남        |
| slide-up       | 아래에서 위로 살짝 이동       |
| scale          | 버튼 클릭 시 살짝 작아졌다 돌아옴 |
| intro fade-out | 입장 버튼 클릭 후 인트로 사라짐  |
| gallery modal  | 사진 확대 시 부드럽게 등장     |

---

## 8. 개발 순서

### 1단계: Vite React 프로젝트 생성

```bash
npm create vite@latest mobile-wedding-card
cd mobile-wedding-card
npm install
npm run dev
```

---

### 2단계: 폴더 구조 만들기

```txt
src/
├─ data/
├─ components/
└─ styles/
```

---

### 3단계: `weddingData.js` 작성

* 신랑 이름
* 신부 이름
* 날짜
* 시간
* 장소
* 주소
* 이미지
* 연락처
* 계좌번호
* 공유 문구

모든 데이터를 한 파일에서 관리한다.

---

### 4단계: `App.jsx`에서 섹션 연결

```jsx
import weddingData from "./data/weddingData";
import HeroSection from "./components/HeroSection";
import InvitationSection from "./components/InvitationSection";

function App() {
  return (
    <main className="app">
      <HeroSection data={weddingData} />
      <InvitationSection invitation={weddingData.invitation} />
    </main>
  );
}

export default App;
```

---

### 5단계: 각 섹션 컴포넌트 제작

우선 화면에 보여야 하는 순서대로 제작한다.

1. `HeroSection`
2. `InvitationSection`
3. `DateSection`
4. `LocationSection`
5. `GallerySection`
6. `ContactSection`
7. `AccountSection`
8. `ShareSection`

---

### 6단계: CSS 레이아웃 적용

`src/styles/global.css`에서 전체 공통 스타일을 작성한다.

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #eee;
  font-family: "Noto Serif KR", "Noto Sans KR", serif;
  color: #3e352f;
}

.app {
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  background: #f8f4ef;
}

.section {
  padding: 90px 20px;
  text-align: center;
}
```

---

### 7단계: 버튼 기능 추가

구현할 버튼 기능:

* 전화 걸기
* 문자 보내기
* 지도 열기
* 계좌번호 복사
* 청첩장 주소 복사
* 참석 의사 제출
* 음악 ON / OFF

---

### 8단계: 반응형 확인

확인할 화면 크기:

| 기기      | 기준            |
| ------- | ------------- |
| 작은 모바일  | 320px         |
| 일반 모바일  | 375px         |
| 큰 모바일   | 430px         |
| PC 브라우저 | 중앙 모바일 프레임 유지 |

---

### 9단계: 배포 준비

추천 배포 방식:

* Vercel
* Netlify
* GitHub Pages

---

## 9. 프로젝트 기간 및 제출 계획

> 주의: 2026년 6월은 30일까지 있으므로 `6/31` 날짜는 존재하지 않는다.
> 따라서 `6/31 배포주소 제출`은 `7/1 배포주소 제출`로 해석하여 계획한다.

| 날짜           | 해야 할 일                              | 제출물          |
| ------------ | ----------------------------------- | ------------ |
| 2026년 6월 30일 | React 프로젝트 생성, 기본 구조 제작, GitHub 업로드 | GitHub 주소 제출 |
| 2026년 7월 1일  | 주요 기능 구현, CSS 정리, 배포 진행             | 배포 주소 제출     |
| 최종 제출        | GitHub 주소, 배포 주소, README.md 작성      | 최종 결과물 제출    |

---

## 10. README.md 작성 내용

최종 제출 시 `README.md`에는 아래 내용을 작성한다.

````md
# React 모바일 청첩장

## 프로젝트 주제

React를 활용하여 모바일 화면에 최적화된 원페이지 청첩장 웹앱을 제작했습니다.

## 제작 목적

종이 청첩장 대신 모바일에서 쉽게 공유할 수 있는 청첩장을 만들고,
하객이 결혼식 정보, 장소, 연락처, 계좌번호, 참석 여부를 한 페이지에서 확인할 수 있도록 구성했습니다.

## 사용 기술

- React
- Vite
- JavaScript
- CSS
- HTML

## 구현된 기능

- 인트로 화면
- 메인 웨딩 이미지 표시
- 신랑 / 신부 소개
- 초대 문구 표시
- 예식 날짜 및 시간 안내
- 예식 장소 안내
- 지도 링크 연결
- 이미지 갤러리
- 전화 걸기
- 문자 보내기
- 계좌번호 복사
- 청첩장 주소 복사
- 참석 의사 전달 UI
- 배경음악 ON / OFF
- 모바일 반응형 레이아웃

## 폴더 구조

```txt
src/
├─ App.jsx
├─ main.jsx
├─ data/
│  └─ weddingData.js
├─ components/
└─ styles/
   └─ global.css
````

## GitHub 주소

추후 작성

## 배포 주소

추후 작성

````

---

## 11. 최종 산출물

### 최종 제출 항목

| 항목 | 설명 |
|---|---|
| GitHub 주소 | 프로젝트 전체 코드가 올라간 저장소 주소 |
| 배포 주소 | 실제 접속 가능한 모바일 청첩장 웹페이지 주소 |
| README.md | 프로젝트 주제, 사용 기술, 구현 기능, 실행 방법 정리 |
| React 코드 | 컴포넌트 기반으로 분리된 청첩장 코드 |
| CSS 파일 | 모바일 중심의 감성적인 청첩장 스타일 |
| 데이터 파일 | 청첩장 정보를 관리하는 `weddingData.js` |

---

## 12. 개발 시 주의사항

1. 참고 사이트를 그대로 복사하지 않는다.
2. 디자인 분위기와 기능 흐름만 참고한다.
3. 모든 텍스트와 데이터는 `weddingData.js`에서 관리한다.
4. 컴포넌트는 한 가지 역할만 담당하도록 나눈다.
5. 모바일 화면에서 먼저 확인한다.
6. 버튼은 손가락으로 누르기 쉽게 크게 만든다.
7. 이미지 파일 경로가 깨지지 않도록 public 또는 assets 폴더를 명확히 사용한다.
8. 배포 전에 콘솔 오류를 확인한다.
9. README.md에 구현 기능을 빠짐없이 정리한다.

---

## 13. 우선 구현할 MVP 범위

시간이 부족할 경우 아래 기능을 우선 구현한다.

### 필수 구현

- 메인 비주얼 영역
- 초대 문구
- 날짜 및 장소 안내
- 지도 링크 버튼
- 갤러리
- 연락처 버튼
- 계좌번호 복사
- 청첩장 주소 복사
- 모바일 반응형 디자인

### 추가 구현

- 인트로 화면
- 배경음악 ON / OFF
- 참석 의사 전달 폼
- 스크롤 애니메이션
- 이미지 확대 모달
- 카카오톡 공유 SDK 연동

---

## 14. 화면 흐름 요약

```txt
사용자 접속
   ↓
인트로 화면
   ↓
입장하기 버튼 클릭
   ↓
메인 청첩장 화면 표시
   ↓
예식 정보 확인
   ↓
갤러리 감상
   ↓
지도 / 연락처 / 계좌 확인
   ↓
참석 의사 전달
   ↓
청첩장 공유
````

---

## 15. 결론

이 프로젝트는 React 컴포넌트 구조를 연습하면서 실제 서비스 형태의 모바일 웹페이지를 제작하는 것을 목표로 한다.

청첩장이라는 주제는 이미지, 텍스트, 버튼, 지도, 복사 기능, 공유 기능 등 다양한 프론트엔드 요소를 포함하고 있어 React 학습용 프로젝트로 적합하다.

최종 결과물은 모바일에서 자연스럽게 스크롤되며, 하객이 필요한 정보를 쉽게 확인할 수 있는 감성적인 모바일 청첩장 웹앱으로 완성한다.
