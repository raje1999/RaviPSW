const mongoose = require("mongoose");

const quotationProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cmpId: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  }
});

const QuotationProductModel = mongoose.model("QuotationProduct", quotationProductSchema);

module.exports = QuotationProductModel;
