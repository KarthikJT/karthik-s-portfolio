const express = require("express");
const router = express.Router();
const { loginAdmin, getMe } = require("../controllers/auth.controller");
const { protect } = require("../middleware/auth.middleware");

// POST /api/auth/login - the ONLY way to authenticate. There is no public
// signup route anywhere in this API by design (single-owner portfolio).
router.post("/login", loginAdmin);

// GET /api/auth/me - verify token / fetch current owner (used by dashboard on load)
router.get("/me", protect, getMe);

module.exports = router;
