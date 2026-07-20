const mongoose = require("mongoose");

const professionalSummarySchema = new mongoose.Schema(
  {
    careerObjective: { type: String, default: "" },
    technicalInterests: [{ type: String }],
    strengths: [{ type: String }],
    learningMindset: { type: String, default: "" },
    professionalGoals: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ProfessionalSummary",
  professionalSummarySchema
);
