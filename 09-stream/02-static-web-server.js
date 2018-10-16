#!/usr/bin/node
const http = require('http');
var file;
http.createServer((req,res)=>{
  console.log(req.url);
  file = path.join(__dirname,req.url);
  fs.createReadStream(file).pipe(res);
  res.end("hello world");
}).listen(8080);
