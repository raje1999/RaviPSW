const mongoose = require("mongoose");

const quotationCMPSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cmpId: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const QuotationCMPModel = mongoose.model("QuotationCMP", quotationCMPSchema);

module.exports = QuotationCMPModel;
