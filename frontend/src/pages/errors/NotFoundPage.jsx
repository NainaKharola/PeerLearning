import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button.jsx';
export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
        <Link to="/dashboard"><Button className="mt-6">Back to dashboard</Button></Link>
      </div>
    </main>
  );
}
