// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

// const UserSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   userType: { type: String, required: true },
// });

// UserSchema.pre("save", function (next) {
//   const userInfo = this;
//   bcrypt.hash(userInfo.password, 10, (error, hash) => {
//      userInfo.password = hash;
//      next();
//   });
// });

// const UserInfo = mongoose.model("UserInfo", UserSchema);
// module.exports = UserInfo;
