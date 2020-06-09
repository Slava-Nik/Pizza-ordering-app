const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

router.get("/", indexController.home);

router.get("/fillDatabaseWithDefaultProducts", indexController.fillDatabaseWithDefaultProducts);

module.exports = router;