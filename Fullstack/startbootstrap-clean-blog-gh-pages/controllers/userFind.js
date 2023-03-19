// const User = require("../models/User");

module.exports = (req, res) => {
  //If we have database, we can use the below coding.
  // var id = req.parameter.id;
  // user = db.getProfileUser(id);
  const user = {
    id: req.params.id,
    name: "Wei Xiao",
    email: "123@gmail.com",
    stack: "Mern",
    hobby: ["Swimming", "Singing"],
  };
  res.render("user", { user });
};
