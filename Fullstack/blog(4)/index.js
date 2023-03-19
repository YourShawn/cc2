const express = require("express");
const expressSession = require("express-session");
const app = new express();
const path = require("path");
const fileUpload = require("express-fileupload");
const flash = require("connect-flash");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());
app.use(flash());
app.use(
  expressSession({
    secret: "f5Rgc%3dW@#faov4RvnknpK",
  })
);

global.loggedIn = null;
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

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
const logoutController = require("./controllers/logout");

const validationMiddleware = require("./middleware/validationMiddleware");
const authMiddleware = require("./middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");

app.get("/", homePostController);
app.use("/posts/store", validationMiddleware);
app.get("/post/:id", getPostController);
app.get("/posts/new", authMiddleware, newPostController);
app.post("/posts/store", authMiddleware, storePostController);

app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);
app.post(
  "/users/register",
  redirectIfAuthenticatedMiddleware,
  storeUserController
);

app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);
app.post(
  "/users/login",
  redirectIfAuthenticatedMiddleware,
  loginUserController
);

app.get("/auth/logout", logoutController);
app.use((req, res) => res.render("notfound"));
