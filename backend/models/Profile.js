const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "Purvi S Kiran" },
    designation: {
      type: String,
      default: "Embedded Systems & VLSI Enthusiast | ECE Student",
    },
    tagline: {
      type: String,
      default:
        "Building at the intersection of hardware and software — from silicon to signal.",
    },
    profilePhoto: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    heroImage: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    aboutMe: {
      type: String,
      default:
        "Motivated Electronics and Communication Engineering student with strong fundamentals in digital electronics, VLSI design, microcontrollers, and circuit design. Passionate about solving real-world problems through hardware-software integration.",
    },
    interests: [{ type: String }],
    languagesKnown: [{ type: String }],
    location: { type: String, default: "Bengaluru, India" },
    email: { type: String, default: "purviskiran2005@gmail.com" },
    phone: { type: String, default: "7204105056" },
    stats: {
      projectsCompleted: { type: Number, default: 0 },
      hackathons: { type: Number, default: 0 },
      certifications: { type: Number, default: 0 },
      internships: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
