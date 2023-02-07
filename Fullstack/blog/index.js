const express = require("express");
const app = new express();
const path = require("path");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded());

const ejs = require("ejs");
app.set("view engine", "ejs");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://bying:Benhero1%40@cluster0.howrcfx.mongodb.net/test",
  { useNewUrlParser: true }
);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

const BlogPost = require("./models/BlogPost.js");

app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  //console.log(blogposts);
  res.render("index", { blogposts });
});

app.get("/about", (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
  res.render("about");
});
app.get("/contact", (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
  res.render("contact");
});
app.get("/post/:id", async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  res.render("post", { blogpost });
});

app.get("/user/:id/:name", (req, res) => {
  const users = [
    {
      id: 1,
      name: "A",
      stack: "MERN",
      email: "theodoreonyejiaku@gmail.com",
      hubby: ["singing", "playing guitar", "reading", "philosoph"],
    },
    {
      id: 2,
      name: "B",
      stack: "MERN",
      email: "theodoreonyejiaku@gmail.com",
      hubby: ["singing", "playing guitar", "reading", "philosoph"],
    },
  ];
  res.render("user", { users });
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", async (req, res) => {
  await BlogPost.create(req.body, (error, blogpost) => {
    res.redirect("/");
  });
});
