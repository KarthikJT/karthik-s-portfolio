const express = require("express");
const router = express.Router();
const ProfessionalSummary = require("../models/ProfessionalSummary");
const createSingletonController = require("../controllers/singletonControllerFactory");
const { protect } = require("../middleware/auth.middleware");

const controller = createSingletonController(ProfessionalSummary);

router.get("/", controller.get);
router.put("/", protect, controller.update);

module.exports = router;
