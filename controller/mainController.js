const Product = require("../models/product");

// Home page
exports.getHomePage = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("pages/home", {
        products: products,
        pageTitle: "All products",
        path: "pages/home",
      });
    })
    .catch((err) => console.log(err));
};

// Contact page
exports.getContactPage = (req, res, next) => {
  res.render("pages/contacts");
};

// FAQ page
exports.getFAQPage = (req, res, next) => {
  res.render("pages/faq");
};
