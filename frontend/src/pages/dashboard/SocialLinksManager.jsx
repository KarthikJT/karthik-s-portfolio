import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "platform", label: "Platform (GitHub, LinkedIn, LeetCode, HackerRank, CodeChef, Twitter, Email, Other)", required: true },
  { name: "url", label: "URL", required: true },
  { name: "order", label: "Display Order", type: "number" },
];

const SocialLinksManager = () => (
  <CollectionManager
    title="Social Links"
    description="Manage the social / coding profile icons shown in the hero and contact sections."
    resourcePath="/social-links"
    fields={FIELDS}
    titleField="platform"
  />
);

export default SocialLinksManager;
