const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    banner: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    shortDescription: { type: String, default: "" },
    problemStatement: { type: String, default: "" },
    solution: { type: String, default: "" },
    features: [{ type: String }],
    techStack: [{ type: String }],
    githubUrl: { type: String, default: "" },
    liveDemoUrl: { type: String, default: "" },
    images: [
      {
        url: { type: String },
        publicId: { type: String },
      },
    ],
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
