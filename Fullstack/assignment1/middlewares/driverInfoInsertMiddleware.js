

//Parameters validation middleware. For insert information
module.exports = (req, res, next) => {
  let { firstName, lastName, age, licenseNo } = req.body;
  //Check the parameters passed by browser.
  if (firstName == "" || lastName == "" || age == "" || licenseNo == "") {
    var errorMessage = "All parameters are required";
    res.render("error", { errorMessage });
    return;
  }
  next();
};

