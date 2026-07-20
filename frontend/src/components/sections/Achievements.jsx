import Card from "../Card";
import SectionHeading from "../SectionHeading";

const Achievements = ({ achievements = [] }) => {
  if (!achievements.length) return null;
  return (
    <section id="achievements" className="py-20 bg-card/40">
      <div className="section-container">
        <SectionHeading eyebrow="Achievements" title="Milestones & recognition" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <Card key={a._id} className="p-6">
              {a.image?.url && (
                <img src={a.image.url} alt={a.title} className="w-full h-32 object-cover rounded-lg mb-4" />
              )}
              <h3 className="font-semibold mb-1">{a.title}</h3>
              {a.date && <p className="text-text-secondary text-xs mb-2">{a.date}</p>}
              {a.description && <p className="text-text-secondary text-sm mb-3">{a.description}</p>}
              {a.supportingLink && (
                <a href={a.supportingLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                  Learn more →
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
