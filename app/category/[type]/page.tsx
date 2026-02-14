import { notFound } from 'next/navigation';
import { CompanyGrid } from '@/components/company-grid';
import { CompanyCategory, companies } from '@/data/companies';

const categoryConfig: Record<string, { label: CompanyCategory; subtitle: string }> = {
  industry: { label: '산업', subtitle: '산업 파트너 기업 목록' },
  academy: { label: '교육', subtitle: '대학 및 교육기관 파트너 목록' },
  research: { label: '연구', subtitle: '연구기관 파트너 목록' },
  hospital: { label: '의료', subtitle: '의료기관 파트너 목록' },
};

export default function CategoryPage({ params }: { params: { type: string } }) {
  const config = categoryConfig[params.type];

  if (!config) {
    notFound();
  }

  const filtered = companies.filter((company) => company.category === config.label);

  return <CompanyGrid title={`${config.label} 카테고리`} subtitle={config.subtitle} items={filtered} />;
}
