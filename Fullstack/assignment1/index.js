// import mongoose from 'mongoose';

const express = require("express");
const expressSession = require("express-session");
const app = new express();
app.use(express.static("public"));
const path = require("path");
const ejs = require("ejs");
app.set("view engine","ejs");
const DriverInfo = require("./models/DriverInfo");

//Post method body parser required
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Express Session
app.use(
  expressSession({
    secret: "keyboard cat",
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true, maxAge: 1000 * 60 * 3 },
  })
);
global.loggedIn = null;
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  console.log("* * *", loggedIn, global.userType);
   next(); 
});


const mongoose = require("mongoose");
// const DriverInfo = require("./models/DriverInfo")
mongoose.connect(
  "mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test",
  { useNewUrlParser: true }
);


//Routes
app.listen(4000,()=>{
  console.log("4000 port")
})

app.get("/",(req,res)=>{
  res.render("home");
})
app.get("/home", (req, res) => {
  res.render("home");
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

app.get("/admin_register", (req, res) => {
  res.render("admin_register");
});


//Controllers
const insertController = require("./controllers/insertController");
const updateController = require("./controllers/updateController");
const findController = require("./controllers/findController");
const userInsertController = require("./controllers/userInsertController");
const userLoginController = require("./controllers/userLoginController");
const findG2LicenseInfoController = require("./controllers/findG2LicenseInfoController");
const findGLicenseInfoController = require("./controllers/findGLicenseInfoController");
const logoutController = require("./controllers/logoutController");

//Middlewares
const passwordCheckMiddleware = require("./middlewares/passwordCheckMiddleware");
const driverInfoUpdateMiddleware = require("./middlewares/driverInfoUpdateMiddleware");
const driverInfoInsertMiddleware = require("./middlewares/driverInfoInsertMiddleware");
const userLoginCheckMiddleware = require("./middlewares/userLoginCheckMiddleware");
const authMiddleware = require("./middlewares/authMiddleware");


app.post("/store/driverInfo",driverInfoInsertMiddleware, insertController);
app.post("/driverInfo/update", driverInfoUpdateMiddleware, updateController);
app.get("/driverInfo/find", findController);
app.post("/userInfo/register",passwordCheckMiddleware, userInsertController);
app.post("/userInfo/login", userLoginCheckMiddleware, userLoginController);
app.get("/user",authMiddleware, findG2LicenseInfoController);
app.get("/g",authMiddleware, findGLicenseInfoController);
app.get("/logout", logoutController);



app.use((req,res)=>res.render("404_page"));