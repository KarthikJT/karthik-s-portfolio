import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "category", label: "Category (e.g. Programming Languages, Cloud, VLSI & Hardware)", required: true },
  { name: "items", label: "Skills in this category", type: "list", required: true },
  { name: "order", label: "Display Order", type: "number" },
];

const SkillsManager = () => (
  <CollectionManager
    title="Skills"
    description="Manage skill categories and the chips shown under each one."
    resourcePath="/skills"
    fields={FIELDS}
    titleField="category"
  />
);

export default SkillsManager;
