/**
 * One-time setup script.
 * Run with: npm run seed
 *
 * - Creates the single owner (Admin) account from OWNER_EMAIL / OWNER_PASSWORD
 *   in .env (skips if an admin already exists).
 * - Populates every collection with Karthik JT's real resume content so
 *   the portfolio is not empty on first load. The owner can then edit/replace
 *   any of this from the /manage dashboard - nothing here is hardcoded into
 *   the frontend.
 *
 * Safe to re-run: it clears and re-inserts content collections each time,
 * but never touches the Admin collection if an owner already exists.
 */
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");

const Admin = require("../models/Admin");
const Profile = require("../models/Profile");
const ProfessionalSummary = require("../models/ProfessionalSummary");
const Education = require("../models/Education");
const Skill = require("../models/Skill");
const Internship = require("../models/Internship");
const Project = require("../models/Project");
const Hackathon = require("../models/Hackathon");
const Certification = require("../models/Certification");
const Achievement = require("../models/Achievement");
const Contact = require("../models/Contact");
const SocialLink = require("../models/SocialLink");

const run = async () => {
  await connectDB();

  // ---------- Owner account ----------
  const existingAdmin = await Admin.findOne();
  if (!existingAdmin) {
    await Admin.create({
      name: "Karthik JT",
      email: (process.env.OWNER_EMAIL || "karthikjt766@gmail.com").toLowerCase(),
      password: process.env.OWNER_PASSWORD || "changeThisPassword123",
    });
    console.log("Owner account created. Login with the OWNER_EMAIL / OWNER_PASSWORD from .env");
  } else {
    console.log("Owner account already exists - skipping creation.");
  }

  // ---------- Profile (singleton) ----------
  await Profile.deleteMany({});
  await Profile.create({
    name: "Karthik JT",
    designation: "Full Stack Developer | AI/ML & Cloud Computing Enthusiast",
    tagline:
      "Passionate about Full Stack Development, AI, and solving real-world problems.",
    aboutMe:
      "Passionate Information Science and Engineering student with strong foundations in full-stack development, AI/ML, cloud computing, and Data Structures & Algorithms. Skilled in Java, Python, C++, and modern web technologies, with hands-on experience in building scalable applications and solving real-world problems through innovative software solutions.",
    interests: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Data Structures & Algorithms",
    ],
    languagesKnown: ["English", "Kannada", "Hindi"],
    location: "Bengaluru, India",
    email: "karthikjt766@gmail.com",
    phone: "6362563190",
    stats: {
      projectsCompleted: 2,
      hackathons: 1,
      certifications: 6,
      internships: 0,
    },
  });

  // ---------- Professional Summary (singleton) ----------
  await ProfessionalSummary.deleteMany({});
  await ProfessionalSummary.create({
    careerObjective:
      "To build innovative and scalable software solutions by leveraging my skills in full-stack development, AI/ML, cloud computing, and problem-solving while contributing to impactful real-world projects.",
    technicalInterests: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Data Structures & Algorithms",
    ],
    strengths: [
      "Problem-solving and analytical thinking",
      "Strong foundation in programming",
      "Quick learner and adaptable",
      "Teamwork and project development",
    ],
    learningMindset:
      "Continuously improving my technical skills through hands-on projects, coding challenges, certifications, and exploring emerging technologies in AI, cloud computing, and software development.",
    professionalGoals:
      "Seeking software engineering opportunities where I can contribute to building reliable, scalable, and user-focused applications while continuously growing as a developer.",
  });

  // ---------- Education ----------
  await Education.deleteMany({});
  await Education.insertMany([
    {
      institution: "Nitte Meenakshi Institute of Technology, Bengaluru",
      degree: "B.E.",
      branch: "Information Science and Engineering",
      duration: "2023 - 2027 (Expected)",
      score: "CGPA: 7.6 / 10 (till 6th sem)",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Artificial Intelligence & Machine Learning",
      ],
      order: 1,
    },
    {
      institution: "Sri Adi Chunchanagiri Independent PU College, Shivamogga",
      degree: "Pre-University (Class XII)",
      branch: "PCMC",
      duration: "2021 - 2023",
      score: "91.66%",
      relevantCoursework: [],
      order: 2,
    },
    {
      institution: "Morarji Desai Residential School, Hanchina Siddapura",
      degree: "SSLC (Class X)",
      branch: "",
      duration: "2020 - 2021",
      score: "91.52%",
      relevantCoursework: [],
      order: 3,
    },
  ]);

  // ---------- Skills ----------
  await Skill.deleteMany({});
  await Skill.insertMany([
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "Java", "JavaScript"],
      order: 1,
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "DOM Manipulation"],
      order: 2,
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "REST APIs", "SQL/DBMS"],
      order: 3,
    },
    {
      category: "Cloud",
      items: ["AWS", "Oracle Cloud Infrastructure", "Google Cloud Platform", "Cloud Computing", "Linux"],
      order: 4,
    },
    {
      category: "Concepts",
      items: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Problem Solving",
      ],
      order: 5,
    },
    {
      category: "Concepts",
      items: ["Deep Learning", "Explainable AI (Grad-CAM, LIME)", "Computer Vision"],
      order: 6,
    },
  ]);

  // ---------- Internships ----------
  await Internship.deleteMany({});
  // No internships listed on resume yet - leave empty; add via /manage when available.

  // ---------- Projects ----------
  await Project.deleteMany({});
  await Project.insertMany([
    {
      title: "Waste Detection Using Explainable AI",
      shortDescription:
        "AI-powered waste classification system using deep learning with Explainable AI techniques for transparent predictions.",
      problemStatement:
        "Traditional waste classification systems lack transparency, making it difficult to understand and trust AI-based predictions.",
      solution:
        "Developed a deep learning model to classify waste images and integrated Grad-CAM and LIME to generate visual explanations, improving the interpretability and reliability of AI predictions.",
      features: [
        "Deep learning-based waste classification",
        "Explainable AI using Grad-CAM and LIME",
        "High-accuracy image classification",
        "Performance evaluation using Precision, Recall, and F1-Score",
      ],
      techStack: ["Python", "Deep Learning", "Computer Vision", "Grad-CAM", "LIME"],
      githubUrl: "",
      liveDemoUrl: "",
      featured: true,
      order: 1,
    },
    {
      title: "Hospital Management System",
      shortDescription:
        "A responsive web application for managing patient records, doctor assignments, and billing information.",
      problemStatement:
        "Traditional hospital record management is time-consuming and prone to errors, making patient and doctor information difficult to organize efficiently.",
      solution:
        "Developed a web-based Hospital Management System with patient registration, dynamic doctor assignment, billing management, and real-time patient record updates using modern web technologies.",
      features: [
        "Patient registration and record management",
        "Dynamic doctor assignment",
        "Billing information management",
        "Responsive and user-friendly interface",
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/karthikjt/hospital-management-system",
      liveDemoUrl: "",
      featured: true,
      order: 2,
    },
  ]);

  // ---------- Hackathons ----------
  await Hackathon.deleteMany({});
  await Hackathon.insertMany([
    {
      eventName: "OODO.NMIT",
      organizer: "OODO",
      problemStatement: "Website Creation.",
      solution: "",
      result: "Completed",
      year: "2025",
      order: 1,
    },
  ]);

  // ---------- Certifications ----------
  await Certification.deleteMany({});
  await Certification.insertMany([
    { name: "Oracle Cloud Infrastructure - AI Foundations Associate", issuingOrganization: "Oracle", order: 1 },
    { name: "Oracle Cloud Infrastructure - Foundations Associate", issuingOrganization: "Oracle", order: 2 },
    { name: "AWS Academy Graduate - Cloud Architecting", issuingOrganization: "AWS Academy", order: 3 },
    { name: "AWS Academy Graduate - Cloud Foundations", issuingOrganization: "AWS Academy", order: 4 },
    { name: "Introduction to Generative AI Studio", issuingOrganization: "Google / Simplilearn", order: 5 },
    { name: "All About Planning and Designing UI", issuingOrganization: "JFSD", order: 6 },
  ]);

  // ---------- Achievements ----------
  await Achievement.deleteMany({});
  await Achievement.insertMany([
    {
      title: "150+ DSA Problems Solved",
      description:
        "Solved 150+ Data Structures & Algorithms problems on LeetCode and HackerRank - arrays, linked lists, stacks, queues, trees, and graphs - with focus on time and space complexity.",
      date: "2023 - Present",
      order: 1,
    },
  ]);

  // ---------- Contact (singleton) ----------
  await Contact.deleteMany({});
  await Contact.create({
    phone: "6362563190",
    email: "karthikjt766@gmail.com",
    location: "Bengaluru, India",
  });

  // ---------- Social Links ----------
  await SocialLink.deleteMany({});
  await SocialLink.insertMany([
    { platform: "GitHub", url: "https://github.com/KarthikJT", order: 1 },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/karthik-jt-a65a51356", order: 2 },
    { platform: "Email", url: "mailto:karthikjt766@gmail.com", order: 3 },
  ]);

  console.log("Database seeded successfully with Karthik JT's portfolio data.");
  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});