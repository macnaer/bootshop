const Product = require("../models/product");
const User = require("../models/users");

// Home page
exports.getHomePage = (req, res, next) => {
  User.findAll()
    .then((responce) => console.log(responce))
    .catch((err) => console.log(err));
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
