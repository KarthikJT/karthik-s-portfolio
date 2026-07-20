const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const createSingletonController = require("../controllers/singletonControllerFactory");
const { protect } = require("../middleware/auth.middleware");
const {
  uploadProfilePhoto,
  uploadHeroImage,
} = require("../middleware/upload.middleware");

const controller = createSingletonController(Profile);

// Public
router.get("/", controller.get);

// Protected - edit text fields
router.put("/", protect, controller.update);

// Protected - replace profile photo
router.put(
  "/photo",
  protect,
  uploadProfilePhoto.single("profilePhoto"),
  async (req, res) => {
    let doc = await Profile.findOne();
    if (!doc) doc = await Profile.create({});
    doc.profilePhoto = { url: req.file.path, publicId: req.file.filename };
    await doc.save();
    res.json(doc);
  }
);

// Protected - replace hero image
router.put(
  "/hero-image",
  protect,
  uploadHeroImage.single("heroImage"),
  async (req, res) => {
    let doc = await Profile.findOne();
    if (!doc) doc = await Profile.create({});
    doc.heroImage = { url: req.file.path, publicId: req.file.filename };
    await doc.save();
    res.json(doc);
  }
);

module.exports = router;
