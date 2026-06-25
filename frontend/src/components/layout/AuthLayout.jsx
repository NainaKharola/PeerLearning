import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <main className="grid min-h-screen bg-slate-50 lg:grid-cols-[1fr_0.9fr]">
      <section className="flex items-center justify-center px-4 py-10">
        <Outlet />
      </section>
      <section className="hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-end">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-100">Peer Learning & Mentoring</p>
        <h1 className="mt-3 max-w-xl text-4xl font-bold">Build skills, find mentors, and become placement ready.</h1>
      </section>
    </main>
  );
}
