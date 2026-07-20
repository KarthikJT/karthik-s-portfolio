import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${align === "center" ? "text-center" : ""}`}
  >
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">{title}</h2>
    {subtitle && <p className="mt-3 text-text-secondary max-w-2xl">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
