import SingletonEditor from "../../components/dashboard/SingletonEditor";

const FIELDS = [
  { name: "phone", label: "Phone" },
  { name: "email", label: "Email" },
  { name: "location", label: "Location" },
];

const ContactManager = () => (
  <SingletonEditor
    title="Contact Details"
    description="Shown in the Contact section of your portfolio."
    resourcePath="/contact"
    fields={FIELDS}
  />
);

export default ContactManager;
