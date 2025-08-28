/**
 * FUNCTIONS
 * are block of code that can be used to perform specific task N-Number of time
 *
 */

function student(fname, lname, place, age) {
  console.log(
    `First Name: ${fname}, Last Name: ${lname}, Place: ${place}, Age: ${age}`
  );
}

student("Hello", "ASD", "India", 30);
student("Example", "!@#", "UK", 25);

function PrintNumber(start, End) {
  for (let i = start; i <= End; i++) {
    console.log(i);
  }
}

PrintNumber(40, 50);

console.log("Print Even");

function PrintEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) console.log(i);
  }
}

PrintEven(60, 75);

function OddNumber(start, end) {
  for (let i = end; i >= start; i--) {
    if (i % 2 == 1) console.log(i);
  }
}

OddNumber(50, 60);
