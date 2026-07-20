const express = require("express");
const router = express.Router();
const Certification = require("../models/Certification");
const createCrudController = require("../controllers/crudControllerFactory");
const { protect } = require("../middleware/auth.middleware");
const { uploadCertificate } = require("../middleware/upload.middleware");

const controller = createCrudController(Certification);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

// Protected - upload/replace certificate image
router.put(
  "/:id/image",
  protect,
  uploadCertificate.single("certificateImage"),
  async (req, res) => {
    const doc = await Certification.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    doc.certificateImage = { url: req.file.path, publicId: req.file.filename };
    await doc.save();
    res.json(doc);
  }
);

module.exports = router;
