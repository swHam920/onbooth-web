import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loungePosts } from '@/data/lounge';

export default function LoungePostDetailPage({ params }: { params: { board: string; postId: string } }) {
  const post = loungePosts.find((item) => item.board === params.board && item.id === Number(params.postId));

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <header className="border-b border-slate-100 pb-4">
        <h1 className="text-2xl font-semibold text-slate-900">{post.title}</h1>
        <p className="mt-2 text-sm text-slate-500">
          {post.author} · {post.createdAt}
        </p>
      </header>
      <p className="leading-relaxed text-slate-700">{post.content}</p>
      <Link href={`/lounge/${params.board}`} className="inline-block text-sm text-brand-700 underline">
        목록으로 돌아가기
      </Link>
    </article>
  );
}
