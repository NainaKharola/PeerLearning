import { CalendarClock } from 'lucide-react';
import { formatDate } from '../../utils/formatters.js';

export default function SessionCard({ title, mentor, startsAt, status }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <h3 className="font-semibold text-slate-950">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">with {mentor}</p>
      <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
        <CalendarClock size={16} /> {formatDate(startsAt, 'MMM d, h:mm a')}
      </p>
      <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{status}</span>
    </article>
  );
}
