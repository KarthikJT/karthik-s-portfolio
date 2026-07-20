import { motion } from "framer-motion";
import Card from "../Card";
import SectionHeading from "../SectionHeading";

const Education = ({ education = [] }) => {
  if (!education.length) return null;
  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic journey" />
        <div className="relative border-l border-border pl-8 space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu._id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-accent" />
              <Card className="p-6">
                <div className="flex flex-wrap justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{edu.institution}</h3>
                  <span className="text-sm text-text-secondary">{edu.duration}</span>
                </div>
                <p className="text-accent font-medium mb-1">
                  {edu.degree}
                  {edu.branch ? ` — ${edu.branch}` : ""}
                </p>
                {edu.score && <p className="text-text-secondary text-sm mb-2">{edu.score}</p>}
                {edu.relevantCoursework?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.relevantCoursework.map((c) => (
                      <span
                        key={c}
                        className="text-xs bg-background border border-border px-3 py-1 rounded-full text-text-secondary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
