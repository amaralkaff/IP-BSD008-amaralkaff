//app.js
const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const bodyParser = require("body-parser");

// Enable CORS
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const profileRoutes = require("./routes/profileRoutes");

// Use routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/profiles", profileRoutes);

app.use(errorHandler);

module.exports = app;

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
