const fs= require('fs');
const {getTrace} = require('./file.js');
var crypto = require('crypto');
function getHash(s){
    var hash = crypto.createHash('sha256').update(s.toString()).digest('hex'); // sha256
    return hash;
}
var global_data = fs.readFileSync("test/sample.js").toString();
// fs.readFile('file.js', 'utf-8', (err, data) =>{
//     if (err){
//         console.log("Error occured");
//         return;
//     }
//     console.log(data);
// });
// console.log("Type of global_data is : " + typeof(global_data));
// console.log("This is the file: \n\n");
// console.log(global_data);
// console.log("This is the getTrace() data: \n\n");
var res=getTrace(global_data);
// console.log(res);
// var temp_str=JSON.stringify(res.body[0]);
// console.log(temp_str);
// console.log(getHash(temp_str));
// var temp_str2=JSON.stringify(res.body[1]);
// console.log(temp_str2);
// console.log(getHash(temp_str2));
// console.log(res.body[0].declarations[0].id.properties); //variable declaration
// console.log(res.body[2].expression.arguments);
// console.log(res.body[0].declarations[0].init); //variable declaration
// console.log(res.body[1].declarations[0].init.callee.name); // variable declaration
// console.log(res.body[2].expression.arguments[1].body.body[0].declarations[0].init.arguments); //expression statement
// console.log(res.body[2].expression.arguments[1].body.body[0].declarations[0].init); //expression statement








// console.log(res.body[0].body.body[0].type); // Return statement from the final called function which is grandfather
// console.log(res.body[1].body.body[0].declarations[0].init.callee);
// console.log(res.body[1].body.body[0].declarations[0].init.callee);
// console.log(res.body[1].body.body[1].expression.callee); // Function Declaration
// console.log(res.body[2].expression.callee.name); //Expression Statement
// console.log(res.body[2]); //Expression Statement

console.log(res.body[2].expression); //Expression Statement
// console.log(res);
// function newNode(id, type, object_desc){ // creating structure
//     this.id=id;
//     this.type=type;
//     this.object_desc=object_desc;
// }

// const map = new Map();  // creating map for adjacency list 

// var root=new newNode(getHash(JSON.stringify(res)), res.type, null);
// map.set(root,[]);
// // console.log(root);

// function dfs(node){

// }

// for (i=0;i<res.body.length;i++){
//     var node = new newNode(getHash(JSON.stringify(res.body[i])), res.body[i].type, res.body[i]); // mapping to the root node
//     map.get(root).push(node);
//     // console.log(node);
// }
// // console.log(map.get(root));
// dfs(root);