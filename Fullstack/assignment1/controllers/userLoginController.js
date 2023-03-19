const DriverInfo = require("../models/DriverInfo");
const bcrypt = require("bcrypt");
global.userType = null;
module.exports = async (req, res) => {
  console.log("login user paramers: ", req.session, req.body);
  let { username, password } = req.body;
  var query = { username: username };
  var findUser = null;
  try{
    findUser = await DriverInfo.findOne(query)
  }catch(error){
    console.log("find user error: ");
    var errorMessage = "System is Busy, please try again late.";
    res.render("error", { errorMessage });
    return;
  }
  var findUser = await DriverInfo.findOne(query);

  if (!findUser) {
    console.log("Didn't find user");
    const errorMessage = "Username Or password is incorrect, please checking!";
    res.render("admin_login", { errorMessage });
    return;
  }
  console.log("find user result: ", findUser);
  bcrypt.compare(
    password,
    findUser.password,
    (passwordEncryptError, hashRsult) => {
      console.log("encrypt password: ", passwordEncryptError, hashRsult);
      if (hashRsult) {
        console.log("userId: ", findUser._id);
        req.session.userId = findUser._id;
        userType = findUser.userType;
        res.redirect("/user");
        return;
      }
      const msg = "Password/username is incorrect";
      console.log(msg);
      res.render("admin_login", { errorMessage: msg });
      return;
    }
  );
};
