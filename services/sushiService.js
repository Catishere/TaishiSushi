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

async function getMultiDetails(ids) {
  return await Sushi.find().where("_id").in(ids).exec();
}

async function addToCart({ userId, sushiId, qty }) {
  const user = await User.findById(userId);

  const product = user.cart.find((p) => p.sushi._id == sushiId);
  if (product) {
    user.cart.remove(product);
    product.qty = parseInt(product.qty) + parseInt(qty);
    user.cart.push({ sushi: product.sushi, qty: product.qty });
  } else {
    user.cart.push({ sushi: sushiId, qty });
  }
  return await user.save();
}

async function getUserCart(userId) {
  const user = await User.findById(userId)
    .populate({
      path: "cart.sushi",
      model: "Sushi",
    })
    .exec();

  return user.cart;
}

async function deleteFromCart({ sushiId, userId }) {
  const user = await User.findById(userId)
    .populate({
      path: "cart.sushi",
      model: "Sushi",
    })
    .exec();
  user.cart = user.cart.filter((p) => p.sushi._id != sushiId);

  await user.save();
  return user.cart;
}

async function updateInCart({ sushiId, userId, sushi }) {
  const user = await User.findById(userId);
  if (!user) return [];
  const userSushi = user.cart.find((p) => p.sushi._id === sushiId);
  if (!userSushi) return [];
  user.cart.remove(userSushi);
  user.cart.push(sushi);
  await user.save();
  return user.cart;
}

module.exports = {
  addSushi,
  getNewest,
  getType,
  getDetails,
  getMultiDetails,
  addToCart,
  getUserCart,
  deleteFromCart,
};
