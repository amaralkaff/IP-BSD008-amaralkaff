// src/auth/githubStrategy.js
const GitHubStrategy = require("passport-github").Strategy;
const passport = require("passport");
const { User } = require("../models"); // Adjust the path as needed

passport.use(
  new GitHubStrategy(
    {
      clientID: "2f283c19cd22571247ad",
      clientSecret: "fa2a5f46293752549b4d16b0a59c170b123c2ffc",
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({ where: { githubId: profile.id } });
        if (user) {
          return done(null, user);
        }
        user = await User.create({
          githubId: profile.id,
          // ... other user fields from profile
        });
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

module.exports = passport;
