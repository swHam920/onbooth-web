import Link from 'next/link';

export default function LoungeWritePage({ params }: { params: { board: string } }) {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">글쓰기</h1>
        <p className="mt-1 text-slate-600">{params.board} 게시판에 등록할 목업 폼입니다.</p>
      </div>
      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <input placeholder="제목" className="w-full rounded-xl border border-slate-300 px-4 py-2" />
        <textarea rows={8} placeholder="내용" className="w-full rounded-xl border border-slate-300 px-4 py-2" />
        <button type="button" className="rounded-xl bg-brand-700 px-4 py-2 text-sm font-semibold text-white">
          임시 저장(mock)
        </button>
      </form>
      <Link href={`/lounge/${params.board}`} className="text-sm text-brand-700 underline">
        목록으로 돌아가기
      </Link>
    </section>
  );
}
