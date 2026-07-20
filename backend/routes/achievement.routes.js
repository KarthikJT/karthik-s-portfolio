const express = require("express");
const router = express.Router();
const Achievement = require("../models/Achievement");
const createCrudController = require("../controllers/crudControllerFactory");
const { protect } = require("../middleware/auth.middleware");
const { uploadAchievementImage } = require("../middleware/upload.middleware");

const controller = createCrudController(Achievement);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

// Protected - upload/replace achievement image
router.put(
  "/:id/image",
  protect,
  uploadAchievementImage.single("image"),
  async (req, res) => {
    const doc = await Achievement.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    doc.image = { url: req.file.path, publicId: req.file.filename };
    await doc.save();
    res.json(doc);
  }
);

module.exports = router;
