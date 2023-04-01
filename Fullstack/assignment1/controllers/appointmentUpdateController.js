const AppointmentInfo = require("../models/AppointmentInfo");
const sillyDateTime = require("silly-datetime");
module.exports = async  (req,res)=>{
  console.log("===",req.body);
  if (req.body == null) {
      console.log("Paramters is null");
      return;
  }
  const currentBO = await AppointmentInfo.findById(req.body.id);
  console.log("Current BO:",currentBO);
  if(currentBO == null){
    return res.redirect("/driver/g2_appointment");
  }

  if (currentBO.available == "false") {
    return res.redirect("/booking");
  }

  var updateBean = {
    available: "false",
    driver: req.session.userId,
  };
    const appointment = await AppointmentInfo.findByIdAndUpdate(
      req.body.id,
      updateBean
    );
    console.log("---", appointment);
    return res.redirect("/booking");
};
