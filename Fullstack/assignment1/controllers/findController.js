const DriverInfo = require("../models/DriverInfo");
const bcrypt = require("bcrypt");

module.exports =  (req,res)=>{
  if (req.query.licenseNo == null || req.query.licenseNo == '') {
    res.send(`
        <script>
          alert("your alert message"); window.location.href = "/g2";
        </script>`);
        return;
  }
  var query = { licenseNo: req.query.licenseNo };
    const driverInfoFind = DriverInfo.findOne(query,(error,result)=>{
      console.log("----", result);
      if(result){
        res.render("g_layout_find.ejs", { driverInfoFind: result });
        return;
      }
      res.send(`
            <script>
              alert("Not User Found"); window.location.href = "/g2";
            </script>`);
      return;
    });

};
