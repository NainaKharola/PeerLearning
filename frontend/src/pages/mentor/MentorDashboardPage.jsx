import ActivityCard from '../../components/dashboard/ActivityCard.jsx';
import PageScaffold from '../PageScaffold.jsx';
export default function MentorDashboardPage() {
  return (
    <PageScaffold eyebrow="Mentor" title="Mentor dashboard" description="Manage sessions, mentees, reviews, and availability.">
      <div className="grid gap-4 md:grid-cols-3">
        <ActivityCard title="Upcoming session" description="React project review with Demo Learner" time="Today" />
        <ActivityCard title="Pending review" description="Share feedback after DSA mock interview." time="2 hours ago" />
        <ActivityCard title="New mentee request" description="A learner requested placement guidance." time="Yesterday" />
      </div>
    </PageScaffold>
  );
}
