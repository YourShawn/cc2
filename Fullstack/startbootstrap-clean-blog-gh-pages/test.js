
const mongodb = require("mongoose");
const BlogPost = require("./models/BlogPost");
mongodb.connect(
  "mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test",
  {useNewUrlParser:true}
);
BlogPost.create({
  title:"title name",
  body:"bodt content"
},(error,blogPost)=>{
  console.log(error,blogPost);
});