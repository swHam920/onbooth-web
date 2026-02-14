export type CompanyCategory = '산업' | '교육' | '연구' | '의료';

export type Company = {
  id: number;
  name: string;
  category: CompanyCategory;
  description: string;
};

export const companies: Company[] = [
  { id: 1, name: 'Astra Bio', category: '산업', description: '정밀 바이오 솔루션' },
  { id: 2, name: 'MediCore Labs', category: '산업', description: '의료 AI 플랫폼' },
  { id: 3, name: 'Blue Genome', category: '연구', description: '유전체 연구기관' },
  { id: 4, name: 'Neo University', category: '교육', description: '산학 협력 대학' },
  { id: 5, name: 'K-Med Center', category: '의료', description: '임상 연계 병원' },
  { id: 6, name: 'Qubit Pharma', category: '산업', description: '신약 개발 스타트업' },
  { id: 7, name: 'Helix Institute', category: '연구', description: '의생명 융합 연구소' },
  { id: 8, name: 'SmartHealth Univ.', category: '교육', description: '헬스케어 특화 대학' },
  { id: 9, name: 'Harmony Hospital', category: '의료', description: '디지털 전환 병원' },
  { id: 10, name: 'Vertex Device', category: '산업', description: '헬스 디바이스 제조' },
  { id: 11, name: 'Insight Research', category: '연구', description: '데이터 기반 연구' },
  { id: 12, name: 'Future Med School', category: '교육', description: '차세대 의학 교육' },
  { id: 13, name: 'Life Bridge Clinic', category: '의료', description: '정밀 치료 클리닉' },
  { id: 14, name: 'Onbooth Partners', category: '산업', description: '플랫폼 운영 파트너' },
];
