import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loungeBoards, loungePosts, type LoungeBoard } from '@/data/lounge';

const boardMap: Record<string, LoungeBoard> = {
  free: 'free',
  private: 'private',
  vip: 'vip',
};

export default function LoungeBoardPage({ params }: { params: { board: string } }) {
  const boardKey = boardMap[params.board];
  if (!boardKey) {
    notFound();
  }

  const boardInfo = loungeBoards.find((board) => board.id === boardKey);
  const posts = loungePosts.filter((post) => post.board === boardKey);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{boardInfo?.label}</h1>
          <p className="mt-1 text-slate-600">{boardInfo?.description}</p>
        </div>
        <Link href={`/lounge/${boardKey}/write`} className="rounded-xl bg-brand-700 px-4 py-2 text-sm font-semibold text-white">
          글쓰기
        </Link>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/lounge/${boardKey}/${post.id}`}
            className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:border-brand-100"
          >
            <p className="text-lg font-semibold text-slate-900">{post.title}</p>
            <p className="mt-1 text-sm text-slate-500">{post.summary}</p>
            <p className="mt-2 text-xs text-slate-400">
              {post.author} · {post.createdAt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
