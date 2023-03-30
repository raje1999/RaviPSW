const QuotationCMPModel = require("../Model/QuotationCMPModel");
const QuotationDet = require("../Model/QuotationDet");
exports.getallquotationCMP = async (req, res) => {
  try {
    const newQuotationCMP = await QuotationCMPModel.find();
    res.status(200).json({
      status: "Success",
      result: newQuotationCMP.length,
      data: { newQuotationCMP }
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.createquotationCMP = async (req, res) => {
  try {
    const newQuotationCMP = await QuotationCMPModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        quotationCMP: newQuotationCMP
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationCMP = async (req, res) => {
  try {
    const newQuotationCMP = await QuotationCMPModel.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: { newQuotationCMP }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationCMPID = async (req, res) => {
  try {
    const cmpId = req.params.id;
    const newQuotationCMP = await QuotationCMPModel.find({ cmpId: cmpId });
    res.status(200).json({
      status: "Success",
      data: { newQuotationCMP }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationCMPDROP = async (req, res) => {
  try {
    const newQuotationCMP = await QuotationCMPModel.find({}, "_id name cmpId");
    res.status(200).json({
      status: "Success",
      data: { newQuotationCMP }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.updatequotationCMP = async (req, res) => {
  try {
    const newQuotationCMP = await QuotationCMPModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        newQuotationCMP
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.deletequotationCMP = async (req, res) => {
  try {
    await QuotationCMPModel.findByIdAndDelete(req.params.id);
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
exports.createquotationDET = async (req, res) => {
  try {
    // Get the last quotation from the database
    const lastQuotation = await QuotationDet.findOne().sort({ quoNumber: -1 }).exec();
    // Increment the last quotation number to get the next one
    const nextQuoNumber = lastQuotation ? lastQuotation.quoNumber + 1 : 1;
    // Create the new QuotationDet object with the updated quoNumber
    const newQuotationDET = await QuotationDet.create({
      ...req.body,
      quoNumber: nextQuoNumber
    });
    res.status(201).json({
      status: "success",
      data: {
        quotationDET: newQuotationDET
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationDET = async (req, res) => {
  try {
    const newQuotationDET = await QuotationDet.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: { newQuotationDET }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getallquotationDET = async (req, res) => {
  try {
    const newQuotationDET = await QuotationDet.find();
    console.log("hello");
    res.status(200).json({
      status: "Success",
      result: newQuotationDET.length,
      data: { newQuotationDET }
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};
