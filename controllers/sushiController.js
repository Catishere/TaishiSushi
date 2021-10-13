const router = require("express").Router();

const Sushi = require("../models/Sushi");
const { addSushi, getNewest } = require("../services/sushiService");

router.post("/add", (req, res) => {
  addSushi(req.body)
    .then((createdSushi) => {
      res.status(200).json({ message: "Successfully created." });
    })
    .catch(() => res.json({ message: "The sushi was not been created." }));
});

router.get("/latest", (req, res) => {
  getNewest()
    .then((sushi) => {
      res.status(200).json(sushi);
    })
    .catch(() => res.json({ message: "Something went wrong." }));
});

module.exports = router;
