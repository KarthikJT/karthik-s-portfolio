const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: [
        "Programming Languages",
        "Frontend",
        "Backend",
        "Frameworks",
        "Databases",
        "Cloud",
        "Embedded & IoT",
        "VLSI & Hardware",
        "Protocols",
        "Concepts",
        "Tools",
      ],
    },
    items: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
