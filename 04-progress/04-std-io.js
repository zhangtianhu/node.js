#!/usr/bin/node
var me = { },i=1;
const msg = ['name','email','qq','mobile' ],
      log = console.log;
const stdin = process.stdin;

stdin.on('data',(data=>{
  eval('me' +msg[i-1] + '='+data.slice(0,data.length-1)+'');
  if(i === 4){
    log(me);
    process.exit();
  }else{
    log(msg[i++]+':');
  }
}))

stdin.on('end',()=>{
  log(me);
});
