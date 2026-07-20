import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/40 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card rounded-xl2 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-soft"
        >
          {project.banner?.url && (
            <img src={project.banner.url} alt={project.title} className="w-full h-56 object-cover rounded-t-xl2" />
          )}
          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 flex-shrink-0 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                ✕
              </button>
            </div>

            {project.problemStatement && (
              <div className="mb-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-1">Problem Statement</h4>
                <p className="text-text-secondary">{project.problemStatement}</p>
              </div>
            )}
            {project.solution && (
              <div className="mb-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-1">Solution</h4>
                <p className="text-text-secondary">{project.solution}</p>
              </div>
            )}
            {project.features?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-2">Features</h4>
                <ul className="space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-text-secondary flex gap-2 items-start">
                      <span className="text-accent mt-1">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.techStack?.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="text-xs bg-background border border-border px-3 py-1 rounded-full text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {project.images?.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {project.images.map((img) => (
                  <img key={img.publicId || img.url} src={img.url} alt="" className="rounded-lg object-cover h-32 w-full" />
                ))}
              </div>
            )}

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-5 py-2.5 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  GitHub Repository
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent-dark transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectModal;
