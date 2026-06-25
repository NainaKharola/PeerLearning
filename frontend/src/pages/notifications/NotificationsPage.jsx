import EmptyState from '../../components/ui/EmptyState.jsx';
import PageScaffold from '../PageScaffold.jsx';
export default function NotificationsPage() {
  return (
    <PageScaffold eyebrow="Notifications" title="Notifications" description="System, session, mentor, and progress updates.">
      <EmptyState title="No unread notifications" description="Important updates will appear here." />
    </PageScaffold>
  );
}
