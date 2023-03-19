const mongodb = require("mongoose");
const Schema = mongodb.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }
});
UserSchema.pre("save",(next)=>{
  //Hashing function
  const user = this;
  bcrypt.hash(user.password, 10,(error,result)=>{
      user.password = result;
      next();
  });
})
const User = mongodb.model("User",UserSchema);
module.exports = User;
