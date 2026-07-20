require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorHandler");

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- Routes ----
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/profile", require("./routes/profile.routes"));
app.use("/api/professional-summary", require("./routes/professionalSummary.routes"));
app.use("/api/education", require("./routes/education.routes"));
app.use("/api/skills", require("./routes/skill.routes"));
app.use("/api/internships", require("./routes/internship.routes"));
app.use("/api/projects", require("./routes/project.routes"));
app.use("/api/hackathons", require("./routes/hackathon.routes"));
app.use("/api/certifications", require("./routes/certification.routes"));
app.use("/api/achievements", require("./routes/achievement.routes"));
app.use("/api/contact", require("./routes/contact.routes"));
app.use("/api/social-links", require("./routes/socialLink.routes"));

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
