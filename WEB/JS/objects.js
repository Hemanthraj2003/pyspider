let o = {};

console.log(o);
console.log(typeof o);

let car = {
  carName: "BMW",
  model: "X5",
  year: 2020,
};

console.log(car);

// accessing object properties
console.log(car.carName); // using dot notation
console.log(car["model"]); // using bracket notation

// modification

// updating the propety value
car.carName = "BMW-x";
console.log(car);

// add the property to the object
car.carPrice = "20L";
console.log(car);

//delete the prop from the object
delete car.carPrice;
console.log(car);

//Example01

let Student = {
  name: "Raj",
  age: 21,
  address: "somewhere",
  phone: 8888888888,
};

Student.name = "raj";
Student["age"] = 22;
Student["address"] = "No Where";
console.log(Student);
