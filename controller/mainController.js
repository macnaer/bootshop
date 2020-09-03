// Home page
exports.getHomePage = (req, res, next) => {
  res.render("pages/home");
};

// Contact page
exports.getContactPage = (req, res, next) => {
  res.render("pages/contacts");
};

// FAQ page
exports.getFAQPage = (req, res, next) => {
  res.render("pages/faq");
};
