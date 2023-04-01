const AppointmentInfo = require("../models/AppointmentInfo");
const sillyDateTime = require("silly-datetime");
module.exports = async  (req,res)=>{
  console.log("--- ",req.body);
  if (req.body == null) {
    console.log("Paramters is null");
    return;
  }
  // const todayTime = sillyDateTime.format(new Date(), "YYYY-MM-DD");
  // if (todayTime > req.body.dateTime) {
  //     return res.render("driver_booking.ejs", {
  //       findBo:{},
  //       show: req.body.dateTime,
  //     });
  // }

  const findQuery = {
    dateTime: req.body.dateTime,
  };
  const findBo = await AppointmentInfo.find(findQuery);
  console.log("Find Date is: ", findBo);
  
  return res.render("driver_booking.ejs", {
    findBo,
    show: req.body.dateTime,
  });
};
