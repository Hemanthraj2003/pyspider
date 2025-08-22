/**
 * @CONTROL_STATEMENTS
 *
 * if statement
 */

// let num = 8;
// if (num % 2 == 0) {
//   console.log(num + " Even Number");
// }

// let n = 10;
// if (n % 2 == 1) {
//   console.log(n + " is odd number");
// }

/**
 * if else statement block
 *
 */

// let num1 = prompt("Enter a Number");
// if (num % 2 == 0) {
//   console.log(`${num} is Even Number. `);
// } else {
//   console.log(`${num} is Odd Number. `);
// }

// nested if

let num2 = Number(prompt("Enter a Number"));

if (typeof num2 == "number") {
  if (num2 > 0) {
    console.log(num2 % 2 == 0 ? "even" : "odd");
  } else if (num2 < 0) {
    console.log("-ve Number");
  } else if (isNaN(num2)) {
    console.log("Not a Number");
  }
} else {
  console.log("Invalid");
}
