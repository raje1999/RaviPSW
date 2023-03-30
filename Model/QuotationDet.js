const mongoose = require("mongoose");

const quotationDETSchema = new mongoose.Schema({
  quotName: {
    type: String,
    required: true
  },
  quoAddress: {
    type: String,
    required: true
  },
  quoNumber: {
    type: Number,
    required: true,
    unique: true
  }
});

const QuotationDet = mongoose.model("QuotationDET", quotationDETSchema);

module.exports = QuotationDet;
