const fs= require('fs');
const {getTrace} = require('./file.js');
var global_data = fs.readFileSync("test/sample.js").toString();
var res=getTrace(global_data);
console.log(res.body[2].expression.callee);
console.log(res.body[3].expression.callee);