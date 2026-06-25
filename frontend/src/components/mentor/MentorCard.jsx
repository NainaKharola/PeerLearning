import { Star } from 'lucide-react';
import Button from '../ui/Button.jsx';

export default function MentorCard({ mentor }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-950">{mentor.name}</h3>
          <p className="text-sm text-slate-500">{mentor.role}</p>
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold text-amber-600">
          <Star size={16} fill="currentColor" /> {mentor.rating}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {mentor.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            {skill}
          </span>
        ))}
      </div>
      <Button className="mt-5 w-full">View Profile</Button>
    </article>
  );
}
