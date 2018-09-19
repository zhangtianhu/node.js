#!/usr/bin/node

function bomb(){
  this.message="bomb";
}
bomb.prototype.explode = function(){
  console.log(this)
  console.log(this.message);
};
var b = new bomb();
 var timerID= setTimeout(b.explode.bind(b),2000 );
  
clearTimeout(timerID);


