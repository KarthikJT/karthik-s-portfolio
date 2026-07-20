import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "title", label: "Title", required: true },
  { name: "description", label: "Description", type: "textarea" },
  { name: "date", label: "Date" },
  { name: "supportingLink", label: "Supporting Link" },
  { name: "order", label: "Display Order", type: "number" },
];

const AchievementsManager = () => (
  <CollectionManager
    title="Achievements"
    description="Manage achievements. Save an entry first, then optionally upload an image."
    resourcePath="/achievements"
    fields={FIELDS}
    titleField="title"
    imageActions={[
      {
        label: "Upload Image",
        fieldName: "image",
        multiple: false,
        buildEndpoint: (item) => `/achievements/${item._id}/image`,
      },
    ]}
  />
);

export default AchievementsManager;
