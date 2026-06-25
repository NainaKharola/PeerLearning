import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button.jsx';
export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Unauthorized</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Access restricted</h1>
        <p className="mt-3 text-slate-600">Your current role does not have permission to view this page.</p>
        <Link to="/dashboard"><Button className="mt-6">Back to dashboard</Button></Link>
      </div>
    </main>
  );
}
