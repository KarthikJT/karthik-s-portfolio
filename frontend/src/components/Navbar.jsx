import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Summary", id: "summary" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  
  { label: "Projects", id: "projects" },
  { label: "Hackathons", id: "hackathons" },
  { label: "Certifications", id: "certifications" },

  { label: "Contact", id: "contact" },
];

const Navbar = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = (name || "J T")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const handleNavClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 font-display font-semibold text-lg"
        >
          <span className="w-9 h-9 rounded-full border border-accent text-accent flex items-center justify-center text-sm">
            {initials}
          </span>
          <span className="hidden sm:inline">{name || "Karthik JT"}</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-text-secondary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="section-container flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left py-3 text-text-secondary hover:text-accent border-b border-border/60 last:border-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
