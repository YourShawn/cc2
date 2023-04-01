const DriverInfo = require("../models/DriverInfo");
const crypto = require("crypto");
const { decrypt } = require("../components/cryptComponent");

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
      result.licenseNo = decrypt(result.licenseNo);
      res.render("g_layout_find", { driverInfoFind: result });
      return;
    }
  );
  
};