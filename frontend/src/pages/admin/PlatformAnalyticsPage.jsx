import PieChartComponent from '../../components/analytics/PieChartComponent.jsx';
import ProgressChartComponent from '../../components/analytics/ProgressChartComponent.jsx';
import { progressData, skillData } from '../../data/mockData.js';
import PageScaffold from '../PageScaffold.jsx';
export default function PlatformAnalyticsPage() {
  return (
    <PageScaffold eyebrow="Analytics" title="Platform analytics" description="Track growth, readiness, skill distribution, and engagement metrics.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><ProgressChartComponent data={progressData} /></div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><PieChartComponent data={skillData} /></div>
      </div>
    </PageScaffold>
  );
}
