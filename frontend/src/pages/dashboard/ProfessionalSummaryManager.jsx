import SingletonEditor from "../../components/dashboard/SingletonEditor";

const FIELDS = [
  { name: "careerObjective", label: "Career Objective", type: "textarea" },
  { name: "technicalInterests", label: "Technical Interests", type: "list" },
  { name: "strengths", label: "Strengths", type: "list" },
  { name: "learningMindset", label: "Learning Mindset", type: "textarea" },
  { name: "professionalGoals", label: "Professional Goals", type: "textarea" },
];

const ProfessionalSummaryManager = () => (
  <SingletonEditor
    title="Professional Summary"
    description="Shown in the Professional Summary section of your portfolio."
    resourcePath="/professional-summary"
    fields={FIELDS}
  />
);

export default ProfessionalSummaryManager;
