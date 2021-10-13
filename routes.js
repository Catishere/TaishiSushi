const router = require("express").Router();

const authController = require("./controllers/authController");
const sushiController = require("./controllers/sushiController");
const menuController = require("./controllers/menuController");
const cartController = require("./controllers/cartController");

router.use("/api/auth", authController);
router.use("/api/sushi", sushiController);
router.use("/api/menu", menuController);
router.use("/api/cart", cartController);

module.exports = router;
