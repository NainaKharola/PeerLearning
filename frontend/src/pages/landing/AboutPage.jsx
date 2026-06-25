import Footer from '../../components/layout/Footer.jsx';
import Navbar from '../../components/layout/Navbar.jsx';
import PageScaffold from '../PageScaffold.jsx';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <PageScaffold eyebrow="About" title="About PLMM" description="A scalable peer learning platform for guided skill development and placement preparation." />
      </main>
      <Footer />
    </div>
  );
}
