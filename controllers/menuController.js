const router = require("express").Router();

const {
  getType,
  getDetails,
  getMultiDetails,
  addToCart,
  getUserCart,
  deleteFromCart,
} = require("../services/sushiService");

router.get("/sets", (req, res) => {
  getType("Set").then((sushi) => {
    res.json(sushi);
  });
});

router.get("/uramaki", (req, res) => {
  getType("Uramaki").then((sushi) => {
    res.json(sushi);
  });
});

router.get("/futomaki", (req, res) => {
  getType("Futomaki").then((sushi) => {
    res.json(sushi);
  });
});

router.get("/hosomaki", (req, res) => {
  getType("Hosomaki").then((sushi) => {
    res.json(sushi);
  });
});

router.get("/nigiri", (req, res) => {
  getType("Nigiri").then((sushi) => {
    res.json(sushi);
  });
});

router.get("/sashimi", (req, res) => {
  getType("Sashimi").then((sushi) => {
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
