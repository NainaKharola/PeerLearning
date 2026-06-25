export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} PLMM. Peer learning, mentoring, and placement readiness.
      </div>
    </footer>
  );
}
