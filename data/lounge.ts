export type LoungeBoard = 'free' | 'private' | 'vip';

export type LoungePost = {
  id: number;
  board: LoungeBoard;
  title: string;
  author: string;
  createdAt: string;
  summary: string;
  content: string;
};

export const loungeBoards: { id: LoungeBoard; label: string; description: string }[] = [
  { id: 'free', label: '자유게시판', description: '누구나 자유롭게 소통하는 공간' },
  { id: 'private', label: '프라이빗(CEO)', description: 'CEO 전용 비공개 네트워킹 공간' },
  { id: 'vip', label: 'VIP(오프라인 모임)', description: 'VIP 오프라인 모임 공지와 후기' },
];

export const loungePosts: LoungePost[] = [
  {
    id: 101,
    board: 'free',
    title: '신규 파트너십 밋업 제안드립니다',
    author: '김현우',
    createdAt: '2026-02-10',
    summary: '산/학/연/병 협업을 위한 자유 밋업 제안',
    content: '다음 달 첫째 주에 온라인 밋업을 열어 협업 사례를 공유하면 어떨까요?',
  },
  {
    id: 102,
    board: 'free',
    title: '온부스 플랫폼 사용 후기',
    author: '정수민',
    createdAt: '2026-02-12',
    summary: '초기 입점 후 얻은 네트워킹 인사이트',
    content: '입점 후 2주 동안 8개 기관과 접점을 만들 수 있었습니다. 특히 공동 PoC 논의가 활발했습니다.',
  },
  {
    id: 201,
    board: 'private',
    title: 'CEO 라운드테이블 아젠다 공유',
    author: '박준호',
    createdAt: '2026-02-08',
    summary: '상반기 성장 전략 아젠다 사전 공유',
    content: '이번 라운드테이블에서는 글로벌 진출과 공동 연구계약 표준화를 중점 논의하려 합니다.',
  },
  {
    id: 301,
    board: 'vip',
    title: '3월 VIP 오프라인 네트워킹 일정',
    author: '운영팀',
    createdAt: '2026-02-09',
    summary: '서울 강남권에서 오프라인 모임 개최 예정',
    content: '3월 15일 18:30, 강남 코엑스 인근 라운지에서 진행됩니다. 사전 신청자 대상 초청장을 발송드립니다.',
  },
];
