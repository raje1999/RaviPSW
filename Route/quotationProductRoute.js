const express = require("express");
const router = express.Router();
const quotationProductController = require("../Controller/quotationProductController");

router.route("/productName").get(quotationProductController.getquotationPRDNAME);

router.param("id", (req, res, next, val) => {
  console.log(`Id: ${val}`);
  next();
});

router
  .route("/:id")
  .get(quotationProductController.getquotationProduct)
  .delete(quotationProductController.deletequotationProduct)
  .patch(quotationProductController.updatequotationPro);
router
  .route("/")
  .get(quotationProductController.getallquotationPro)
  .post(quotationProductController.createquotationPro);

router.route("/cmpid/:id").get(quotationProductController.getquotationCMPIDPRD);

module.exports = router;
