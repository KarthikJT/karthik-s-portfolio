import Card from "../Card";
import SectionHeading from "../SectionHeading";

const Skills = ({ skills = [] }) => {
  if (!skills.length) return null;
  return (
    <section id="skills" className="py-20 bg-card/40">
      <div className="section-container">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <Card key={group._id} className="p-6">
              <h3 className="font-semibold mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-background border border-border px-3 py-1.5 rounded-full text-text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
