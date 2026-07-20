const { uploadFor } = require("../utils/cloudinary");

// One uploader per logical folder in Cloudinary
module.exports = {
  uploadProfilePhoto: uploadFor("profile-photo"),
  uploadHeroImage: uploadFor("hero-image"),
  uploadCompanyLogo: uploadFor("company-logos"),
  uploadProjectImages: uploadFor("projects"),
  uploadHackathonPhotos: uploadFor("hackathons"),
  uploadCertificate: uploadFor("certifications"),
  uploadAchievementImage: uploadFor("achievements"),
};
