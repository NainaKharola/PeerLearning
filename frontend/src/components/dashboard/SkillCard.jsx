export default function SkillCard({ name, level, status = 'In progress' }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-slate-950">{name}</h3>
        <span className="text-sm text-slate-500">{level}%</span>
      </div>
      <p className="mt-2 text-sm text-slate-500">{status}</p>
    </article>
  );
}
