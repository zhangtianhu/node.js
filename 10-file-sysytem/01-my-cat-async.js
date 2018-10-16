#!/usr/bin/node

const fs = require('fs')
var file = process.argv[2] || __filename;

var fid=fs.openSync(file,'r')
var len = fs.statSync(file).size;
var buf = new Buffer(len);
fs.readSync(fid,buf,0,len);
try{
console.log(buf.toString('utf8'));}
catch(error){
  console.log("wrong")
}

  fs.closeSync(fid)
