export default function MentorProfileCard({ name, title, bio, skills = [] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">{name}</h2>
      <p className="mt-1 text-sm font-medium text-primary-700">{title}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
