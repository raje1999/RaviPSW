const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors");

app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use(morgan("dev"));
const quotationProductRouter = require("./Route/quotationProductRoute");
const quotationHRMRouter = require("./Route/quotationHRMRoute");
const quotationCMPRouter = require("./Route/quotationCMPRoute");
const quotationDetRouter = require("./Route/quotationDetRoute");
app.use((req, res, next) => {
  console.log("Hello from the Middleware😎");
  next();
});

app.use((req, res, next) => {
  req.requesttime = new Date().toISOString();
  next();
});

app.use(express.json());

app.use("/api/v1/quotationProduct", quotationProductRouter);
app.use("/api/v1/quotationHRM", quotationHRMRouter);
app.use("/api/v1/quotationCMP", quotationCMPRouter);
app.use("/api/v1/quotationDet", quotationDetRouter);

module.exports = app;
