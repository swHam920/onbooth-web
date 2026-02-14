import { CompanyGrid } from '@/components/company-grid';
import { companies } from '@/data/companies';

export default function HomePage() {
  return (
    <CompanyGrid
      title="입점 기업"
      subtitle="산/학/연/병 파트너사가 자동 확장형 그리드로 노출됩니다."
      items={companies}
    />
  );
}
