const {expect} = require ('chai') // expect is a method in chai :=> method in a file
const {add} = require('../file.js')
it('should add two numbers', ()=>{
    const result=add(3,5);
    expect(result).to.be.eq(8);
})
it('should run for even one number', ()=>{
    const result=add(5);
    expect(result).to.be.eq(5);
})
it('should run for no numbers', ()=>{
    const result=add();
    expect(result).to.be.eq(0);
})