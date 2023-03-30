const express = require("express");
const router = express.Router();
const quotationCMPController = require("../Controller/quotationCMPController");

router.route("/").get(quotationCMPController.getallquotationDET);

module.exports = router;
