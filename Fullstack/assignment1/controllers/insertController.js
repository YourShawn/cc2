const DriverInfo = require("../models/DriverInfo");
const express = require("express");
const app = new express();

//Parameters validation middleware. For insert information
const driverInfoInsertMiddleware = (req,res,next)=>{
   let {firstName, lastName, age, licenseNo } =
     req.body;
     //Check the parameters passed by browser.
     if (
       firstName == "" ||
       lastName == "" ||
       age == "" ||
       licenseNo == ""
     ) {
       var errorMessage = "All parameters are required";
       res.render("error", { errorMessage });
       return;
     }
  next();
}

app.use("/store/driverInfo", driverInfoInsertMiddleware);
module.exports = async (req, res) => {
  var query = { licenseNo: req.body.licenseNo };
  const driverInfoFind = await DriverInfo.findOne(query);
  if (driverInfoFind != null) {
    var errorMessage = "User is exsiting";
    res.render("error", { errorMessage });
    return;
  }
  let { make, model, year, platNo, firstName, lastName, age, licenseNo } =
    req.body;
  DriverInfo.create(
    {
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
    (error, driverInfo) => {
      res.redirect("/");
    }
  );
};
