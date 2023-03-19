
module.exports = (req, res) => {
  console.log("logout route");
  global.userType = null;
  req.session.destroy(() => {
    res.redirect("/");
  });
};
