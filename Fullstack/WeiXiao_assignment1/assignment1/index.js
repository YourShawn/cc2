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
  res.render("g2_layout");
});
app.get("/admin_login", (req, res) => {
  res.render("admin_login");
});

app.post("/admin_login", (req, res) => {
  res.render("admin_login");
});
app.post("/store/driverInfo",(req,res)=>{
  console.log("----", req.body);
  let { make, model, year, platNo, firstName, lastName, age, licenseNo } =
    req.body;
  DriverInfo.create(
    {
      firstName,
      lastName,
      age,
      licenseNo,
      carDetails: {
        make,
        model,
        year,
        platNo,
      },
    },
    (error, driverInfo) => {
      console.log(error);
      console.log(driverInfo);
      res.redirect("/");
    }
  );
});

app.get("/driverInfo/find", async (req,res)=>{
  console.log(req.query);
  var query = { licenseNo: req.query.licenseNo };
    const driverInfoFind = await DriverInfo.findOne(query);
    if (driverInfoFind == null) {
      res.render("g_layout_non");
    }
    // console.log(111111,driverInfoFind);
    // DriverInfo.updateOne(
    //   query,
    //   [{ $set: { licenseNo: "req.body.licenseNo" } }],
    //   (error, result) => {
    //     if (error) {
    //       throw error;
    //     } else {
    //       console.log(result, 777);
    //     }
    //   }
    // );
    // const driverInfoFind = await DriverInfo.findById(req.query.licenseNo);
    res.render("g_layout_find.ejs", { driverInfoFind });
});


app.post("/driverInfo/update",async (req, res) => {
  console.log(req.body, 'abc');
  var driverInfoParams = { _id: mongoose.Types.ObjectId(req.body._id) };
  // const queryOne = await DriverInfo.findOne(driverInfoParams);
  // const driverInfoFind = await DriverInfo.findOne({
  //   licenseNo: req.body.licenseNo,
  // });
  const driverInfoFind = await DriverInfo.findById(req.body._id);
  console.log("----------", driverInfoFind);
   console.log("2----------", req.body._id);
  DriverInfo.findByIdAndUpdate(
    req.body._id,
    { $set: { licenseNo: req.body.licenseNo } },
    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log(result, 111);
      }
    }
  );
  res.redirect("/g");
});