const express = require("express");

const authController = require("../controller/authController");

router = express.Router();

router.get("/login", authController.getLogin);

module.exports = router;
