const express = require("express");
const mainController = require("../controller/mainController");
const auth = require("../helper/auth-helper");

const router = express.Router();

router.get("/", mainController.getHomePage);
router.get("/contacts", mainController.getContactPage);
router.get("/faq", mainController.getFAQPage);
router.get("/products/:productId", mainController.getProduct);
router.get("/cart", auth, mainController.getCart);
router.post("/cart", auth, mainController.postCart);
router.post("/cart-delete-item", auth, mainController.postCartDeleteProduct);
router.get("/orders", auth, mainController.getOrders);
router.post("/make-order", auth, mainController.postOrder);

module.exports = router;
