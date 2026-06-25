export default function TestResultCard({ title, score, feedback }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <strong className="mt-2 block text-3xl text-slate-950">{score}%</strong>
      <p className="mt-2 text-sm text-slate-600">{feedback}</p>
    </article>
  );
}
