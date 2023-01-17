// define a protocol with this constant.
const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req.url);
  res.end('hello world');
})
server.listen(3000);