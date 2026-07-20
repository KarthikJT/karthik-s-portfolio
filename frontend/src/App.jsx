import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/dashboard/Login";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ProfileManager from "./pages/dashboard/ProfileManager";
import ProfessionalSummaryManager from "./pages/dashboard/ProfessionalSummaryManager";
import EducationManager from "./pages/dashboard/EducationManager";
import SkillsManager from "./pages/dashboard/SkillsManager";
import InternshipsManager from "./pages/dashboard/InternshipsManager";
import ProjectsManager from "./pages/dashboard/ProjectsManager";
import HackathonsManager from "./pages/dashboard/HackathonsManager";
import CertificationsManager from "./pages/dashboard/CertificationsManager";
import AchievementsManager from "./pages/dashboard/AchievementsManager";
import ContactManager from "./pages/dashboard/ContactManager";
import SocialLinksManager from "./pages/dashboard/SocialLinksManager";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * Note: "/manage" is intentionally NOT linked anywhere on the public site
 * (no navbar link, no footer link). It is a hidden route known only to the
 * owner. There is no public signup route anywhere in this app.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/manage/login" element={<Login />} />

      <Route
        path="/manage"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<ProfileManager />} />
        <Route path="summary" element={<ProfessionalSummaryManager />} />
        <Route path="education" element={<EducationManager />} />
        <Route path="skills" element={<SkillsManager />} />
        <Route path="internships" element={<InternshipsManager />} />
        <Route path="projects" element={<ProjectsManager />} />
        <Route path="hackathons" element={<HackathonsManager />} />
        <Route path="certifications" element={<CertificationsManager />} />
        <Route path="achievements" element={<AchievementsManager />} />
        <Route path="contact" element={<ContactManager />} />
        <Route path="social-links" element={<SocialLinksManager />} />
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
