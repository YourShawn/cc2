const DriverInfo = require("../models/DriverInfo");
module.exports = async (req, res, next) => {
  console.log("auth admin middleware");
  if (!req.session.userId) {
    return res.redirect("/admin_login");
  }
 DriverInfo.findById(req.session.userId, (error, user) => {
    if (error) {
      throw error;
    }
    if (!user) {
      //If we can not get the user by id, just redirect to login page.
      return res.redirect("/admin_login");
    }
    if (user.userType != "Admin") {
      return res.render("error", { errorMessage: "You are not admin!" });
    }
    next();
  });
  
};
