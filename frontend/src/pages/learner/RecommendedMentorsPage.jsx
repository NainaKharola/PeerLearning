import MentorCard from '../../components/mentor/MentorCard.jsx';
import { mentors } from '../../data/mockData.js';
import PageScaffold from '../PageScaffold.jsx';
export default function RecommendedMentorsPage() {
  return (
    <PageScaffold eyebrow="Mentors" title="Recommended mentors" description="Mentor discovery and matching based on learner goals and gaps.">
      <div className="grid gap-4 md:grid-cols-3">{mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}</div>
    </PageScaffold>
  );
}
