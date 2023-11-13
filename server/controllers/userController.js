//controllers/userController.js
const { User, Profile, Post, Comment, Like, Media } = require("../models");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Profile,
          attributes: ["id", "bio", "profile_picture"],
        },
        {
          model: Post,
          attributes: ["id", "content", "timestamp"],
        },
      ],
    });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        {
          model: Profile,
          attributes: ["id", "bio", "profile_picture"],
        },
        {
          model: Post,
          attributes: ["id", "content", "timestamp"],
        },
      ],
    });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getUserById,
};
