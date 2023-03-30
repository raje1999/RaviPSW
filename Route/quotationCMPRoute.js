const express = require("express");
const router = express.Router();
const quotationCMPController = require("../Controller/quotationCMPController");

router.param("id", (req, res, next, val) => {
  console.log(`Id: ${val}`);
  next();
});

router.route("/company").get(quotationCMPController.getquotationCMPDROP);

router
  .route("/:id")
  .get(quotationCMPController.getquotationCMP)
  .delete(quotationCMPController.deletequotationCMP)
  .patch(quotationCMPController.updatequotationCMP);

router.route("/quo/:id").get(quotationCMPController.getquotationDET);

router.route("/cmpid/:id").get(quotationCMPController.getquotationCMPID);

router.route("/").get(quotationCMPController.getallquotationCMP).post(quotationCMPController.createquotationCMP);

router.route("/quo/").post(quotationCMPController.createquotationDET).get(quotationCMPController.getallquotationDET);

module.exports = router;
