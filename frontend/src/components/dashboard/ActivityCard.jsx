export default function ActivityCard({ title, description, time }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <h3 className="font-semibold text-slate-950">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      {time && <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">{time}</p>}
    </article>
  );
}
