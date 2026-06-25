import BookingCard from '../../components/mentor/BookingCard.jsx';
import SessionCard from '../../components/mentor/SessionCard.jsx';
import PageScaffold from '../PageScaffold.jsx';
export default function BookSessionsPage() {
  return (
    <PageScaffold eyebrow="Booking" title="Book sessions" description="Schedule mentoring, mock interviews, and placement guidance sessions.">
      <div className="grid gap-4 lg:grid-cols-2">
        <BookingCard title="Available slots" slots={['Today 5:00 PM', 'Tomorrow 7:00 PM', 'Sat 10:00 AM', 'Sun 4:00 PM']} />
        <SessionCard title="React interview prep" mentor="Aarav Mehta" startsAt={new Date()} status="Upcoming" />
      </div>
    </PageScaffold>
  );
}
