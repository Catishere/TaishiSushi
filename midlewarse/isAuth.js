module.exports = function (req, res, next) {
  if (!req.user) {
    return res.redirect("/api/auth/login");
  }

  next();
};
