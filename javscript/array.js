const inventory = [
  { name: "Laptop", price: 1000, category: "Tech" },
  { name: "Phone", price: 500, category: "Tech" },
  { name: "Shirt", price: 30, category: "Apparel" },
  { name: "Desk", price: 200, category: "Furniture" }
];

// map: Transform elements into a new array
const itemNames = inventory.map(item => item.name);

// filter: Extract matching elements
const techItems = inventory.filter(item => item.category === "Tech");

// reduce: Accumulate to a single value
const totalValue = inventory.reduce((acc, item) => acc + item.price, 0);

// find & findIndex
const desk = inventory.find(item => item.name === "Desk");

console.log(itemNames);  // ["Laptop", "Phone", "Shirt", "Desk"]
console.log(techItems);  // [{ name: "Laptop", price: 1000, category: "Tech" }, { name: "Phone", price: 500, category: "Tech" }]
console.table(techItems); // Displays tech items in a table format
console.log(totalValue); // 1730