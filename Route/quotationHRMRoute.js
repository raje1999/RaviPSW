const express = require("express");
const router = express.Router();
const quotationHRMController = require("../Controller/quotationHRMController");

router.param("id", (req, res, next, val) => {
  console.log(`Id: ${val}`);
  next();
});
router.route("/names").get(quotationHRMController.getquotationHRName);
router.route("/jobrole/:jobRole").get(quotationHRMController.getHrByDesignation);
router
  .route("/:id")
  .get(quotationHRMController.getquotationHRM)
  .delete(quotationHRMController.deletequotationHRM)
  .patch(quotationHRMController.updatequotationHRM);

router.route("/").get(quotationHRMController.getallquotationHRM).post(quotationHRMController.createquotationHRM);

module.exports = router;
