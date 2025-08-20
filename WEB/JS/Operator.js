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
 *  0 && 0 = 0
 */

/**
 * BITWISE OPERATOR
 *
 * bitwise & (and)   - bitwise | (or)
 *
 * will perform operations on binary value
 * decimal value is converted into binary value and operations are performed and rsults will converted back to decimal number
 *
 */

/**
 * ASSIGNMENT OPERATOR (=)
 *  assigns the value of right-hand operator to a variable
 * the results of an assignment expression is the value assigned to the left-hand operand
 * also includes ( +=, -=, *=, /=, %= ) we called it as short-hand operator
 * short-hand operator: combining arithematic operator (+,-,*,/,%) and assignment operator
 * Assign the result value in same variable after performing some operation on that variable i.e., (+=, -=, *= , /=, %=)
 *
 * examples : x+=5, x-=5, x/=2,x*=8
 *
 */

/**
 * UNARY OPERATOR
 * A unary operation is an operation with only one operand
 * this operand comes either before or after the operator to increment(++) or decrement(--) the values.
 *
 * ++
 * postIncriment a++ store 1st and then increment
 * preIncriment ++a  increment 1st and then store
 *
 * --
 * postDec a-- store 1st then dec
 * preDec --a  dec first and then store
 *
 * NOTE: unary operator should not be used
 */

/**
 * TURNARY OPERATOR
 *
 * the conditional operator is the operator that takes 3 operands
 * 1. a condition
 * 2. true statement
 * 3. false statement
 *
 * syntax:    condition ? statement1: statement2;
 *
 *    ; is important to be closed
 */
