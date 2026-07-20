const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const createSingletonController = require("../controllers/singletonControllerFactory");
const { protect } = require("../middleware/auth.middleware");

const controller = createSingletonController(Contact);

router.get("/", controller.get);
router.put("/", protect, controller.update);

module.exports = router;
