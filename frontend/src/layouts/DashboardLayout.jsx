import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NAV_ITEMS = [
  { to: "/manage", label: "Overview", end: true },
  { to: "/manage/profile", label: "Profile & Hero" },
  { to: "/manage/summary", label: "Professional Summary" },
  { to: "/manage/education", label: "Education" },
  { to: "/manage/skills", label: "Skills" },
  { to: "/manage/internships", label: "Internships" },
  { to: "/manage/projects", label: "Projects" },
  { to: "/manage/hackathons", label: "Hackathons" },
  { to: "/manage/certifications", label: "Certifications" },
  { to: "/manage/achievements", label: "Achievements" },
  { to: "/manage/contact", label: "Contact Details" },
  { to: "/manage/social-links", label: "Social Links" },
];

const DashboardLayout = () => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/manage/login");
  };

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-64 flex-shrink-0 border-r border-border bg-card hidden md:flex flex-col">
        <div className="p-6 border-b border-border">
          <p className="font-display font-semibold text-lg">Portfolio CMS</p>
          <p className="text-xs text-text-secondary mt-1 truncate">{admin?.email}</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block px-6 py-2.5 text-sm ${
                  isActive
                    ? "text-accent font-medium bg-accent/5 border-r-2 border-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-6 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full text-sm border border-border rounded-full py-2 hover:border-accent hover:text-accent transition-colors"
          >
            Log out
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="p-6 md:p-10 max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
