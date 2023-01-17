const express =  require("express");
// const path = require("path")
const app  = new express();
app.use(express.static("public"));
app.use(express.static("path"));
app.listen(4000,()=>{
  console.log("4000 port");
})

app.get("/",(req,res)=>{
  res.sendFile(path.resolve(__dirname, "path/index.html"));
  
})

