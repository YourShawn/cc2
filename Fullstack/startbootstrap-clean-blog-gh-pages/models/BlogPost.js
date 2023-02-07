
const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  username: String,
  datePosted:{
    date: Date
  },
  image: String,
});
const BlogPost = mongodb.model("BlogPost", BlogPostSchema);
module.exports = BlogPost