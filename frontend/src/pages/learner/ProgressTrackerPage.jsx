import ProgressChartComponent from '../../components/analytics/ProgressChartComponent.jsx';
import { progressData } from '../../data/mockData.js';
import PageScaffold from '../PageScaffold.jsx';
export default function ProgressTrackerPage() {
  return (
    <PageScaffold eyebrow="Progress" title="Progress tracker" description="Visualize learner growth across assessments, sessions, and milestones.">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><ProgressChartComponent data={progressData} /></div>
    </PageScaffold>
  );
}
