const { Parser } = require('acorn')
const ast = Parser.parse(readFileSync('/sample.js').toString())