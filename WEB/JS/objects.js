// ============================================
// JAVASCRIPT OBJECTS - COMPREHENSIVE GUIDE
// ============================================

// 1. CREATING OBJECTS
// ===================

// Empty object creation
let o = {};
console.log(o); // {}
console.log(typeof o); // "object"

// Object literal - most common way to create objects
let car = {
  carName: "BMW",
  model: "X5",
  year: 2020,
};

console.log(car); // { carName: "BMW", model: "X5", year: 2020 }

// 2. ACCESSING OBJECT PROPERTIES
// ==============================

// Two ways to access object properties:
console.log(car.carName); // Dot notation (most common)
console.log(car["model"]); // Bracket notation (useful for dynamic keys)

// 3. MODIFYING OBJECT PROPERTIES
// ==============================

// modification

// Updating existing property value
car.carName = "BMW-x";
console.log(car); // { carName: "BMW-x", model: "X5", year: 2020 }

// Adding new property to the object
car.carPrice = "20L";
console.log(car); // { carName: "BMW-x", model: "X5", year: 2020, carPrice: "20L" }

// Deleting property from the object
delete car.carPrice;
console.log(car); // { carName: "BMW-x", model: "X5", year: 2020 }

//Example01

// 4. PRACTICAL EXAMPLE - STUDENT OBJECT
// =====================================

let Student = {
  name: "Raj",
  age: 21,
  address: "somewhere",
  phone: 8888888888,
};

// Modifying properties using different notations
Student.name = "raj"; // Dot notation
Student["age"] = 22; // Bracket notation (useful for dynamic keys)
Student["address"] = "No Where"; // Bracket notation

console.log(Student); // Updated object

//
//
//
// 5. ALTERNATIVE OBJECT CREATION METHODS
// ======================================

// Using Object() constructor (less common, but works)
const obj = Object({ he: { hee: "Hello" } });

// Overwriting nested object with a string
obj.he = "Hello"; // This replaces the entire nested object!
console.log(obj); // { he: "Hello" } - lost the nested structure

// Note: Object({ key: value }) is equivalent to { key: value }
// Object literal {} is preferred for readability and performance

//using "NEW" keyword
// it is used to create the objects with the help of constructor methods (Inbuilt/Explicit) Methods
//
//
//
//
//
// 6. CONSTRUCTOR FUNCTIONS (Creating Objects from Functions)
// ==========================================================

// Constructor function - acts like a class in other languages
function Person(name) {
  this.name = name; // 'this' refers to the new object being created
}

// Creating an object using the constructor function with 'new' keyword
const a = new Person("Hello");
console.log(typeof a); // "object" - not "function"!
console.log(a.name); // "Hello"

// Important Notes:
// - Constructor functions should start with a capital letter (convention)
// - Must use 'new' keyword to create objects
// - Without 'new', 'this' would refer to the global object (window/global)
//
//
//
//
//
//
//
//
//
//
// 7. ADDITIONAL EXAMPLES AND CONCEPTS
// ===================================

// Object with methods (functions inside objects)
let calculator = {
  value: 0,

  // Method using function shorthand (ES6+)
  add(num) {
    this.value += num;
    return this; // Return 'this' for method chaining
  },

  // Traditional method syntax
  subtract: function (num) {
    this.value -= num;
    return this;
  },

  // Getter method
  getValue() {
    return this.value;
  },
};

// Method chaining
calculator.add(10).subtract(3).add(5);
console.log(calculator.getValue()); // 12

//
//
//
//
//
//
//
//
//
//
//
// 8. OBJECT PROPERTY ACCESS PATTERNS
// ==================================

let user = {
  firstName: "John",
  lastName: "Doe",
  "full-name": "John Doe", // Property with hyphen needs brackets
  123: "numeric key", // Numeric keys
};

// Different access methods
console.log(user.firstName); // "John"
console.log(user["lastName"]); // "Doe"
console.log(user["full-name"]); // "John Doe" - can't use dot notation
console.log(user[123]); // "numeric key"
console.log(user["123"]); // "numeric key" - same as above

// Dynamic property access
let prop = "firstName";
console.log(user[prop]); // "John" - using variable as key

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ============================================
// SUMMARY OF OBJECT CREATION METHODS
// ============================================

/*
1. Object Literal (Recommended):
   let obj = { key: value };

2. Object() Constructor:
   let obj = Object({ key: value }); // Same as above but verbose

3. Constructor Function:
   function MyObj(param) { this.prop = param; }
   let obj = new MyObj("value");

4. Object.create():
   let obj = Object.create(null); // Creates object with no prototype

5. Class (ES6+):
   class MyClass { constructor(param) { this.prop = param; } }
   let obj = new MyClass("value");

Key Takeaways:
- Objects are key-value pairs
- Properties can be accessed with dot (.) or bracket ([]) notation
- Use bracket notation for dynamic keys or keys with special characters
- Objects are mutable - can be modified after creation
- typeof object always returns "object"
*/
