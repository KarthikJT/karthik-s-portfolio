const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    branch: { type: String, default: "" },
    duration: { type: String, required: true },
    score: { type: String, default: "" }, // CGPA or percentage
    relevantCoursework: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Education", educationSchema);
