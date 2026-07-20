const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    phone: { type: String, default: "7204105056" },
    email: { type: String, default: "purviskiran2005@gmail.com" },
    location: { type: String, default: "Bengaluru, India" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
