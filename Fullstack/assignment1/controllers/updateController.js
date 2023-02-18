const DriverInfo = require("../models/DriverInfo");
const express = require("express");
const app = new express();

//Parameters validation middleware. For update driver information
const driverInfoUpdateMiddleware = (req,res,next)=>{
  let { make, model, year, platNo } = req.body;
     //Check the parameters passed by browser.
     if (make == "" || model == "" || year == "" || platNo == "") {
       var errorMessage = "Require Car's information parameters";
       res.render("error", { errorMessage });
       return;
     }
  next();
}
app.use("/driverInfo/update", driverInfoUpdateMiddleware);

module.exports = async (req, res) => {
  let { make, model, year, platNo } = req.body;
  DriverInfo.findByIdAndUpdate(
    req.body._id,
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
      } else {
        console.log("Result", result);
      }
    }
  );
  res.redirect("/g");
};