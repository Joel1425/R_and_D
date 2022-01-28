var esprima = require('esprima');
function add(a=0,b=0){
    return a+b;
};
// var tree=esprima.parseScript("var res=add(2,5)");
// var tree=esprima.parseScript("require('sample.js')");
// var tree=esprima.parseScript("require(\"sample.js\")");
// console.log(JSON.stringify(tree));
// var tree=esprima.tokenize(add.toString());
// console.log(tree);
function getTrace(s){
    var tree=esprima.parseScript(s);
    return tree;
    return JSON.stringify(tree);
}


module.exports = {
    add, getTrace
}; 


// console.log("In son() : Caller is " + son.caller.name);