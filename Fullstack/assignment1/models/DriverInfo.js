const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverInfoSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  licenseNo: String,
  carDetails: {
    make: String,
    model: String,
    year: String,
    platNo: String,
  },
  date: { type: Date, default: Date.now },
});

const DriverInfo = mongoose.model("DriverInfo",DriverInfoSchema);
module.exports = DriverInfo;
