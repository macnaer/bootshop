const express = require("express");
const mainController = require("../controller/mainController");

const router = express.Router();

router.get("/", mainController.getHomePage);
router.get("/contacts", mainController.getContactPage);
router.get("/faq", mainController.getFAQPage);
router.get("/products/:productId", mainController.getProduct);
router.get("/cart", mainController.getCart);
router.post("/cart", mainController.postCart);
router.get("/orders", mainController.getOrders);
router.post("/make-order", mainController.postOrder);

module.exports = router;
