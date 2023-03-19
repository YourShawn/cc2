

module.exports = (req, res, next) => {
  let { username, password} = req.body;
  console.log("Login check parameters: ",req.body);
  //Check the parameters passed by browser.
  if (
    username == "" ||
    password == ""
  ) {
    var errorMessage = "All parameters are required";
    res.render("error", { errorMessage });
    return;
  }
  next();
};

