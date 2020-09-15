const express = require("express");
const adminController = require("../controller/adminController");
const router = express.Router();

router.get("/admin/products", adminController.getProducts);

module.exports = router;
