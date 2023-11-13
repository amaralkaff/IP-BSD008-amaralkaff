//app.js
const express = require("express");
const session = require("express-session");
const passport = require("passport"); // Make sure to import passport
const app = express();
const port = 3000;
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

// Session configuration
app.use(
  session({
    secret: "palepale", // In production, move this to an environment variable
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Use routes
// If your authRoutes handles paths that start with /auth, you only need this line:
app.use("/auth", authRoutes);
// Otherwise, if you need to handle routes starting from root with authRoutes, uncomment below:
// app.use(authRoutes);

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// Error handling middleware should be the last piece of middleware to use
app.use(errorHandler);

module.exports = app;

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
