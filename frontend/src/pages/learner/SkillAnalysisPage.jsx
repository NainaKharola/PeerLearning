import SkillAnalysisCard from '../../components/assessment/SkillAnalysisCard.jsx';
import PageScaffold from '../PageScaffold.jsx';
export default function SkillAnalysisPage() {
  return (
    <PageScaffold eyebrow="Assessment" title="Skill gap analysis" description="Compare current capabilities with target placement requirements.">
      <div className="grid gap-4 md:grid-cols-3">
        <SkillAnalysisCard skill="DSA" current={62} target={85} />
        <SkillAnalysisCard skill="Frontend" current={78} target={90} />
        <SkillAnalysisCard skill="Communication" current={84} target={88} />
      </div>
    </PageScaffold>
  );
}
