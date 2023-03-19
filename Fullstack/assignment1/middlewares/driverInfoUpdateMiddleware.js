

//Parameters validation middleware. For update driver information
module.exports = (req, res, next) => {
  console.log("Driver informations update check middleware!");
  let { make, model, year, platNo } = req.body;
  //Check the parameters passed by browser.
  if (make == "" || model == "" || year == "" || platNo == "") {
    var errorMessage = "Require Car's information parameters";
    res.render("error", { errorMessage });
    return;
  }
  next();
};

