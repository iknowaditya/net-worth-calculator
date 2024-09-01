const express = require("express");
const {
  handleLogin,
  handleSignup,
  logout,
  getAllUsers,
  getUserById,
} = require("../controllers/user");
const auth = require("../middlewares/auth");

const router = express.Router();

// Authentication Routes
router.post("/login", handleLogin);
router.post("/register", handleSignup);
router.post("/logout", logout);

//User routes.
router.get("/user/:id", getUserById);
router.get("/user", getAllUsers);

module.exports = router;
