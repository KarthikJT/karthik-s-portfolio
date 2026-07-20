const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    certificateImage: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    name: { type: String, required: true },
    issuingOrganization: { type: String, required: true },
    issueDate: { type: String, default: "" },
    credentialId: { type: String, default: "" },
    verificationLink: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certification", certificationSchema);
