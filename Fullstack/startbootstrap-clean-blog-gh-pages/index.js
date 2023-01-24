

const express =  require("express");
const path = require("path")
const app  = new express();
app.use(express.static("public"));
// app.use(express.static("path"));
const ejs = require("ejs");
app.set("view engine","ejs");
app.listen(4000,()=>{
  console.log("4000 port");
})

app.get("/",(req,res)=>{
  // res.sendFile(path.resolve(__dirname, "path/index.ejs"));
  res.render("index");
})

app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "path/about.ejs"));
  res.render("about");
});

app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "path/contact.ejs"));
  res.render("contact");
});
app.get("/post", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "path/post.ejs"));
  res.render("post");
});
