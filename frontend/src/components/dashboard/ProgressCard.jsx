import { formatPercent } from '../../utils/formatters.js';

export default function ProgressCard({ title, value }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-950">{title}</h3>
        <span className="text-sm font-bold text-primary-700">{formatPercent(value)}</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-primary-600" style={{ width: `${value}%` }} />
      </div>
    </article>
  );
}
