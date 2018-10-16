#!/usr/bin/node
var buf1 = new Buffer(256);
const log = console.log;
log('Buffer length',buf1.length);
log('content:',buf1);

for(var i =0;i<256;i++){
  buf1[i]=i;
  log(buf1);
}
var buf2 = buf1.slice(250,256);
log('content',buf2)

buf2.fill(0);
log('\nbuffer content',buf2);

var arr=['a',0xBA];
var buf3 = new Buffer(arr);
log('\nbuf3 content',buf3);

var buf4 = new Buffer("hello world","utf8");
log("\nbuf4 content",buf4)

