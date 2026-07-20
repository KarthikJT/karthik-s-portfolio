const express = require("express");
const router = express.Router();
const Hackathon = require("../models/Hackathon");
const createCrudController = require("../controllers/crudControllerFactory");
const { protect } = require("../middleware/auth.middleware");
const { uploadHackathonPhotos } = require("../middleware/upload.middleware");

const controller = createCrudController(Hackathon);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

// Protected - append photos
router.post(
  "/:id/photos",
  protect,
  uploadHackathonPhotos.array("photos", 10),
  async (req, res) => {
    const doc = await Hackathon.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    const newPhotos = req.files.map((f) => ({
      url: f.path,
      publicId: f.filename,
    }));
    doc.photos.push(...newPhotos);
    await doc.save();
    res.json(doc);
  }
);

// Protected - upload/replace certificate image
router.put(
  "/:id/certificate",
  protect,
  uploadHackathonPhotos.single("certificate"),
  async (req, res) => {
    const doc = await Hackathon.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    doc.certificate = { url: req.file.path, publicId: req.file.filename };
    await doc.save();
    res.json(doc);
  }
);

module.exports = router;
