const bcrypt = require("bcryptjs");
const User = require("../models/users");

exports.getLogin = (req, res, next) => {
  res.render("pages/auth", {
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.redirect("/login");
      }

      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save((err) => {
            res.redirect("/");
          });
        }
        res.redirect("/login");
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

exports.getRegister = (req, res, next) => {
  res.render("pages/register", {
    isAuthenticated: false,
  });
};

exports.postRegister = (req, res, next) => {
  const { username, email, password, confirm_password } = req.body;
  if (password === confirm_password) {
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          return res.redirect("/login");
        }
        return bcrypt.hash(password, 12);
      })
      .then((hashPassword) => {
        const newUser = new User({
          name: username,
          email: email,
          password: hashPassword,
          cart: { items: [] },
        });
        return newUser.save();
      })
      .then((result) => {
        res.redirect("/login");
      })
      .catch((err) => console.log(err));
  }
};
