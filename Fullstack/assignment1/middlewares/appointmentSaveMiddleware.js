const DriverInfo = require("../models/DriverInfo");
module.exports = (req, res, next) => {
    if (req.body == null) {
      console.log("Paramters is null");
      return req.flash();
    }

  next();
};
