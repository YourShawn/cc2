
const DriverInfo = require("../models/DriverInfo");
const { decrypt } = require("../components/cryptComponent");

module.exports = (req, res) => {
  console.log("findG2License controller: ",req.body,req.session);
  const userId = req.session.userId;
  // const userId = "6412506409233aad173b8ed3";
  if (!userId) {
          res.send(`
            <script>
              alert("Please Login"); window.location.href = "/admin_login";
            </script>`);
          return;
  }
  DriverInfo.findById(userId, (error, findUser) => {
    console.log("Found driver info", findUser);
    if (findUser.userType !== "Driver") {
      res.render("home");
      return;
    }
    console.log(findUser.licenseNo == "");
    if (findUser.licenseNo === "") {
      res.render("user");
      return;
    }
    console.log("Found driver infomations");
    findUser.licenseNo = decrypt(findUser.licenseNo);
    return res.render("g_layout_find", { driverInfoFind: findUser });
  });
 
};