const router = require("express").Router();

const {
  getType,
  getDetails,
  getMultiDetails,
  getCategories,
  addToCart,
  getUserCart,
  deleteFromCart,
} = require("../services/sushiService");

router.get("/category", (req, res) => {
  getCategories().then((c) => {
    res.json(c);
  });
});

router.get("/category/:category", (req, res) => {
  getType(req.params.category).then((sushi) => {
    res.json(sushi);
  });
});

router.get("/details/:id", (req, res) => {
  getDetails(req.params.id).then((sushiDetails) => {
    res.json(sushiDetails);
  });
});

router.get("/details", (req, res) => {
  getMultiDetails(req.query.id).then((sushiDetails) => {
    res.json(sushiDetails);
  });
});

router.post("/add-to-cart", (req, res) => {
  addToCart(req.body).then((cart) => {
    res.json(cart);
  });
});

router.get("/get-cart/:userId", (req, res) => {
  getUserCart(req.params.userId).then((cart) => {
    res.json(cart);
  });
});

router.post("/delete-from-cart/", (req, res) => {
  deleteFromCart(req.body).then((cart) => {
    res.json(cart);
  });
});

module.exports = router;
