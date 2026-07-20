const mongoose = require("mongoose");

const hackathonSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    organizer: { type: String, default: "" },
    problemStatement: { type: String, default: "" },
    solution: { type: String, default: "" },
    result: { type: String, default: "" },
    year: { type: String, default: "" },
    photos: [
      {
        url: { type: String },
        publicId: { type: String },
      },
    ],
    certificate: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    githubUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hackathon", hackathonSchema);
