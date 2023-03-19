const User = require("../models/User.js");
module.exports = (req,res,next) =>{
    User.findById(req.session.userId,(error,user)=>{
      if(error || !user){
        //If we can not get the user by id, just redirect to home page.
        return res.redirect("/");
      }
      next();
    })
}