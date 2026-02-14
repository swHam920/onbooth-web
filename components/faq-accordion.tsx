'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '입점 신청은 어떻게 하나요?',
    answer: '고객센터 문의하기를 통해 기본 정보를 남겨주시면 담당자가 1영업일 내 연락드립니다.',
  },
  {
    question: '라운지는 누구나 이용 가능한가요?',
    answer: '자유게시판은 누구나 가능하며, 프라이빗/VIP는 운영 정책에 따라 승인 후 사용 가능합니다.',
  },
  {
    question: '기업 로고는 어떻게 업데이트 되나요?',
    answer: '입점 승인 후 데이터 배열에 추가되며, 즉시 그리드에 자동 반영됩니다.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="font-medium text-slate-900">{faq.question}</span>
              <span className="text-xl text-slate-400">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
