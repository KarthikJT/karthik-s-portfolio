const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    companyLogo: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    role: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, default: "" },
    technologiesUsed: [{ type: String }],
    keyLearnings: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Internship", internshipSchema);
