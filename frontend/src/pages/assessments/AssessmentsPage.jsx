import AssessmentCard from '../../components/assessment/AssessmentCard.jsx';
import PageScaffold from '../PageScaffold.jsx';

export default function AssessmentsPage() {
  return (
    <PageScaffold eyebrow="Assessments" title="Skill assessments" description="Baseline learner skills and identify practical improvement areas.">
      <div className="grid gap-4 md:grid-cols-3">
        <AssessmentCard title="Frontend fundamentals" questions={25} duration="35 min" />
        <AssessmentCard title="DSA benchmark" questions={12} duration="60 min" />
        <AssessmentCard title="Communication readiness" questions={18} duration="25 min" />
      </div>
    </PageScaffold>
  );
}
