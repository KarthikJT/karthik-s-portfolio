import Card from "../Card";
import SectionHeading from "../SectionHeading";

const ProfessionalSummary = ({ summary }) => {
  if (!summary) return null;
  return (
    <section id="summary" className="py-20 bg-card/40">
      <div className="section-container">
        <SectionHeading eyebrow="Professional Summary" title="How I approach my work" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-semibold text-lg mb-2">Career Objective</h3>
            <p className="text-text-secondary leading-relaxed">{summary.careerObjective}</p>
          </Card>
          <Card className="p-8">
            <h3 className="font-semibold text-lg mb-2">Professional Goals</h3>
            <p className="text-text-secondary leading-relaxed">{summary.professionalGoals}</p>
          </Card>
          <Card className="p-8">
            <h3 className="font-semibold text-lg mb-3">Technical Interests</h3>
            <ul className="space-y-2">
              {summary.technicalInterests?.map((item) => (
                <li key={item} className="text-text-secondary flex items-start gap-2">
                  <span className="text-accent mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <h3 className="font-semibold text-lg mb-3">Strengths</h3>
            <ul className="space-y-2">
              {summary.strengths?.map((item) => (
                <li key={item} className="text-text-secondary flex items-start gap-2">
                  <span className="text-accent mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 md:col-span-2">
            <h3 className="font-semibold text-lg mb-2">Learning Mindset</h3>
            <p className="text-text-secondary leading-relaxed">{summary.learningMindset}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
