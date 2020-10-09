exports.getLogin = (req, res, next) => {
  console.log("hetLogin =====>>> ", req.session);
  res.render("pages/auth");
};

exports.postLogin = (req, res, next) => {
  console.log("postLogin ====>> ", req.body);
  res.redirect("/");
};
