import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "companyName", label: "Company Name", required: true },
  { name: "role", label: "Role", required: true },
  { name: "duration", label: "Duration", required: true },
  { name: "description", label: "Description", type: "textarea" },
  { name: "technologiesUsed", label: "Technologies Used", type: "list" },
  { name: "keyLearnings", label: "Key Learnings", type: "list" },
  { name: "order", label: "Display Order", type: "number" },
];

const InternshipsManager = () => (
  <CollectionManager
    title="Internships"
    description="Manage your internship experience. Save an entry first, then upload its company logo."
    resourcePath="/internships"
    fields={FIELDS}
    titleField="companyName"
    imageActions={[
      {
        label: "Upload Logo",
        fieldName: "companyLogo",
        multiple: false,
        buildEndpoint: (item) => `/internships/${item._id}/logo`,
      },
    ]}
  />
);

export default InternshipsManager;
