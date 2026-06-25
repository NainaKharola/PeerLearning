import StatCard from '../../components/dashboard/StatCard.jsx';
import PageScaffold from '../PageScaffold.jsx';
export default function AdminDashboardPage() {
  return (
    <PageScaffold eyebrow="Admin" title="Admin dashboard" description="Platform health, users, mentor verification, reports, and analytics.">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Users" value="2,430" trend="+12%" />
        <StatCard label="Mentors" value="184" trend="+9%" />
        <StatCard label="Bookings" value="760" trend="+18%" />
        <StatCard label="Reports" value="12" trend="-4%" />
      </div>
    </PageScaffold>
  );
}
