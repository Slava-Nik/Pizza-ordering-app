const express = require("express");
const currencyController = require("../controllers/currency");
const router = express.Router();

router.get("/", currencyController.getCurrencyRate);

module.exports = router;