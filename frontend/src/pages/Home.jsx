import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import ProfessionalSummary from "../components/sections/ProfessionalSummary";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Internships from "../components/sections/Internships";
import Projects from "../components/sections/Projects";
import Hackathons from "../components/sections/Hackathons";
import Certifications from "../components/sections/Certifications";
import Achievements from "../components/sections/Achievements";
import Contact from "../components/sections/Contact";
import {
  getProfile,
  getProfessionalSummary,
  getEducation,
  getSkills,
  getInternships,
  getProjects,
  getHackathons,
  getCertifications,
  getAchievements,
  getContact,
  getSocialLinks,
} from "../services/api";

const Home = () => {
  const [data, setData] = useState({
    profile: null,
    summary: null,
    education: [],
    skills: [],
    internships: [],
    projects: [],
    hackathons: [],
    certifications: [],
    achievements: [],
    contact: null,
    socialLinks: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      getProfile(),
      getProfessionalSummary(),
      getEducation(),
      getSkills(),
      getInternships(),
      getProjects(),
      getHackathons(),
      getCertifications(),
      getAchievements(),
      getContact(),
      getSocialLinks(),
    ]).then((results) => {
      const [
        profile,
        summary,
        education,
        skills,
        internships,
        projects,
        hackathons,
        certifications,
        achievements,
        contact,
        socialLinks,
      ] = results;

      setData({
        profile: profile.status === "fulfilled" ? profile.value.data : null,
        summary: summary.status === "fulfilled" ? summary.value.data : null,
        education: education.status === "fulfilled" ? education.value.data : [],
        skills: skills.status === "fulfilled" ? skills.value.data : [],
        internships: internships.status === "fulfilled" ? internships.value.data : [],
        projects: projects.status === "fulfilled" ? projects.value.data : [],
        hackathons: hackathons.status === "fulfilled" ? hackathons.value.data : [],
        certifications: certifications.status === "fulfilled" ? certifications.value.data : [],
        achievements: achievements.status === "fulfilled" ? achievements.value.data : [],
        contact: contact.status === "fulfilled" ? contact.value.data : null,
        socialLinks: socialLinks.status === "fulfilled" ? socialLinks.value.data : [],
      });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-text-secondary">Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar name={data.profile?.name} />
      <Hero profile={data.profile} socialLinks={data.socialLinks} />
      <About profile={data.profile} />
      <ProfessionalSummary summary={data.summary} />
      <Education education={data.education} />
      <Skills skills={data.skills} />
      <Internships internships={data.internships} />
      <Projects projects={data.projects} />
      <Hackathons hackathons={data.hackathons} />
      <Certifications certifications={data.certifications} />
      <Achievements achievements={data.achievements} />
      <Contact contact={data.contact} socialLinks={data.socialLinks} />
      <Footer name={data.profile?.name} />
    </div>
  );
};

export default Home;
