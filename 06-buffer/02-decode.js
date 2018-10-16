#!/usr/bin/node

const str = process.argv[2];
var buf = new Buffer('str','base64');
var namepwd = buf.toString('utf-8');
var data = namepwd.split(":");
console.log("usrname: %s,pwd: %s",data[0],data[1]);
