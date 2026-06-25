import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CalendarCheck, GraduationCap } from 'lucide-react';
import Footer from '../../components/layout/Footer.jsx';
import Navbar from '../../components/layout/Navbar.jsx';
import Button from '../../components/ui/Button.jsx';

const features = [
  { icon: GraduationCap, title: 'Mentor matching', text: 'Discover mentors by skill, goal, company, and readiness gap.' },
  { icon: CalendarCheck, title: 'Session booking', text: 'Book mentoring, mock interview, and placement guidance sessions.' },
  { icon: BarChart3, title: 'Progress analytics', text: 'Track assessments, mock tests, and company-wise preparation.' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Peer Learning & Mentoring Platform</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              PLMM
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A structured platform for learners, mentors, and admins to manage skill growth, mentoring, assessments,
              study groups, mock interviews, and placement readiness.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register">
                <Button>
                  Get started <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="secondary">Explore features</Button>
              </Link>
            </div>
          </motion.div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <div className="grid gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-md border border-slate-100 p-4">
                    <Icon className="text-primary-600" size={24} />
                    <h2 className="mt-3 font-semibold text-slate-950">{feature.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{feature.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
