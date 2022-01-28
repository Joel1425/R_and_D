const acorn = require('acorn');
const astring = require('astring');
const fs = require("fs");
// let indexAst = acorn.parse(index);
let filesImportedUsingRequire = [];
const visitedFiles = new Set();
function dfs(source){
    if(visitedFiles.has(source))
        return;
    let index = fs.readFileSync(source).toString();
    // console.log(index);
    let indexAst = acorn.parse(index, {ecmaVersion:2020});
    for (let i=0; i<indexAst.body.length; i++){
        let decl = indexAst.body[i].declarations
        if(decl != undefined){
            console.assert(decl.length == 1, "declaration array length is not 1");
            // console.log(decl[0].init.callee);
            if(decl[0].init && decl[0].init.callee && decl[0].init.callee.name === "require") {
                    const arg = decl[0].init.arguments;
                    console.assert(arg.length == 1, "init.argument array length is not 1");
                    if(arg[0].value){
                        // console.log(`In if block: ${arg[0].value}`);
                        let k;
                        let noSlash = true;
                        for(k=0; k<arg[0].value.length; k++){
                            if(arg[0].value[k] === '/'){
                                noSlash = false;
                                break;
                            }
                        }
                        if(noSlash == false){k++;    // TO CHECK LATER
                        // else k = 0;
                            const fileName = arg[0].value.slice(k);
                            filesImportedUsingRequire.push(fileName);
                            visitedFiles.add(fileName)
                            dfs(fileName);
                        }
                }
            }
        }
    }
}
dfs('test/sample.js');
console.log(filesImportedUsingRequire);
// console.log(ast);
let startAst = acorn.parse(fs.readFileSync('test/sample.js').toString(), {ecmaVersion:2020});
console.log(astring.generate(startAst));
for(let file = 0; file < filesImportedUsingRequire.length; file++){
    let currFile = fs.readFileSync(filesImportedUsingRequire[file]).toString();
    let currAst = acorn.parse(currFile, {ecmaVersion:2020});
    // console.log(filesImportedUsingRequire[file]);
    let formattedCode = astring.generate(currAst);
    console.log(formattedCode);
}