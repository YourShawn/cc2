// import mongoose from 'mongoose';

const express = require("express");
const app = new express();
app.use(express.static("public"));
const path = require("path");
const ejs = require("ejs");
app.set("view engine","ejs");


//Post method body parser required
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const mongoose = require("mongoose");
const DriverInfo = require("./models/DriverInfo")
mongoose.connect(
  "mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test",
  { useNewUrlParser: true }
);


app.listen(4000,()=>{
  console.log("4000 port")
})


app.get("/",(req,res)=>{
  res.render("home");
})
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/user", (req, res) => {
  res.render("user");
});
app.get("/g",(req,res)=>{
  res.render("g_layout");
});
app.get("/g2", (req, res) => {
  res.render("user");
});
app.get("/error", (req, res) => {
  res.render("error");
});
app.get("/admin_login", (req, res) => {
  res.render("admin_login");
});

app.post("/admin_login", (req, res) => {
  res.render("admin_login");
});


const insertController = require("./controllers/insertController");
const updateController = require("./controllers/updateController");
const findController = require("./controllers/findController");

app.post("/store/driverInfo", insertController);
app.post("/driverInfo/update", updateController);
app.get("/driverInfo/find", findController);