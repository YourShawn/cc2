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
  // res.render("g2_layout");
  res.render("user");
});
app.get("/error", (req, res) => {
  // res.render("g2_layout");
  res.render("error");
});
app.get("/admin_login", (req, res) => {
  res.render("admin_login");
});

app.post("/admin_login", (req, res) => {
  res.render("admin_login");
});

//Parameters validation middleware. For insert information
const driverInfoInsertMiddleware = (req,res,next)=>{
   let {firstName, lastName, age, licenseNo } =
     req.body;
     //Check the parameters passed by browser.
     if (
       firstName == "" ||
       lastName == "" ||
       age == "" ||
       licenseNo == ""
     ) {
       var errorMessage = "All parameters are required";
       res.render("error", { errorMessage });
       return;
     }
  next();
}

//Parameters validation middleware. For update driver information
const driverInfoUpdateMiddleware = (req,res,next)=>{
  let { make, model, year, platNo } = req.body;
     //Check the parameters passed by browser.
     if (make == "" || model == "" || year == "" || platNo == "") {
       var errorMessage = "Require Car's information parameters";
       res.render("error", { errorMessage });
       return;
     }
  next();
}
app.use("/store/driverInfo", driverInfoInsertMiddleware);
app.use("/driverInfo/update", driverInfoUpdateMiddleware);


app.post("/store/driverInfo",async (req,res)=>{

  var query = { licenseNo: req.body.licenseNo };
  const driverInfoFind = await DriverInfo.findOne(query);
  if (driverInfoFind != null) {
    var errorMessage = "User is exsiting";
    res.render("error", { errorMessage });
    return;
  }
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
      res.redirect("/");
    }
  );
});

app.get("/driverInfo/find", async (req,res)=>{
  if (req.query.licenseNo == null || req.query.licenseNo == '') {
    res.send(`
        <script>
          alert("your alert message"); window.location.href = "/g2";
        </script>`);
        return;
  }
  var query = { licenseNo: req.query.licenseNo };
    const driverInfoFind = await DriverInfo.findOne(query);
    if (driverInfoFind == null) {
      res.send(`
        <script>
          alert("Not User Found"); window.location.href = "/g2";
        </script>`
      );
      return;
    }
    res.render("g_layout_find.ejs", { driverInfoFind });
});


app.post("/driverInfo/update",async (req, res) => {
    let { make, model, year, platNo} =
      req.body;
  DriverInfo.findByIdAndUpdate(
    req.body._id,
    {
      $set: {
        carDetails: {
          make,
          model,
          year,
          platNo,
        },
      },
    },
    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log("Result", result);
      }
    }
  );
  res.redirect("/g");
});