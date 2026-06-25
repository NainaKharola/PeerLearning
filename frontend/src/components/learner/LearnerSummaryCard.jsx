export default function LearnerSummaryCard({ name, goal, readiness }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-950">{name}</h3>
      <p className="mt-1 text-sm text-slate-500">{goal}</p>
      <p className="mt-4 text-sm font-semibold text-primary-700">Readiness {readiness}%</p>
    </article>
  );
}
