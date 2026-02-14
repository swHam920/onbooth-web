import { LoungeBoardCard } from '@/components/lounge-board-card';
import { loungeBoards } from '@/data/lounge';

export default function LoungePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">라운지</h1>
        <p className="text-slate-600">원하는 라운지를 선택해 글을 읽고 작성하세요.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {loungeBoards.map((board) => (
          <LoungeBoardCard key={board.id} board={board.id} label={board.label} description={board.description} />
        ))}
      </div>
    </section>
  );
}
