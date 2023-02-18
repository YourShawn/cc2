const DriverInfo = require("../models/DriverInfo");

module.exports = async (req,res)=>{
  if (req.query.licenseNo == null || req.query.licenseNo == '') {
    res.send(`
        <script>
          alert("your alert message"); window.location.href = "/g2";
        </script>`);
        return;
  }
  var query = { licenseNo: req.query.licenseNo };
    const driverInfoFind = await DriverInfo.findOne(query);
    if (driverInfoFind == null) {
      res.send(`
        <script>
          alert("Not User Found"); window.location.href = "/g2";
        </script>`
      );
      return;
    }
    res.render("g_layout_find.ejs", { driverInfoFind });
};
