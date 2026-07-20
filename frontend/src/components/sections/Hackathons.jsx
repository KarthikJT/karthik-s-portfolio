import Card from "../Card";
import SectionHeading from "../SectionHeading";

const Hackathons = ({ hackathons = [] }) => {
  if (!hackathons.length) return null;
  return (
    <section id="hackathons" className="py-20 bg-card/40">
      <div className="section-container">
        <SectionHeading eyebrow="Hackathons" title="Competitions & events" />
        <div className="grid md:grid-cols-2 gap-6">
          {hackathons.map((h) => (
            <Card key={h._id} className="p-6">
              <div className="flex flex-wrap justify-between gap-2 mb-1">
                <h3 className="font-semibold text-lg">{h.eventName}</h3>
                {h.year && <span className="text-sm text-text-secondary">{h.year}</span>}
              </div>
              {h.organizer && <p className="text-accent font-medium text-sm mb-2">{h.organizer}</p>}
              {h.problemStatement && <p className="text-text-secondary text-sm mb-2">{h.problemStatement}</p>}
              {h.result && (
                <span className="inline-block text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                  {h.result}
                </span>
              )}
              {(h.githubUrl || h.certificate?.url) && (
                <div className="flex gap-3 mt-4">
                  {h.githubUrl && (
                    <a href={h.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                      GitHub →
                    </a>
                  )}
                  {h.certificate?.url && (
                    <a href={h.certificate.url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                      Certificate →
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
