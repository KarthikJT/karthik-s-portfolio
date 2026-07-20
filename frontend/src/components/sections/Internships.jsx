import Card from "../Card";
import SectionHeading from "../SectionHeading";

const Internships = ({ internships = [] }) => {
  if (!internships.length) return null;
  return (
    <section id="internships" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Internships" title="Professional experience" />
        <div className="space-y-6">
          {internships.map((intern) => (
            <Card key={intern._id} className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {intern.companyLogo?.url ? (
                    <img src={intern.companyLogo.url} alt={intern.companyName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-accent font-semibold">{intern.companyName?.[0]}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-semibold text-lg">{intern.role}</h3>
                    <span className="text-sm text-text-secondary">{intern.duration}</span>
                  </div>
                  <p className="text-accent font-medium mb-2">{intern.companyName}</p>
                  <p className="text-text-secondary leading-relaxed mb-3">{intern.description}</p>

                  {intern.technologiesUsed?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {intern.technologiesUsed.map((t) => (
                        <span key={t} className="text-xs bg-background border border-border px-3 py-1 rounded-full text-text-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {intern.keyLearnings?.length > 0 && (
                    <ul className="space-y-1 mt-2">
                      {intern.keyLearnings.map((k) => (
                        <li key={k} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-accent mt-1">•</span> {k}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
