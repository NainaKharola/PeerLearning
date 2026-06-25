import ProgressCard from '../../components/dashboard/ProgressCard.jsx';
import SkillCard from '../../components/dashboard/SkillCard.jsx';
import PageScaffold from '../PageScaffold.jsx';

export default function LearnerDashboardPage() {
  return (
    <PageScaffold eyebrow="Learner" title="Learner dashboard" description="Personalized learning, mentoring, and placement preparation overview.">
      <div className="grid gap-4 md:grid-cols-3">
        <ProgressCard title="DSA roadmap" value={68} />
        <ProgressCard title="React mastery" value={78} />
        <ProgressCard title="Interview readiness" value={74} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <SkillCard name="Problem Solving" level={72} />
        <SkillCard name="Communication" level={84} />
        <SkillCard name="System Design" level={48} status="Needs focus" />
      </div>
    </PageScaffold>
  );
}
