const User = require("../models/User");

module.exports = async (req, res) => {
  console.log(req.body);
  await User.create(
    {
      ...req.body
    },
    (error, result) => {
     var ers = Object.keys(error.errors).map(
        (key)=>error.errors[key].message
        );
        console.log(ers);
        
      if (error || !result) {
        console.log("Error", error);
      }
      return res.redirect("/");
    }
  );
};
