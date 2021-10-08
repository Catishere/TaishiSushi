const Sushi = require("../models/Sushi");
const User = require("../models/User");

async function addSushi(data) {
  return new Sushi(data).save();
}

async function getNewest() {
  return Sushi.find().limit(3);
}

async function getType(type) {
  return Sushi.find({ type: `${type}` });
}

async function getDetails(id) {
  return Sushi.findById(id);
}

async function addToCart(data) {
  const user = await User.findById(data.userId);
  delete data.userId;

  const product = user.cart.find((s) => s.title === data.title);
  if (product) {
    user.cart.remove(product);
    product.qty += data.qty;
    user.cart.push(product);
  } else {
    user.cart.push(data);
  }
  return await user.save();
}

async function getUserCart(userId) {
  const user = await User.findById(userId);

  return user.cart;
}

async function deleteFromCart({ sushiId, userId }) {
  const user = await User.findById(userId);
  user.cart = user.cart.filter((s) => s.id !== sushiId);

  user.save();
  return user.cart;
}

module.exports = {
  addSushi,
  getNewest,
  getType,
  getDetails,
  addToCart,
  getUserCart,
  deleteFromCart,
};
