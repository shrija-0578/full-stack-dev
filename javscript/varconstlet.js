// var: Function-scoped, hoisted with undefined initialization, re-declarable
var x = 10;
var x = 20; // Allowed
console.log(x); // Output: 20

// let: Block-scoped, hoisted to Temporal Dead Zone (TDZ), re-assignable
let y = 10;
console.log(y); // Output: 10
// let y = 20; // SyntaxError: Identifier 'y' has already been declared
y = 15; // Valid
console.log(y); // Output: 15

// const: Block-scoped, hoisted to TDZ, immutable reference
const z = 30;
console.log(z); // Output: 30
 z = 40; // TypeError: Assignment to constant variable.

// Note: Object/Array properties assigned via const CAN be mutated
const config = { theme: "dark" };
config.theme = "light"; // Valid
console.log(config); // Output: { theme: "light" }