import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "eventName", label: "Event Name", required: true },
  { name: "organizer", label: "Organizer" },
  { name: "problemStatement", label: "Problem Statement", type: "textarea" },
  { name: "solution", label: "Solution", type: "textarea" },
  { name: "result", label: "Result" },
  { name: "year", label: "Year" },
  { name: "githubUrl", label: "GitHub Repository URL" },
  { name: "order", label: "Display Order", type: "number" },
];

const HackathonsManager = () => (
  <CollectionManager
    title="Hackathons"
    description="Manage hackathons and competitions. Save an entry first, then upload photos and a certificate."
    resourcePath="/hackathons"
    fields={FIELDS}
    titleField="eventName"
    imageActions={[
      {
        label: "Add Photos",
        fieldName: "photos",
        multiple: true,
        buildEndpoint: (item) => `/hackathons/${item._id}/photos`,
      },
      {
        label: "Upload Certificate",
        fieldName: "certificate",
        multiple: false,
        buildEndpoint: (item) => `/hackathons/${item._id}/certificate`,
      },
    ]}
  />
);

export default HackathonsManager;
