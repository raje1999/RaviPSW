const mongoose = require("mongoose");

const quotationHRMSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  jobRole: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  hourlyRate: {
    type: Number,
    required: true
  }
});

const QuotationHRMModel = mongoose.model("QuotationHRM", quotationHRMSchema);

module.exports = QuotationHRMModel;
