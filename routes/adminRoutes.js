const express = require("express");
const adminController = require("../controller/adminController");
const router = express.Router();
const auth = require("../helper/auth-helper");

router.get("/admin/add-product", auth, adminController.getAddProduct);
router.get("/admin/products", auth, adminController.getProducts);
router.post("/admin/add-product", auth, adminController.postAddProduct);
router.get(
  "/admin/edit-product/:productId",
  auth,
  adminController.getEditProduct
);
router.post("/admin/edit-product", auth, adminController.postEditProduct);
router.post("/admin/delete-product", auth, adminController.postDeleteProduct);

module.exports = router;
