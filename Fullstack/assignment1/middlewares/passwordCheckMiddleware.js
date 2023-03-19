

module.exports = (req, res, next) => {
  let { username, password, repeatPassword, userType } = req.body;
  console.log("Middleware check parameters: ",req.body);
  //Check the parameters passed by browser.
  if (
    username == "" ||
    password == "" ||
    repeatPassword == "" ||
    userType == ""
  ) {
    var errorMessage = "All parameters are required";
    res.render("error", { errorMessage });
    return;
  }
  if (password !== repeatPassword) {
    var errorMessage = "Password and Confirm Password must be same.";
    res.render("error", { errorMessage });
    return;
  }
  next();
};

