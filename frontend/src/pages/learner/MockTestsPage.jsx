import AssessmentCard from '../../components/assessment/AssessmentCard.jsx';
import TestResultCard from '../../components/assessment/TestResultCard.jsx';
import PageScaffold from '../PageScaffold.jsx';
export default function MockTestsPage() {
  return (
    <PageScaffold eyebrow="Tests" title="Mock tests" description="Attempt aptitude, coding, and role-specific readiness tests.">
      <div className="grid gap-4 md:grid-cols-3">
        <AssessmentCard title="Aptitude sprint" questions={30} duration="45 min" />
        <AssessmentCard title="DSA practice" questions={4} duration="90 min" />
        <TestResultCard title="Latest score" score={76} feedback="Strong improvement in arrays and reasoning." />
      </div>
    </PageScaffold>
  );
}
