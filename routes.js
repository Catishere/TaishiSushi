const router = require("express").Router();

const authController = require("./controllers/authController");
const sushiController = require("./controllers/sushiController");
const homeController = require("./controllers/homeController");
const menuController = require("./controllers/menuController");

router.use("/api/home", homeController);
router.use("/api/auth", authController);
router.use("/api/add", sushiController);
router.use("/api/menu", menuController);

module.exports = router;
