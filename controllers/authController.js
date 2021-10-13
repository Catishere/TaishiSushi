const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { SECRET, COOKIE_NAME } = {
  SECRET: process.env.REACT_APP_SECRET,
  COOKIE_NAME: process.env.REACT_APP_COOKIE_NAME,
};
const { register, login } = require("../services/authService");

router.get("/user/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json();
  }
});

router.post("/register", (req, res) => {
  register(req.body)
    .then(({ user, token }) => {
      console.log(user, token);

      if (!user) {
        res.clearCookie(COOKIE_NAME);
      } else {
        res
          .status(201)
          .cookie(COOKIE_NAME, token, { httpOnly: true })
          .json({ user, token });
      }
    })
    .catch((err) => {
      res.json({
        status: 404,
        message: `${err.message}`,
        type: "ERROR",
      });
    });
});

router.post("/login", (req, res, next) => {
  login(req.body)
    .then((data) => {
      res
        .status(200)
        .cookie(COOKIE_NAME, data.token, { httpOnly: true, sameSite: true })
        .json(data.user);
    })
    .catch((err) => {
      res.status(404).json({
        message: `${err.message}`,
        type: "User not found",
      });
    });
});

router.get("/logout", (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.status(200).json({ message: `You successfully logged out.` });
});

module.exports = router;
