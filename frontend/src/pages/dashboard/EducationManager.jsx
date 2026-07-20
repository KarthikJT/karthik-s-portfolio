import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "institution", label: "Institution Name", required: true },
  { name: "degree", label: "Degree", required: true },
  { name: "branch", label: "Branch" },
  { name: "duration", label: "Duration", required: true },
  { name: "score", label: "CGPA / Percentage" },
  { name: "relevantCoursework", label: "Relevant Coursework", type: "list" },
  { name: "order", label: "Display Order", type: "number" },
];

const EducationManager = () => (
  <CollectionManager
    title="Education"
    description="Manage the education timeline shown on your portfolio."
    resourcePath="/education"
    fields={FIELDS}
    titleField="institution"
  />
);

export default EducationManager;
