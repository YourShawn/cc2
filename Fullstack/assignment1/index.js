const express = require("express");
const app = new express();
app.use(express.static("public"));
const path = require("path");
const ejs = require("ejs");
app.set("view engine","ejs");

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