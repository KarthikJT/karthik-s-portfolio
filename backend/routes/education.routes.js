const express = require("express");
const router = express.Router();
const Education = require("../models/Education");
const createCrudController = require("../controllers/crudControllerFactory");
const { protect } = require("../middleware/auth.middleware");

const controller = createCrudController(Education);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

module.exports = router;
