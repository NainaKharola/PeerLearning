import Footer from '../../components/layout/Footer.jsx';
import Navbar from '../../components/layout/Navbar.jsx';
import PageScaffold from '../PageScaffold.jsx';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <PageScaffold eyebrow="Features" title="Platform features" description="Authentication, profiles, assessments, matching, booking, groups, resources, placement guidance, analytics, and admin workflows." />
      </main>
      <Footer />
    </div>
  );
}
