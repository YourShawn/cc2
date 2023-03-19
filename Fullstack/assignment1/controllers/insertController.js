const DriverInfo = require("../models/DriverInfo");
// const bcrypt = require("bcrypt");
var crypto = require("crypto");
const { encrypt, decrypt } = require("../components/cryptComponent");
module.exports =  (req, res) => {
  console.log(req.session);
  const userId = req.session.userId;
  // const userId = "6412506409233aad173b8ed3";
  // var query = { licenseNo: req.body.licenseNo };
  if (!userId) {
    //Please login
    res.render("admin_login", { errorMessage: "Please login" });
    return;
  }
  console.log("insert driver infos", req.body);
  let { make, model, year, platNo, firstName, lastName, age, licenseNo } =
    req.body;
  //crypt
  // var cypherKey = "mySecretKey";
  // var cipher = crypto.createCipher("aes-256-cbc", cypherKey);
  // var crypted = cipher.update(licenseNo, "utf8", "hex");
  // crypted += cipher.final("hex");
  licenseNo = encrypt(licenseNo);
  DriverInfo.findByIdAndUpdate(
    userId,
    {
      $set: {
        firstName,
        lastName,
        age,
        licenseNo,
        carDetails: {
          make,
          model,
          year,
          platNo,
        },
      },
    },
    (error, result) => {
      console.log("Result update: ", result);
      if (error) {
        throw error;
      }
      DriverInfo.findById(result._id,(error,findUserAfterUpdate)=>{
        if(error){
          console.log("Render to home");
          res.render("home");
          return;
        }
        findUserAfterUpdate.licenseNo = decrypt(findUserAfterUpdate.licenseNo);
         console.log("findUserAfterUpdate : ", findUserAfterUpdate);
         res.render("g_layout_find", { driverInfoFind: findUserAfterUpdate });
         return;
      });
    }
  );
};
