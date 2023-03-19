const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
  "mongodb+srv://bying:Benhero1%40@cluster0.howrcfx.mongodb.net/test",
  { useNewUrlParser: true }
);

// CRUD Operations
// Create
/*
BlogPost.create(
  { title: "blog title 1", body: "blog body " },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);
*/
// Read

BlogPost.find({ username: /n/ }, (error, blogspot) => {
  console.log(error, blogspot);
});

// Update
/*
var id = "63d98ad57bb19df641d5a10c";
BlogPost.findByIdAndUpdate(
  id,
  { title: "Updated title", body: "Updated body" },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);
*/
// Delete
/*
var id = "63d98dcfa14426a1d5b1c8e6";
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
  console.log(error, blogspot);
});
*/
