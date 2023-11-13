// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPostById,
  createPost,
} = require("../controllers/postController");

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);

module.exports = router;
