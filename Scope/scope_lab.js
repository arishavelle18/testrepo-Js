// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
{
// Block scope
var globalVar = "I'm a block variable";
let globalLet = "I'm also block, but scoped with let";
const globalConst = "I'm a block constant";
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


// function show(){
// var functionVar = "I'm a block-scoped var";
// let functionLet = "I'm a block-scoped let";
// const functionConst = "I'm a block-scoped const";
// }
// show();
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceErro