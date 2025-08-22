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

// let num2 = Number(prompt("Enter a Number"));

// if (typeof num2 == "number") {
//   if (num2 > 0) {
//     console.log(num2 % 2 == 0 ? "even" : "odd");
//   } else if (num2 < 0) {
//     console.log("-ve Number");
//   } else if (isNaN(num2)) {
//     console.log("Not a Number");
//   }
// } else {
//   console.log("Invalid");
// }

// SWITCH CASE

// let signal = "Red";

// switch (signal) {
//   case "Red":
//     console.log("Stop");
//     break;
//   case "Yellow":
//     console.log("Be Ready");
//     break;
//   case "green":
//     console.log("Go.....");
//     break;

//   default:
//     console.log("R.I.P");
// }

// let day = prompt("Enter the current Day");

// switch (day) {
//   case "Sunday":
//     console.log("Its Sunday");
//     break;
//   case "Monday":
//     console.log("Its Monday");
//     break;
//   case "Tuesday":
//     console.log("Its Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Its Wednesday");
//     break;
//   case "Thrusday":
//     console.log("Its Thrusday");
//     break;
//   case "Friday":
//     console.log("Its Friday");
//     break;
//   case "Saturday":
//     console.log("Its Saturday");
//     break;

//   default:
//     console.log("Enter a Proper Day");
// }

// let num1 = Number(prompt("Enter Number 01"));
// let num2 = Number(prompt("Enter Number 02"));
// let operator = prompt("ENter the symbol ( +, -, /, *):");

// let res;

// switch (operator) {
//   case "+":
//     res = num1 + num2;
//     break;
//   case "-":
//     res = num1 - num2;
//     break;
//   case "/":
//     res = num1 / num2;
//     break;
//   case "*":
//     res = num1 * num2;
//     break;
//   default:
//     res = false;
// }

// if (res) {
//   console.log(`${num1} ${operator} ${num2} = ${res}`);
// }

let age = Number(prompt("Enter ur age"));
console.log(typeof age, age);

switch (true) {
  case age >= 5 && age < 6:
    console.log("Start Walking");
    break;
  case age >= 6 && age <= 15:
    console.log("Go to school");
    break;
  case age >= 16 && age <= 23:
    console.log("Go to college");
    break;
  case age >= 24 && age <= 25:
    console.log("Go to JOB");
    break;
  case age >= 26 && age <= 30:
    console.log("Marry");
    break;
  case age >= 31 && age <= 50:
    console.log("mid life");
    break;
  case age >= 51 && age <= 60:
    console.log("Retire");
    break;
  case age >= 61:
    console.log("Die");
    break;
  default:
    console.log("Enter Proper age!!!");
}
