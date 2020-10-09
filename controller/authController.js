exports.getLogin = (req, res, next) => {
  console.log("hetLogin =====>>> ", req.session.isLoggedIn);
  res.render("pages/auth", {
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  console.log("postLogin ====>> ", req.body);
  res.redirect("/");
};
