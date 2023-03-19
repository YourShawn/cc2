
const BlogPost = require("../models/BlogPost")
module.exports = async (req, res) => {
  // res.sendFile(path.resolve(__dirname, "path/index.ejs"));
  const blogs = await BlogPost.find({});
  // console.log(blogs)
  res.render("index", { blogs });
};