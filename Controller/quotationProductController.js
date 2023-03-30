const QuotationProductModel = require("../Model/QuotationProductModel");

exports.getallquotationPro = async (req, res) => {
  try {
    const newQuotationProduct = await QuotationProductModel.find();
    res.status(200).json({
      status: "Success",
      result: newQuotationProduct.length,
      data: { newQuotationProduct }
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.createquotationPro = async (req, res) => {
  try {
    const newQuotationProduct = await QuotationProductModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        quotationProduct: newQuotationProduct
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationProduct = async (req, res) => {
  try {
    const newQuotationProduct = await QuotationProductModel.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: { newQuotationProduct }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationCMPIDPRD = async (req, res) => {
  try {
    const cmpId = req.params.id;
    const newQuotationProduct = await QuotationProductModel.find({ cmpId: cmpId });
    res.status(200).json({
      status: "Success",
      data: { newQuotationProduct }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationPRDNAME = async (req, res) => {
  try {
    const cmpId = req.params.id;
    const newQuotationProduct = await QuotationProductModel.find({}, "_id name cmpId");
    res.status(200).json({
      status: "Success",
      data: { newQuotationProduct }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.updatequotationPro = async (req, res) => {
  try {
    const newQuotationProduct = await QuotationProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        newQuotationProduct
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.deletequotationProduct = async (req, res) => {
  try {
    await QuotationProductModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};
