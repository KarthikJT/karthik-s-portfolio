import { useState } from "react";
import Card from "../Card";
import SectionHeading from "../SectionHeading";
import ProjectModal from "../ProjectModal";

const Projects = ({ projects = [] }) => {
  const [selected, setSelected] = useState(null);
  if (!projects.length) return null;

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Projects" title="Things I've built" subtitle="Click any project to see the full case study." />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project._id}
              className="overflow-hidden cursor-pointer flex flex-col"
              onClick={() => setSelected(project)}
            >
              <div className="h-44 bg-background border-b border-border flex items-center justify-center overflow-hidden">
                {project.banner?.url ? (
                  <img src={project.banner.url} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-text-secondary text-sm px-6 text-center">Project banner can be added from the dashboard</span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 flex-1">{project.shortDescription}</p>
                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs bg-background border border-border px-2.5 py-1 rounded-full text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
