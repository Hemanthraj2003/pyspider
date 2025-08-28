/**
 *
 * @LoopingStatements are used to execute a block of code repeatedly as long as a specified condition is true.
 *      - generally loops will run for infinite times if the condition is always true
 *      - to avoid infinite loops, ensure that the condition will eventually become false
 *
 * @for - loops through a block of code a number of times
 *      - The for loop is used when the number of iterations is known beforehand.
 *
 * syntax: for (initialization; condition; increment) {
 *     // code block to be executed
 * }
 *
 * @PROGRAM_TO_PRINT_NUMBERS_FROM_1_TO_5_USING_FOR_LOOP
 * for (let i =1 ; i <= 5; i++) {
 *      console.log(i);
 * }
 *
 * @tracing
 * i = 1, condition = true, print 1, increment i to 2
 * i = 2, condition = true, print 2, increment i to 3
 * i = 3, condition = true, print 3, increment i to 4
 * i = 4, condition = true, print 4, increment i to 5
 * i = 5, condition = true, print 5, increment i to 6
 * i = 6, condition = false, exit loop
 *
 * @PROGRAM_TO_PRINT_NUMBERS_FROM_5_TO_1_USING_FOR_LOOP
 * for (let i =5; i >=1; i--) {
 *    console.log(i);
 * }
 *
 * @PRINT_EVEN_NUMBERS_BETWEEN_1_TO_5
 * for (let i =1; i <=5; i++) {
 *   if (i % 2 === 0) {
 *    console.log(i);
 *  }
 * }
 *
 * @PRINT_ODD_NUMBERS_BETWEEN_1_TO_5
 * for (let i =1; i <=5; i++) {
 *  if (i % 2 !== 0) {
 *   console.log(i);
 *  }
 * }
 *
 * @PRINT_EVEN_NUMBERS_BETWEEN_1_TO_5_IN_REVERSE_ORDER
 * for (let i =5; i >=1; i--) {
 *  if (i % 2 === 0) {
 *   console.log(i);
 *  }
 * }
 *
 * @PRINT_ODD_NUMBERS_BETWEEN_1_TO_N_IN_REVERSE_ORDER
 * let N = Number(prompt("Enter a number: "));
 * for (let i = N; i >= 1; i--) {
 *  if (i % 2 !== 0) {
 *   console.log(i);
 *  }
 * }
 *
 * @FACTORIAL_OF_A_NUMBER
 * let num = Number(promt("Enter a Number: "));
 * let fact = 1;
 * for ( let i = 1; i <= num; i++) {
 *  fact = fact * i;
 * }
 * console.log(`Factorial of ${num} is ${fact}`);
 *
 *@SUM_OF_NUMBERS_IN_A_GIVEN_RANGE
 * let start = Number(prompt("Enter starting number: "));
 * let end = Number(prompt("Enter ending number: "));
 * let sum = 0;
 * for (let i = start; i <= end; i++) {
 *    sum = sum + i;
 * }
 *
 * console.log("Sum = ", sum)
 *
 * @SUm_FACTORS_OF_A_NUMBER
 * let n = 9
 * let sum = 0
 * for (let i=1; i<=n;i++)
 *      if (n%i==0)
 *          if(i%2 == 0)
 *              sum = sum + i
 * log(sum)
 *
 *
 * @IF_NUMBER_IS_PERFECT_NUMBER
 * let n=9
 * let sum = 0
 * for (let i=1;i<n;i++){
 *      if (n%i == 0){
 *          sum +=i
 *      }
 * }
 *
 * if(sum == num)
 *  log("Perfect Number!!!!")
 * else
 *  log("Not Perfect!!!")
 *
 *
 * let i = 0
 * for (console.log("Hello"); i<=5; console.log("World!")){
 *   console.log("Bye");i+=2;
 * }
 *
 * @WHILE_LOOPS
 *
 * while(condition){
 *      -----
 *      -----
 *      inc / dec
 * }
 *
 * @WAP_TO_PRINT_EVEN_NUMBER_USING_WHILE
 * let i =1;
 * while(i<=10){
 *      if(i%2 == 0) { console.log(i);}
 *      i++;
 * }
 *
 * */
