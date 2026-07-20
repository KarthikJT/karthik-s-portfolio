const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

// @desc  Login owner (the only account on this system)
// @route POST /api/auth/login
// @access Public (but there is no signup - the account is created only via seed script)
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const admin = await Admin.findOne({ email: email.toLowerCase() });

  if (admin && (await admin.matchPassword(password))) {
    return res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  }

  return res.status(401).json({ message: "Invalid email or password" });
};

// @desc  Get currently logged in owner profile
// @route GET /api/auth/me
// @access Private
const getMe = async (req, res) => {
  res.json(req.admin);
};

module.exports = { loginAdmin, getMe };
