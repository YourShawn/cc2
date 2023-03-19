//mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test

const express =  require("express");
const path = require("path")

const app  = new express();
app.use(express.static("public"));

//Parameters validation middleware. Apply the middleware
const customerMiddleware = (req,res,next)=>{
  console.log("I am a middleware");
  console.log(req.files)
  if(req.files == null || req.files.title == null){
    return res.redirect("/posts/new");
  }
  next();
}
//Using the middleware for this path
app.use("/posts/store/", customerMiddleware);

//This is for post method pass pamaters to API
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Files upload require
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// app.use(express.static("path"));
const ejs = require("ejs");
app.set("view engine","ejs");

app.listen(4000,()=>{console.log("4000 port");})
const mongodb = require("mongoose");
const BlogPost = require("./models/BlogPost");
mongodb.connect(
  "mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test",
  { useNewUrlParser: true }
);




app.get("/about", (req, res) => {res.render("about");});
app.get("/contact", (req, res) => {res.render("contact");});
app.get("/post", (req, res) => {res.render("post");});
app.get("/user/create", (req, res) => {res.render("userSave");});
app.get("/posts/new",(req,res)=>{res.render("create");});


const homeController = require("./controllers/home");
const userFind = require("./controllers/userFind");
const postsStore = require("./controllers/postsStore");
const userCreate = require("./controllers/userCreate");
const userLogin = require("./handlers/loginUser");

app.get("/", homeController);
app.post("/user/save", userCreate);
app.post("/posts/store/", postsStore);
app.get("/user/:id", userFind);
app.get("/user/login", userLogin);