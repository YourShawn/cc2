const AppointmentInfo = require("../models/AppointmentInfo");

module.exports = async (req, res) => {
  console.log("findG2License controller: ", req.query);
  const findQuery = {
    dateTime: req.query.dateTime,
  };
  const findBo = await AppointmentInfo.find(findQuery);
  console.log("Find Appointment Date is: ", findBo);
  
  const driverQuery = {
    driver: req.session.userId,
  };
  const driverAppointment = await AppointmentInfo.findOne(driverQuery);
  console.log("Find Driver Appointment Date is: ", driverAppointment);

  return res.render("driver_booking", { driverAppointment });
};
