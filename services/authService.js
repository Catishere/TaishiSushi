const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET, SALT_ROUNDS } = {
  SECRET: process.env.REACT_APP_SECRET,
};

const register = async ({ email, username, password, address }) => {
  const englishPattern = /^[a-zA-Z0-9 ,\.\-]+$/;
  const noDollar = /^[^\$]+$/;
  const validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let currentUser = await User.findOne({ email });

  if (currentUser) throw { message: "User already exists!" };
  if (!validEmail.test(email)) throw { message: "Email should be valid." };
  if (!englishPattern.test(username) || username.length < 4)
    throw {
      message:
        "Username should be at least 4 characters long and should contains only english letters and digits.",
    };
  if (!noDollar.test(address))
    throw {
      message: "Address must not contain '$' symbols.",
    };
  if (!validPassword.test(password))
    throw {
      message:
        "Password must be at least 8 characters long, must have at least one letter and one number.",
    };

  password = await bcrypt.hash(password, 10);
  let user = await new User({ email, username, password, address }).save();

  let token = jwt.sign(
    { _id: user._id, username: user.username },
    `${SECRET}`,
    {
      expiresIn: "2h",
    }
  );

  return {
    user,
    token,
  };
};

const login = async ({ email, password }) => {
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.findOne({ username: email });
    if (!user) throw { message: "No such user", status: 404 };
  }

  let areEqual = await bcrypt.compare(password, user.password);

  if (!areEqual) throw { message: "Invalid password", status: 404 };

  let token = jwt.sign(
    { _id: user._id, username: user.username },
    `${SECRET}`,
    {
      expiresIn: "2h",
    }
  );

  return { token, user };
};

module.exports = {
  register,
  login,
};
