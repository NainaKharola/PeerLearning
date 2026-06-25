import Button from '../ui/Button.jsx';

export default function AssessmentCard({ title, duration, questions }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{questions} questions • {duration}</p>
      <Button className="mt-5">Start Assessment</Button>
    </article>
  );
}
