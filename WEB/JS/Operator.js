// concatination

let fname = "Hemanth";
let lname = "Raj";
let age = 21;
let place = "banglore";

let res1 =
  "Name: " + fname + " " + lname + " Place: " + place + " age: " + age + ".";
console.log(res1);

console.log("Name", fname, lname, ", Place", place, ", Age", age);

// using interpolation
console.log(`My Name is ${fname} ${lname}, Im from ${place}, My age is ${age}`);

// RELATIONAL OPERATOR
/**
 * this operator is used to compare any 2 operands
 * Relational operator always results in Boolean output (True/False)
 * Euqality operator(==): It will check only the data if it is equal or not
 * ex: 10 == 10     true
 *     10 == "10"   true
 * strictly equality (===) : it will check both data and datatype
 * ex: 10 === 10  true
 *
 *     10 === "10"  false
 */

// LOGICAL OPERATOR ( || - or, && - and )
/**
 * this operator is used to check more than one condition
 * Both input and output is boolean
 * If all the condition are true then "Logocal &&" will be evaluatted as true
 * If any one the condition are true then "Logocal &&" will be evaluatted as true
 *
 *  1 || 1 = 1
 *  1 || 0 = 1
 *  1 || 0 = 1
 *  0 || 0 = 0
 *
 *
 *  1 && 1 = 1
 *  0 && 1 = 0
 *  1 && 0 = 0
 *  0
 * 
 
 
 
 
 
  && 0 = 0
 */
