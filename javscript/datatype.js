// Strict Equality (===) vs Loose Equality (==)
console.log(5 == "5");   // true (Type coercion applied)
console.log(5 === "5");  // false (No type coercion)

console.log(null == undefined);  // true
console.log(null === undefined); // false

// Type Checking
console.log(typeof "hello");     // "string"
console.log(typeof 42n);         // "bigint"
console.log(typeof null);       // "object" (Historical JS bug)
console.log(Array.isArray([]));  // true