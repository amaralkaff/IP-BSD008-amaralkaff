// controllers/authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const passport = require("../auth/githubStrategy");

exports.githubAuth = passport.authenticate("github");

exports.githubAuthCallback = (req, res, next) => {
  passport.authenticate(
    "github",
    { failureRedirect: "/login" },
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/login");
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/");
      });
    }
  )(req, res, next);
};

exports.register = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    const { password, ...userData } = user.get({ plain: true });
    res.status(201).json(userData);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ id: user.id }, "your_secret_key", {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully!", token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    next(err);
  }
};
