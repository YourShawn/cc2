const express = require("express");
const app = new express();
const path = require("path");
const fileUpload = require("express-fileupload");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());

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
const newPostController = require("./controllers/newPost");
const homePostController = require("./controllers/home");
const getPostController = require("./controllers/getPost");
const storePostController = require("./controllers/storePost");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");

const validationMiddleware = require("./middleware/validationMiddleware");

app.get("/", homePostController);
app.use("/posts/store", validationMiddleware);
app.get("/post/:id", getPostController);
app.get("/posts/new", newPostController);
app.post("/posts/store", storePostController);

app.get("/auth/register", newUserController);
app.post("/users/register", storeUserController);

app.get("/auth/login", loginController);
app.post("/users/login", loginUserController);
