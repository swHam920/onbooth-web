# Onbooth Web

Next.js(App Router) + Tailwind CSS 기반의 반응형 플랫폼 초기 구현입니다.

## 구현 범위

- 상단 네비게이션: 산 / 학 / 연 / 병 / 라운지 / 고객센터
- 홈: 입점 기업 로고형 카드 그리드 (데이터 배열 기반 자동 확장)
- 카테고리(산/학/연/병): 공통 그리드 컴포넌트 재사용 + 필터링
- 라운지: 게시판 3종(자유/프라이빗/VIP) + 리스트/글쓰기/상세
- 고객센터: FAQ 아코디언 + 문의하기(mock submit)
- 하이엔드 카드형 UI + 넉넉한 여백 + 반응형 레이아웃

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

## 주요 경로

- `/` : 홈
- `/category/industry` : 산
- `/category/academy` : 학
- `/category/research` : 연
- `/category/hospital` : 병
- `/lounge` : 라운지 메인
- `/lounge/free` : 자유게시판
- `/lounge/private` : 프라이빗(CEO)
- `/lounge/vip` : VIP(오프라인 모임)
- `/support` : 고객센터
