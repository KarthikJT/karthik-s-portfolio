import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LINKS = [
  { to: "/manage/profile", label: "Profile & Hero", desc: "Name, photo, about, contact snapshot" },
  { to: "/manage/summary", label: "Professional Summary", desc: "Career objective, strengths, goals" },
  { to: "/manage/education", label: "Education", desc: "Timeline of your academic background" },
  { to: "/manage/skills", label: "Skills", desc: "Categorized technical skills" },
  { to: "/manage/internships", label: "Internships", desc: "Work experience and internships" },
  { to: "/manage/projects", label: "Projects", desc: "Project showcase with images and links" },
  { to: "/manage/hackathons", label: "Hackathons", desc: "Competitions and events" },
  { to: "/manage/certifications", label: "Certifications", desc: "Certificates and credentials" },
  { to: "/manage/achievements", label: "Achievements", desc: "Milestones and recognition" },
  { to: "/manage/contact", label: "Contact Details", desc: "Phone, email, location" },
  { to: "/manage/social-links", label: "Social Links", desc: "GitHub, LinkedIn, coding profiles" },
];

const DashboardHome = () => {
  const { admin } = useAuth();
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Welcome back{admin?.name ? `, ${admin.name.split(" ")[0]}` : ""}</h1>
      <p className="text-text-secondary text-sm mb-8">
        Everything you edit here updates your public portfolio immediately after saving.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="bg-card border border-border rounded-xl2 p-5 hover:border-accent hover:shadow-hover transition-all"
          >
            <p className="font-semibold mb-1">{link.label}</p>
            <p className="text-text-secondary text-sm">{link.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
