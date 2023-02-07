//mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test

const express =  require("express");
const path = require("path")
const fileUpload = require("express-fileupload");
const app  = new express();
app.use(express.static("public"));
//This is for post method pass pamaters to API
const bodyParser = require("body-parser");
//Parameters validation middleware. Apply the middleware
const customerMiddleware = (req,res,next)=>{
  console.log("I am a middleware");
  console.log(req.files)
  if(req.files == null || req.files.title == null){
    return res.redirect("/posts/new");
  }
  next();
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//Using the middleware for this path
app.use("/posts/store/", customerMiddleware);
// app.use(express.static("path"));
const ejs = require("ejs");


app.set("view engine","ejs");
app.listen(4000,()=>{
  console.log("4000 port");
})

const mongodb = require("mongoose");
const BlogPost = require("./models/BlogPost");
mongodb.connect(
  "mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test",
  { useNewUrlParser: true }
);

app.get("/", async (req,res)=>{
  // res.sendFile(path.resolve(__dirname, "path/index.ejs"));
  const blogs = await BlogPost.find({});
  // console.log(blogs)
  res.render("index", { blogs });
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

app.get("/user/:id",(req,res)=>{
  //If we have database, we can use the below coding.
  // var id = req.parameter.id;
  // user = db.getProfileUser(id);
  const user = {
    id: req.params.id,
    name: "Wei Xiao",
    email: "123@gmail.com",
    stack: "Mern",
    hobby: ["Swimming", "Singing"]
  };
  res.render("user",{user})
});

app.get("/posts/new",(req,res)=>{
  res.render("create");
});

app.post("/posts/store/", async (req, res, next) => {
  console.log(req.body);
  // if(req.files == null){
  //   redirect("/posts/new");
  // }
  let image = req.files.image;
  image.mv(
    path.resolve(__dirname, "public/assets/img", image.name),
    async (error) => {
      await BlogPost.create(
        {
          ...req.body,
          image: "assets/img/" + image.name,
        },
        (error, blogpost) => {
          res.redirect("/");
        }
      );
    }
  );
});
