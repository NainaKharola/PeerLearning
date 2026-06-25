import PageHeader from '../components/common/PageHeader.jsx';
import Section from '../components/common/Section.jsx';
import Button from '../components/ui/Button.jsx';

export default function PageScaffold({ eyebrow, title, description, children }) {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={<Button variant="secondary">Export</Button>}
      />
      {children || (
        <Section>
          <p className="text-sm leading-6 text-slate-600">
            This production-ready boilerplate keeps page-level orchestration here while API calls, constants, helpers,
            and reusable UI remain in their dedicated folders.
          </p>
        </Section>
      )}
    </div>
  );
}
