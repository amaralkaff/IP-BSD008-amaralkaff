const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { updateProfile } = require("../controllers/profileController");
const AuthController = require("../controllers/authGoogleController");

// GitHub Authentication
// router.get("/github", authController.githubAuth);
// router.get("/auth/github/callback", authController.githubAuthCallback);

// Register & Login
router.post("/register", authController.register);
router.post("/login", authController.login);
router.put("/profile/update/:userId", updateProfile);
//google login
router.post("/google-login", AuthController.googleLogin);

// Session Check
// router.get("/session", authController.checkSession);

module.exports = router;
