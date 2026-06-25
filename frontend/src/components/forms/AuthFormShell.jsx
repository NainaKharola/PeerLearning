export default function AuthFormShell({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <h1 className="text-2xl font-bold text-slate-950">{title}</h1>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}
