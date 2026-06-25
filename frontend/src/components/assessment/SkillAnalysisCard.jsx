export default function SkillAnalysisCard({ skill, current, target }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-950">{skill}</h3>
      <p className="mt-2 text-sm text-slate-500">Current {current}% • Target {target}%</p>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${current}%` }} />
      </div>
    </article>
  );
}
