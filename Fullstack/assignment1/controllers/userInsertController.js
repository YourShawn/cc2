const DriverInfo = require("../models/DriverInfo");
const express = require("express");
const app = new express();
// const bcrypt = require("bcrypt");
// const crypto = require("crypto");

module.exports =  (req, res) => {
 let { username, password, userType } = req.body;
  var query = { username: req.body.username };
   DriverInfo.findOne(query, (error, findUser) => {
    console.log("Check user info exsit: ", error, findUser);
     if (error) {
      console.log("findOne result");
       var errorMessage = "System is Busy, please try again late.";
       res.render("error", { errorMessage });
       return;
     }
     if (findUser) {
       var errorMessage = "User is exsiting";
       res.render("error", { errorMessage });
       return;
     }
    DriverInfo.create(
      {
        username,
        password,
        userType,
        firstName:"",
        lastName:"",
        age:"",
        licenseNo:"",
        carDetails:{
          make:"",
          model:"",
          year:"",
          platNo:"",
        },
      },
      (error, resultCreate) => {
        console.log("Create User: ", error, resultCreate);
        if (resultCreate) {
          res.redirect("/");
          return;
        }
        console.log("create result", error, resultCreate);
        var errorMessage = "System is Busy, please try again late.";
        res.render("error", { errorMessage });
      }
    );
   });
  
};
