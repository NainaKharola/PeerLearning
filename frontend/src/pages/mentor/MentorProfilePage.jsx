import MentorProfileCard from '../../components/mentor/MentorProfileCard.jsx';
import PageScaffold from '../PageScaffold.jsx';
export default function MentorProfilePage() {
  return (
    <PageScaffold eyebrow="Mentor" title="Mentor profile" description="Public mentor profile, expertise, availability, ratings, and verification status.">
      <MentorProfileCard name="Aarav Mehta" title="Senior Frontend Mentor" bio="Guides learners through React, UI architecture, project reviews, and interview preparation." skills={['React', 'Architecture', 'Mock Interviews']} />
    </PageScaffold>
  );
}
