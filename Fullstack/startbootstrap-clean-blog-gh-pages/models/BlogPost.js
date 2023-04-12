
const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  username: String,
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  datePosted:{
    date: Date
  },
  image: String,
});
const BlogPost = mongodb.model("BlogPost", BlogPostSchema);
module.exports = BlogPost