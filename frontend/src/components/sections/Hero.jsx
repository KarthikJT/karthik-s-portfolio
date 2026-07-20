import { motion } from "framer-motion";
import SocialIcons from "../SocialIcons";

const Hero = ({ profile, socialLinks }) => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            👋 Hello, I'm
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-4">
            {profile?.name?.split(" ")[0] || "Purvi"}{" "}
            <span className="text-accent">{profile?.name?.split(" ").slice(1).join(" ") || "S Kiran"}</span>
          </h1>
          <p className="uppercase tracking-widest text-text-secondary text-sm font-medium mb-4">
            {profile?.designation}
          </p>
          <div className="w-14 h-0.5 bg-accent mb-6" />
          <p className="text-text-secondary text-lg mb-8 max-w-md">{profile?.tagline}</p>

          <div className="mb-8">
            <SocialIcons links={socialLinks} />
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-dark transition-colors flex items-center gap-2"
            >
              View My Work <span aria-hidden>→</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-border px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-border bg-card overflow-hidden flex items-center justify-center">
            {profile?.profilePhoto?.url ? (
              <img
                src={profile.profilePhoto.url}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-text-secondary text-sm px-8 text-center">
                Profile photo can be uploaded from the owner dashboard
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {profile?.stats && (
        <div className="section-container mt-16">
          <div className="bg-card border border-border rounded-xl2 shadow-card grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { label: "Projects Completed", value: profile.stats.projectsCompleted },
              { label: "Hackathons", value: profile.stats.hackathons },
              { label: "Certifications", value: profile.stats.certifications },
              { label: "Internships", value: profile.stats.internships },
            ].map((stat) => (
              <div key={stat.label} className="p-6 text-center">
                <p className="text-3xl font-semibold text-accent">{stat.value}+</p>
                <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
