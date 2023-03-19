
const DriverInfo = require("../models/DriverInfo");
const { decrypt } = require("../components/cryptComponent");
module.exports = (req, res) => {
  console.log("findGLicense controller: ", req.body, req.session);
  const userId = req.session.userId;
  if (!userId) {
    res.send(`
            <script>
              alert("Please Login"); window.location.href = "/admin_login";
            </script>`);
    return;
  }
  DriverInfo.findById(userId, (error, findUser) => {
    if (error) {
      throw error;
    }
    if (findUser.userType !== "Driver") {
      res.render("home");
      return;
    }
    if (findUser.licenseNo == "") {
      res.render("user");
      return;
    }
    console.log("Found driver infomations", findUser);
    findUser.licenseNo = decrypt(findUser.licenseNo);
    res.render("g_layout_find", { driverInfoFind: findUser });
    return;
  });
};