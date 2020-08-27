const express = require("express");
const mainController = require("../controller/mainController");

const router = express.Router();

router.get("/", mainController.getHomePage);
router.get("/contacts", mainController.getContactPage);

module.exports = router;
