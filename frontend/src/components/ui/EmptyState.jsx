import { Inbox } from 'lucide-react';

export default function EmptyState({ title = 'No data yet', description = 'Items will appear here when available.' }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
      <Inbox className="mx-auto mb-3 text-slate-400" size={32} />
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}
