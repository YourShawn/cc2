

module.exports = (req, res) => {
  const dateList = [
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
  res.render("admin_appointment.ejs", { dateList,
  abc:"aaa1" });
};
