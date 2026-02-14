import Link from 'next/link';
import { LoungeBoard } from '@/data/lounge';

type LoungeBoardCardProps = {
  board: LoungeBoard;
  label: string;
  description: string;
};

export function LoungeBoardCard({ board, label, description }: LoungeBoardCardProps) {
  return (
    <Link
      href={`/lounge/${board}`}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-100"
    >
      <h2 className="text-xl font-semibold text-slate-900">{label}</h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </Link>
  );
}
