import Card from "../Card";
import SectionHeading from "../SectionHeading";

const Certifications = ({ certifications = [] }) => {
  if (!certifications.length) return null;
  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Certifications" title="Licenses & certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert._id} className="p-6 flex flex-col">
              <div className="h-28 bg-background border border-border rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {cert.certificateImage?.url ? (
                  <img src={cert.certificateImage.url} alt={cert.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-text-secondary px-4 text-center">Certificate image can be added from the dashboard</span>
                )}
              </div>
              <h3 className="font-semibold mb-1 leading-snug">{cert.name}</h3>
              {cert.issuingOrganization && <p className="text-accent text-sm mb-1">{cert.issuingOrganization}</p>}
              {cert.issueDate && <p className="text-text-secondary text-xs mb-3">{cert.issueDate}</p>}
              {cert.credentialId && (
                <p className="text-text-secondary text-xs mb-3">Credential ID: {cert.credentialId}</p>
              )}
              {cert.verificationLink && (
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-sm border border-border rounded-full px-4 py-2 text-center hover:border-accent hover:text-accent transition-colors"
                >
                  Verify
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
