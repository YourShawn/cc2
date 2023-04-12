const AppointmentInfo = require("../models/AppointmentInfo");
const sillyDateTime = require("silly-datetime");
const { render } = require("ejs");
module.exports = async  (req,res)=>{
  if (!req.query.dateTime) {
    console.log("Paramsters are null");
    return res.json({});
  }
 const dateListTemplate = [
   "9:00",
   "9:30",
   "10:00",
   "10:30",
   "11:00",
   "11:30",
   "12:00",
   "12:30",
   "13:00",
   "13:30",
   "14:00",
 ];

    const findQuery = {
      dateTime: req.query.dateTime,
    };

      const dateList = await AppointmentInfo.find(findQuery);
      console.log("Find Date is: ", dateList);
      const dayTimeList = dateListTemplate.filter(
        (e) => !dateList.some((e2) => e2.dayTime === e)
      );
      console.log("---------", dayTimeList);

  res.json(dayTimeList);
};
