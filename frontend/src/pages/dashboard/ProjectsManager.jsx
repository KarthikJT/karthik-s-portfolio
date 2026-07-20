import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "title", label: "Project Title", required: true },
  { name: "shortDescription", label: "Short Description", type: "textarea" },
  { name: "problemStatement", label: "Problem Statement", type: "textarea" },
  { name: "solution", label: "Solution", type: "textarea" },
  { name: "features", label: "Features", type: "list" },
  { name: "techStack", label: "Technology Stack", type: "list" },
  { name: "githubUrl", label: "GitHub Repository URL" },
  { name: "liveDemoUrl", label: "Live Demo URL" },
  { name: "order", label: "Display Order", type: "number" },
];

const ProjectsManager = () => (
  <CollectionManager
    title="Projects"
    description="Manage your project showcase. Save a project first, then upload its banner and gallery images."
    resourcePath="/projects"
    fields={FIELDS}
    titleField="title"
    imageActions={[
      {
        label: "Upload Banner",
        fieldName: "banner",
        multiple: false,
        buildEndpoint: (item) => `/projects/${item._id}/banner`,
      },
      {
        label: "Add Gallery Images",
        fieldName: "images",
        multiple: true,
        buildEndpoint: (item) => `/projects/${item._id}/images`,
      },
    ]}
  />
);

export default ProjectsManager;
