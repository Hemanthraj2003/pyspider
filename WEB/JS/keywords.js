/**
 * KEYWORDS AND VARIABLES
 *
 * KEYWORDS:
 *   Keywords are reserved words in JavaScript that have special meaning and cannot be used as identifiers (variable names, function names, etc.).
 *   Examples include: var, let, const, if, else, for, while, function, return, break, continue, switch, case, default, try, catch, finally, throw, new, this, typeof, void, delete, in, instanceof, etc.
 *   These words are part of the JavaScript language syntax and are used to perform specific operations or define the structure of the code.
 *
 * VARIABLES:
 *   Variables are containers for storing data values. In JavaScript, variables can be declared using var, let, or const.
 *   - var: Function-scoped variable declaration (older, avoid in modern code)
 *   - let: Block-scoped variable declaration (preferred for variables that change)
 *   - const: Block-scoped, read-only variable declaration (preferred for constants)
 *   Variable names (identifiers) must not be JavaScript keywords and should follow naming rules (start with a letter, $, or _, and contain only letters, digits, $, or _).
 *
 * Example:
 *   let age = 25;
 *   const name = "Alice";
 *
 *  */

var a; // declaration
a = 10; // assignment
console.log(a);

a = true; // reassigning to a boolean value

console.log(a);

var a = "Hello"; // declaration and assignment
console.log(a);

const b = 10;
