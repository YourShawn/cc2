
const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
});
const BlogPost = mongodb.model("BlogPost", BlogPostSchema);
module.exports = BlogPost