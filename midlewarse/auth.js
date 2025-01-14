const jwt = require("jsonwebtoken");
const { SECRET, COOKIE_NAME } = {
  SECRET: process.env.SECRET,
  COOKIE_NAME: process.env.COOKIE_NAME,
};

function auth() {
  return (req, res, next) => {
    let token = req.cookies[COOKIE_NAME];
    if (token) {
      jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
          res.clearCookie(COOKIE_NAME);
        } else {
          req.user = decoded;
        }
      });
    }
    next();
  };
}

function isAuth(req, res, next) {}

module.exports = {
  isAuth,
  auth,
};
