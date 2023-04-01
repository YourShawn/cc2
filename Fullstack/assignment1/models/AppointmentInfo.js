const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppoinementSchema = new Schema({
  dateTime: { type: String, required: true },
  dayTime: { type: String, required: true },
  available: { type: String, required: true },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DriverInfo",
    required: true,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DriverInfo",
  },
  createTime: {
    type: String,
    required: true,
    default: new Date(),
  },
});

// AppoinementSchema.pre("save", function (next) {
//   const userInfo = this;
//   bcrypt.hash(userInfo.password, 10, (error, hash) => {
//     userInfo.password = hash;
//     next();
//   });
// });

const AppoinementInfo = mongoose.model("AppointmentInfo", AppoinementSchema);
module.exports = AppoinementInfo;
