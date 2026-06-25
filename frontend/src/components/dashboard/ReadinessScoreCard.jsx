export default function ReadinessScoreCard({ score = 82 }) {
  return (
    <article className="rounded-lg border border-primary-100 bg-primary-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Placement readiness</p>
      <div className="mt-4 flex items-end gap-2">
        <strong className="text-5xl font-bold text-primary-700">{score}</strong>
        <span className="pb-2 text-lg font-semibold text-primary-700">/100</span>
      </div>
      <p className="mt-3 text-sm text-slate-600">Based on skill assessment, mentoring activity, mock tests, and interview readiness.</p>
    </article>
  );
}
