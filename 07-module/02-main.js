#!/usr/bin/node

var circle= require('./02-export-function.js');

console.log(circle(20).area());
console.log(circle(20).diameter());

var circle = require('./02-export-object');
console.log(circle.diameter(20));
