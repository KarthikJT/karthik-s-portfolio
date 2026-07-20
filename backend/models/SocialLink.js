const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: true,
      enum: [
        "GitHub",
        "LinkedIn",
        "LeetCode",
        "HackerRank",
        "CodeChef",
        "Twitter",
        "Email",
        "Other",
      ],
    },
    url: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SocialLink", socialLinkSchema);
