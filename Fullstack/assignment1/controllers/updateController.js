const DriverInfo = require("../models/DriverInfo");
const crypto = require("crypto");
module.exports = async (req, res) => {
   const userId = req.session.userId;
  // const userId = "6412506409233aad173b8ed3";
  let { make, model, year, platNo } = req.body;
  DriverInfo.findByIdAndUpdate(
    userId,
    {
      $set: {
        carDetails: {
          make,
          model,
          year,
          platNo,
        },
      },
    },
    (error, result) => {
      if (error) {
        throw error;
      }
      if(!result){
        res.redirect("/home");
        return;
      }
      //Setting the new value to variables.
      result.carDetails.make = make;
      result.carDetails.model = model;
      result.carDetails.year = year;
      result.carDetails.platNo = platNo;
        var cypherKey = "mySecretKey";
        var decipher = crypto.createDecipher("aes-256-cbc", cypherKey);
        var dec = decipher.update(result.licenseNo, "hex", "utf8");
        dec += decipher.final("utf8");
        result.licenseNo = dec;
      res.render("g_layout_find", { driverInfoFind: result });
      return;
    }
  );
  
};