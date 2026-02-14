import { Company } from '@/data/companies';

type CompanyGridProps = {
  title: string;
  subtitle: string;
  items: Company[];
};

export function CompanyGrid({ title, subtitle, items }: CompanyGridProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="text-slate-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((company) => (
          <article
            key={company.id}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-100"
          >
            <div className="mb-4 h-12 rounded-lg bg-gradient-to-r from-slate-100 to-slate-200" />
            <p className="text-sm font-semibold text-slate-900">{company.name}</p>
            <p className="mt-1 text-xs text-slate-500">{company.description}</p>
            <span className="mt-4 inline-flex rounded-full bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">
              {company.category}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
