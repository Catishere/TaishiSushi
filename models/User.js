const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { SECRET, SALT_ROUNDS } = {
  SECRET: process.env.REACT_APP_SECRET,
  SALT_ROUNDS: process.env.REACT_APP_SALT_ROUNDS,
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 9,
  },

  address: {
    type: String,
    required: true,
  },

  cart: [
    {
      sushi: { type: Schema.Types.ObjectId, ref: "Sushi" },
      qty: { type: Number },
    },
  ],
  purchaseHistory: [],
});
module.exports = mongoose.model("User", userSchema);
