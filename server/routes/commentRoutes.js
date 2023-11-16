//routes/commentRoutes.js
const express = require("express");
const router = express.Router();
const {
  getComments,
  getCommentById,
  getCommentsByPost,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const authenticate = require("../middleware/authenticate");

router.get("/", getComments);
router.get("/:id", getCommentById);
router.get("/post/:postId/comments", getCommentsByPost);
router.post("/", authenticate, createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
