const AppointmentInfo = require("../models/AppointmentInfo");
const sillyDateTime = require("silly-datetime");
module.exports = async  (req,res)=>{
  console.log("===",req.body);


  const findQuery = {
    dateTime: req.body.dateTime,
    dayTime: req.body.dayTime,
  };
  const findBo = await AppointmentInfo.findOne(findQuery);
  console.log("This Date is existing: ", findBo);
  if(findBo){
    console.log("This Date is existing: ", findBo);
    return res.render("error.ejs", { errorMessage: "This Date is existing!" });
  }

  const insertBean = {
    dateTime: req.body.dateTime,
    dayTime: req.body.dayTime,
    available: "true",
    admin: req.session.userId,
    createTime: sillyDateTime.format(new Date(), "YYYY-MM-DD HH:mm:ss"),
  };
    const appointment = await AppointmentInfo.create(insertBean);
    console.log("---", appointment);
    // res.render("success.ejs", { successMessage: "Save Data Success!" });
    // req.flash("a","a");
    res.render("admin_appointment", { insertBean });
};
