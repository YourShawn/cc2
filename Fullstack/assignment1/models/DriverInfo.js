const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// const crypto = require("crypto");

const DriverInfoSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  licenseNo: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  carDetails: {
    make: String,
    model: String,
    year: String,
    platNo: String,
  },
  date: { type: Date, default: Date.now },
});

DriverInfoSchema.pre("save", function (next) {
  console.log("middle ware register save");
  const driverInfo = this;
  // var cypherKey = "mySecretKey";
  // var cipher = crypto.createCipher("aes-256-cbc", cypherKey);
  // var crypted = cipher.update(driverInfo.password, "utf8", "hex");
  // crypted += cipher.final("hex");
  // driverInfo.password = crypted;
  // next();
  bcrypt.hash(driverInfo.password, 10, (error, hash) => {
    driverInfo.password = hash;
    next();
  });
});


// DriverInfoSchema.pre("find", function (next) {
//   console.log("middle ware register save");
//   const driverInfo = this;
//   var cypherKey = "mySecretKey";
//   var decipher = crypto.createDecipher("aes-256-cbc", cypherKey);
//   var dec = decipher.update(driverInfo.licenseNo, "hex", "utf8");
//   dec += decipher.final("utf8");
//   driverInfo.licenseNo = dec;
//   console.log("DriverInfoSchema.pre(find): ", driverInfo);
//   next();
//   // bcrypt.hash(driverInfo.password, 10, (error, hash) => {
//   //   driverInfo.password = hash;
//   //   next();
//   // });
// });

const DriverInfo = mongoose.model("DriverInfo",DriverInfoSchema);
module.exports = DriverInfo;
