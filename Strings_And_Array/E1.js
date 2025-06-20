/* Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2, 5, -1, -7, 4] and n=3
Print, [7, 9, 0] 
*/

let num = [7, 9, 0, -2, 5, -1, -7, 4];

// In this question i have added some more functionality that the user can enter the staring number as well as ending number.

let n1 = 1;

let n2 = 4;

let ans = num.slice(n1 - 1, n2);

console.log(ans);
