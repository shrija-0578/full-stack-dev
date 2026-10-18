// Standard Function Declaration (Hoisted)
function calculateArea(width, height) {
  return width * height;
}

// Arrow Function (Lexical 'this', non-hoisted variable)
const calculateAreaArrow = (width, height) => width * height;

// Lexical 'this' Demonstration
const counter = {
  count: 0,
  increment() {
    // Arrow function preserves 'this' from increment() context
    setTimeout(() => {
      this.count++;
      console.log(`Count: ${this.count}`);
    }, 100);
  }
};

console.log(calculateArea(5, 10)); // Returns: 50
console.log(calculateAreaArrow(5, 10)); // Returns: 50
counter.increment(); // Count: 1