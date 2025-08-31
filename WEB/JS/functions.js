/**
 * FUNCTIONS
 * are block of code that can be used to perform specific task N-Number of time
 *
 * @Types_of_Functions
 * 1. General Function
 * 2. Anonymous Function
 * 3. Arrow Function
 * 4. Self Invoking Function / Immediately Invoked Function (IIF)
 * 5. Call Back Function
 * 6. Higher Order Function
 *
 * @scenarios :
 * 1. Function without parameter and without return value
 * 2. Function with parameter and without return value
 * 3. Function without parameter and with return value
 * 4. Function with parameter and with return value
 *
 *
 *
 * 1. General Function:
 *  -> these functions are defined with function keyword followed by function name
 *    syntax:
 *        function functionName(parameters){
 *         // code to be executed
 *       }
 *  -> function can be invoked by calling the function name followed by parenthesis
 *
 *  @scenarios :
 *
 *  @scene_01 : Function without parameter and without return value
 *  function functionName(){
 *   // code to be executed
 *  }
 *  functionName();
 *
 *  @scene_02 : Function with parameter and without return value
 * function functionName(param1, param2){
 *   // code to be executed
 *  }
 *  functionName(arg1, arg2);
 *
 *  @scene_03 : Function without parameter and with return value
 * function functionName(){
 *   // code to be executed
 *   return value;
 *  }
 *  let res = functionName();
 *
 *  @scene_04 : Function with parameter and with return value
 * function functionName(param1, param2){
 *   // code to be executed
 *   return value;
 *  }
 *  let res = functionName(arg1, arg2);
 *
 */

function student(fname, lname, place, age) {
  console.log(
    `First Name: ${fname}, Last Name: ${lname}, Place: ${place}, Age: ${age}`
  );
}

function PrintNumber(start, End) {
  for (let i = start; i <= End; i++) {
    console.log(i);
  }
}

function PrintEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) console.log(i);
  }
}

function OddNumber(start, end) {
  for (let i = end; i >= start; i--) {
    if (i % 2 == 1) console.log(i);
  }
}

function Example() {
  return "Hello";
}

// WAP to check a given number is even or not using parameter and return value!!

function checkEven(number) {
  return number % 2 == 0 ? "EVEN" : "ODD";
}
console.log(checkEven(10));

console.log(checkEven(11));

function example01(name = "", age = 0, address = "") {
  // name = "example";
  console.log(name, address, age);
}
