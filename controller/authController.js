const User = require("../models/users");
exports.getLogin = (req, res, next) => {
  console.log("hetLogin =====>>> ", req.session.isLoggedIn);
  res.render("pages/auth", {
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("5f85b52100e47715ac210361")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
