const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");
const createCrudController = require("../controllers/crudControllerFactory");
const { protect } = require("../middleware/auth.middleware");
const { uploadCompanyLogo } = require("../middleware/upload.middleware");

const controller = createCrudController(Internship);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

// Protected - upload/replace company logo
router.put(
  "/:id/logo",
  protect,
  uploadCompanyLogo.single("companyLogo"),
  async (req, res) => {
    const doc = await Internship.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    doc.companyLogo = { url: req.file.path, publicId: req.file.filename };
    await doc.save();
    res.json(doc);
  }
);

module.exports = router;
