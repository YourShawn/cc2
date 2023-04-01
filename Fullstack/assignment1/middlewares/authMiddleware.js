const DriverInfo = require("../models/DriverInfo");
module.exports = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/admin_login");
  }
  DriverInfo.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      //If we can not get the user by id, just redirect to login page.
      return res.redirect("/admin_login");
    }
    next();
  });
};
