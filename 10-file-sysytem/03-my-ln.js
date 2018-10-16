#!/usr/bin/node
const fs = require('fs');
var opt;
var src;
var link
switch(process.argv.length){
  case 4:
    src = process.argv[2];
    link = process.argv[3];
    if(fs.existsSync(src)){
      fs.linkSync(src,link);
    }else{
      console.error('%s not exsts!',src);
      process.exit(1);
    }
    break;
  case 5:
    opt = process.argv[2];
    src = process.argv[3];
    link = process.argv[4];
    if(opt ==='-s'){
      if(fs.existsSync(src)){
        fs.symlinkSync(src,link);
      }
      else{
        console.error('%s not exists!',src);
        process.exit(1);
      }
    }else{
      console.error('%s not exit!',src);
      process.exit(1)
    }
break;
  default:
    console.error('命令行参数不正确')
}

