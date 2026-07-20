import CollectionManager from "../../components/dashboard/CollectionManager";

const FIELDS = [
  { name: "name", label: "Certificate Name", required: true },
  { name: "issuingOrganization", label: "Issuing Organization", required: true },
  { name: "issueDate", label: "Issue Date" },
  { name: "credentialId", label: "Credential ID" },
  { name: "verificationLink", label: "Verification Link" },
  { name: "order", label: "Display Order", type: "number" },
];

const CertificationsManager = () => (
  <CollectionManager
    title="Certifications"
    description="Manage certifications. Save an entry first, then upload its certificate image."
    resourcePath="/certifications"
    fields={FIELDS}
    titleField="name"
    imageActions={[
      {
        label: "Upload Image",
        fieldName: "certificateImage",
        multiple: false,
        buildEndpoint: (item) => `/certifications/${item._id}/image`,
      },
    ]}
  />
);

export default CertificationsManager;
