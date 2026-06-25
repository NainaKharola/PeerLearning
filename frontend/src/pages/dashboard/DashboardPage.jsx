import BarChartComponent from '../../components/analytics/BarChartComponent.jsx';
import ReadinessScoreCard from '../../components/dashboard/ReadinessScoreCard.jsx';
import StatCard from '../../components/dashboard/StatCard.jsx';
import MentorCard from '../../components/mentor/MentorCard.jsx';
import { mentors, progressData, stats } from '../../data/mockData.js';
import PageScaffold from '../PageScaffold.jsx';

export default function DashboardPage() {
  return (
    <PageScaffold eyebrow="Dashboard" title="Learning command center" description="Track readiness, sessions, skills, and mentor recommendations.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => <StatCard key={item.label} {...item} />)}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <ReadinessScoreCard />
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-semibold text-slate-950">Readiness trend</h2>
          <BarChartComponent data={progressData} />
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}
      </div>
    </PageScaffold>
  );
}
