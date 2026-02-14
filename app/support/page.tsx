import { FaqAccordion } from '@/components/faq-accordion';
import { InquiryForm } from '@/components/inquiry-form';

export default function SupportPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">고객센터</h1>
        <p className="text-slate-600">FAQ 확인 후 문의를 남겨주세요.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-slate-900">FAQ</h2>
          <FaqAccordion />
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold text-slate-900">문의하기</h2>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
