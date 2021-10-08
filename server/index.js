const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");
const { auth } = require("./midlewarse/auth");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(auth());
app.use(router);

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database!");
    const port = process.env.PORT || 5001;
    app.listen(
      port,
      console.log.bind(console, `Server is listening on port ${port}...`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
