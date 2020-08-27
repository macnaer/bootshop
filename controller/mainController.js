exports.getHomePage = (req, res, next) => {
  res.render("pages/home");
};

exports.getContactPage = (req, res, next) => {
  res.render("pages/contacts");
};
