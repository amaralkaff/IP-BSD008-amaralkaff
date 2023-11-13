//routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  register,
  login,
  githubAuth,
  githubAuthCallback,
} = require("../controllers/authController");

router.get("/auth/github", githubAuth);
router.get("/auth/github/callback", githubAuthCallback);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
