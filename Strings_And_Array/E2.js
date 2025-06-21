/* Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]
 */

let num = [7, 9, 0, -2, 5, -7, 1, 6];

let n=4; // Here we have tken 4 but we can also take input from user like :- prompt(`Numbers :- 7, 9, 0, -2, 5, -7, 1, 6 \n How many numbers you want from last?`);

let ans = num.slice(-n);
console.log(ans);
