const express = require("express");
const adminController = require("../controller/adminController");
const router = express.Router();

router.get("/admin/products", adminController.getProducts);
router.get("/admin/add-product", adminController.getAddProduct);
router.post("/admin/delete-product", adminController.postDeleteProduct);
router.post("/admin/add-product", adminController.postAddProduct);
router.post("/admin/edit-product", adminController.postEditProduct);
router.get("/admin/edit-product/:productId", adminController.getEditProduct);

module.exports = router;
