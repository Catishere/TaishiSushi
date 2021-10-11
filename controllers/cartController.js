const router = require("express").Router();

const {
  getType,
  getDetails,
  addToCart,
  getUserCart,
  deleteFromCart,
  updateInCart,
} = require("../services/sushiService");

router.get("/:userId", (req, res) => {
  getUserCart(req.params.userId).then((cart) => {
    res.json(cart);
  });
});

router.post("/:userId/:sushiId/:qty", (req, res) => {
  addToCart(req.params).then((cart) => {
    res.json(cart);
  });
});

router.delete("/:userId/:sushiId", (req, res) => {
  deleteFromCart(req.params).then((cart) => {
    res.json(cart);
  });
});

router.put("/:userId/:sushiId", (req, res) => {
  const sushi = req.body.sushi;
  updateInCart({ ...req.params, sushi }).then((cart) => {
    res.json(cart);
  });
});

module.exports = router;
