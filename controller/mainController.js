const Product = require("../models/product");


// Home page
exports.getHomePage = (req, res, next) => {
  Product.fetchAll()
  .then(([rows, fieldData]) => {
    res.render("pages/home", {
      products: rows,
      pageTitle: "All products",
      path: '/'
    });
  })
  .catch(err => console.log(err))
};

// Contact page
exports.getContactPage = (req, res, next) => {
  res.render("pages/contacts");
};

// FAQ page
exports.getFAQPage = (req, res, next) => {
  res.render("pages/faq");
};
