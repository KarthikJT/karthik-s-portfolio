const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const createCrudController = require("../controllers/crudControllerFactory");
const { protect } = require("../middleware/auth.middleware");
const { uploadProjectImages } = require("../middleware/upload.middleware");

const controller = createCrudController(Project);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

// Protected - upload/replace the single banner image
router.put(
  "/:id/banner",
  protect,
  uploadProjectImages.single("banner"),
  async (req, res) => {
    const doc = await Project.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    doc.banner = { url: req.file.path, publicId: req.file.filename };
    await doc.save();
    res.json(doc);
  }
);

// Protected - append multiple gallery images (up to 10 per call)
router.post(
  "/:id/images",
  protect,
  uploadProjectImages.array("images", 10),
  async (req, res) => {
    const doc = await Project.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    const newImages = req.files.map((f) => ({
      url: f.path,
      publicId: f.filename,
    }));
    doc.images.push(...newImages);
    await doc.save();
    res.json(doc);
  }
);

// Protected - delete a single gallery image by its Cloudinary publicId
router.delete("/:id/images/:publicId", protect, async (req, res) => {
  const doc = await Project.findById(req.params.id);
  if (!doc) return res.status(404).json({ message: "Not found" });
  const { cloudinary } = require("../utils/cloudinary");
  await cloudinary.uploader.destroy(req.params.publicId).catch(() => {});
  doc.images = doc.images.filter((img) => img.publicId !== req.params.publicId);
  await doc.save();
  res.json(doc);
});

module.exports = router;
