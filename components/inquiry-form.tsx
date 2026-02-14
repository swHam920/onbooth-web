'use client';

import { FormEvent, useState } from 'react';

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
          이름
        </label>
        <input
          id="name"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-2 outline-none ring-brand-500/30 focus:ring"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-2 outline-none ring-brand-500/30 focus:ring"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
          문의 내용
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full rounded-xl border border-slate-300 px-4 py-2 outline-none ring-brand-500/30 focus:ring"
        />
      </div>
      <button type="submit" className="rounded-xl bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500">
        문의 제출
      </button>
      {submitted ? <p className="text-sm text-emerald-600">문의가 접수되었습니다. (mock submit)</p> : null}
    </form>
  );
}
