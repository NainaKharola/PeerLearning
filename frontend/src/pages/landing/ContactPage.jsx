import Footer from '../../components/layout/Footer.jsx';
import Navbar from '../../components/layout/Navbar.jsx';
import PageScaffold from '../PageScaffold.jsx';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <PageScaffold eyebrow="Contact" title="Contact the PLMM team" description="Use this page as the future entry point for learner, mentor, institution, and placement partnership queries." />
      </main>
      <Footer />
    </div>
  );
}
