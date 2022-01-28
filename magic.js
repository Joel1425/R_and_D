// Make sure acorn and astring modules are imported
var esprima = require('esprima');
const astring = require('astring');
const acorn = require('acorn');
// Set example code
// var code = 'let answer = 4 + 7 * 5 + 3;\n';
// // Parse it into an AST
// var ast = esprima.parseScript(code);
// // Format it into a code string
// console.log(typeof(ast));
// var formattedCode = astring.generate(ast);
// // Check it
// console.log(formattedCode);
function getCode(ast){
    var formattedCode = astring.generate(ast);
    return formattedCode;
}
module.exports={
    getCode
};