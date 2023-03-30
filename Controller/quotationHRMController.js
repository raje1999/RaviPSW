const QuotationHRMModel = require("../Model/QuotationHRMModel");

exports.getallquotationHRM = async (req, res) => {
  try {
    const newQuotationHRM = await QuotationHRMModel.find();
    res.status(200).json({
      status: "Success",
      result: newQuotationHRM.length,
      data: { newQuotationHRM }
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.createquotationHRM = async (req, res) => {
  try {
    const newQuotationHRM = await QuotationHRMModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        quotationHRM: newQuotationHRM
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationHRM = async (req, res) => {
  try {
    const newQuotationHRM = await QuotationHRMModel.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: { newQuotationHRM }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getHrByDesignation = async (req, res) => {
  try {
    const jobRole = req.params.jobRole;
    console.log(jobRole);
    const newQuotationHRM = await QuotationHRMModel.find({ jobRole: jobRole });
    res.status(200).json({
      status: "Success",
      data: { newQuotationHRM }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getquotationHRName = async (req, res) => {
  try {
    const allQuotationHRMs = await QuotationHRMModel.find({}, "_id name");
    res.status(200).json({
      status: "Success",
      data: { allQuotationHRMs }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.updatequotationHRM = async (req, res) => {
  try {
    const newQuotationHRM = await QuotationHRMModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        newQuotationHRM
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.deletequotationHRM = async (req, res) => {
  try {
    await QuotationHRMModel.findByIdAndDelete(req.params.id);
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
