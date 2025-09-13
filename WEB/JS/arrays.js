/**
 * ARRAYS IN JAVASCRIPT
 *
 * - Arrays are special objects used to store multiple values in a single variable.
 * - They come with built-in methods to perform various operations.
 *
 * 1. CREATING ARRAYS
 *
 * - You can create an array using the Array constructor or by using array literals.
 *
 * Example using array literals:
 * const fruits = ['apple', 'banana', 'orange'];
 *
 * Example using the Array constructor:
 * const fruits = new Array('apple', 'banana', 'orange');
 *
 * 2. ACCESSING ARRAY ELEMENTS
 *
 * - You can access array elements using their index (starting from 0).
 *
 * Example:
 * console.log(fruits[0]); // Output: 'apple'
 *
 * 3. ARRAY METHODS
 *
 * - Arrays come with various built-in methods to manipulate and interact with the data.
 *
 * Common methods include:
 * 
 * @MAP_METHOD
 * 
 * 
 * @REDUCE_METHOD
 *
 * - used to convert ALL the array elements to single value after doing arithmetic operations
 * - SYNTAX:  array.reduce((accumulator, currentValue) => { ... }, initialValue);
 *             - initialValue is optional
 * - Example:
 * const numbers = [1, 2, 3, 4];
 * const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
 * console.log(sum); // Output: 10
 * 
 * @SORT_METHOD
 * 
 * - used to sort the elements of an array in place and return the sorted array.
 * - sorts single digit numbers correctly but not multi-digit numbers
 * - SYNTAX: array.sort([compareFunction])
 * - Example:
 * const numbers = [3, 1, 4, 1, 5, 9];
 * numbers.sort(); // sorts as strings by default
 * console.log(numbers); // Output: [1, 1, 3, 4, 5, 9]
 * 
 * // To sort numbers correctly, provide a compare function:
 * numbers.sort((a, b) => a - b);
 * console.log(numbers); // Output: [1, 1, 3, 4, 5, 9]
 * 
 */
