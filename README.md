# The New York Times Best Seller Explorer

## 개요
Next.js 로 SSR, 서버라우팅, API 가져오기, styled-jsx 사용해보기

### 사용 옵션
- TypeScript
- App Router

## 이 코드로 해본 것
- `app` 디렉터리 구조 정리
  - `(routes)` 하위로 라우터 구조 묶기
  - `_components`, `_api` 등으로 라우팅과 구분하면서 라우팅 안되게
- nextjs에서 제공하는 `error` 페이지, `loading` 페이지, `not-found` 페이지 만들기
- `use client` 는 한군데서 몰아서 사용하고 가급적 서버 컴포넌트 사용하기
- `cache : no-store` 옵션으로 서버에서 API가져와서 가공후 보여주기
- styled-jsx 사용하기
  - 공통요소 분리해서 import
- CSS 활용하기
  - CSS 변수 : 자주 사용하는 값을 의미있는 변수명으로 치환해서 사용 `--ink-color` `--paper-color` 등
  - 북 페이지에서 grid span으로 칸 묶어 사용하기

## 화면 구현
- CSS 만으로 종이 느낌 나는 페이지, 책갈피 모양 리스트 구현
- 각 장르별 페이지, about 페이지 URL로 개별 접근 가능하게
- 북 페이지에서 Buy 버튼 클릭시 팝업 레이어 사용
- 로딩과 페이지 전환시 레이아웃 움직임이나 플리킹(깜빡임) 최소화
- 베스트 셀러 순위(rank) 상승 하락 함수로 만들어서 보여주기

## 추가로 해보고 싶은 것
- 반응형 페이지
- 공통 상태 관리 사용 (팝업 레이어 관련)
- 로딩 스켈레톤
- 각 출판사 링크에 아이콘 사용(enum 활용)
- 메타 데이터, fav icon 사용
- 밑줄 긋기 효과
- 리스트 소팅
- Weekly / Monthly 구분
