const fs= require('fs');
const {getTrace} = require('./file.js');
var crypto = require('crypto');
function getHash(s){
    var hash = crypto.createHash('sha256').update(s.toString()).digest('hex'); // sha256
    return hash;
}
var global_data = fs.readFileSync("test/sample.js").toString();
var res=getTrace(global_data);
function newNode(type, object_desc){ // creating structure
    // this.id=id;
    this.type=type;
    this.object_desc=object_desc;
}

const map = new Map();  // creating map for adjacency list 
var root=new newNode(res.type, null); // initialising root
map.set(root,[]);
// console.log(root);
function dfs(parent,child){
    if (child==null || child.object_desc=="undefined") return;
    // console.log(child.object_desc);
    // console.log(Object.keys(child.object_desc).length);
    // if (Object.keys(child.object_desc).length == 0) return; //base condition
    if (map.has(parent) == false){
        map.set(parent,[]);
    }
    map.get(parent).push(child);
    // console.log(child.object_desc);
    for (const property in child.object_desc){
        // if (typeof(child.object_desc[property]) != "object" || child.object_desc[property]=="undefined") continue;
        if (Array.isArray(child.object_desc[property])){
            for (i=0;i<child.object_desc[property].length;i++){
                console.log(child.object_desc[property][i]);
                var node = new newNode(child.object_desc[property][i].type, child.object_desc[property][i]); // mapping to the current root node
                dfs(child,node);
            }
        }
        else if (
            child.object_desc[property] == null
            ||
            child.object_desc[property]=="undefined"
            ||
            typeof(child.object_desc[property]) != "object" 
            || 
            typeof(child.object_desc[property].type) == "undefined" 
            || 
            typeof(child.object_desc[property].type) == "null") continue;
        // console.log("in property\n");
        // console.log(property);
        // console.log(child.object_desc[property].type);
        console.log(child.object_desc[property]);
        var node = new newNode(child.object_desc[property].type, child.object_desc[property]); // mapping to the current root node
        dfs(child,node);
    }
    return;
}
// console.log(res.body.length);
for (x=0;x<res.body.length;x++){
    var node = new newNode(res.body[x].type, res.body[x]); // mapping to the root node
    dfs(root,node);
}











// console.log("Type of global_data is : " + typeof(global_data));
// console.log("This is the file: \n\n");
// console.log(global_data);
// console.log("This is the getTrace() data: \n\n");

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

// console.log(res.body[2].expression.arguments[1].body.body[0].declarations[0].init.callee.type); //Expression Statement
// console.log(res);
