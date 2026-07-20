import Card from "../Card";
import SectionHeading from "../SectionHeading";
import SocialIcons from "../SocialIcons";

const Contact = ({ contact, socialLinks = [] }) => {
  if (!contact) return null;
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Contact" title="Let's connect" align="center" />
        <Card className="p-10 max-w-2xl mx-auto text-center">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Phone</p>
              <p className="font-medium">{contact.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Email</p>
              <p className="font-medium break-all">{contact.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Location</p>
              <p className="font-medium">{contact.location}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <SocialIcons links={socialLinks} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
