/* 1) Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2, 5, -1, -7, 4] and n=3
Print, [7, 9, 0] 
*/
// {
//     let num = [7, 9, 0, -2, 5, -1, -7, 4];

//     // In this question i have added some more functionality that the user can enter the staring number as well as ending number.

//     let n1 = 1;

//     let n2 = 4;

//     let ans = num.slice(n1 - 1, n2);

//     console.log(ans);
// }


/***************************************************************************************************/

/* 2) Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]
 */
// {

//     let num = [7, 9, 0, -2, 5, -7, 1, 6];

//     let n = 4; // Here we have tken 4 but we can also take input from user like :- prompt(`Numbers :- 7, 9, 0, -2, 5, -7, 1, 6 \n How many numbers you want from last?`);

//     let ans = num.slice(-n);
//     console.log(ans);
// }

/***************************************************************************************************/

/* 3) Write a JavaScript program to check whether a string is blank or not. */

// {
//     let str = prompt("Enter a string");

//     if (str.length == 0) {
//         console.log(`The string is blank`);

//     } else {
//         console.log(`String is containing something`);

//     }
// }

/***************************************************************************************************/

/* 4) Write a JavaScript program to test whether the character at the given (character) index is lower case. */

// {
//   let str = "Siddharth Chudasama";
//   let idx = prompt("Enter the index number fo the character");

//   if (str[idx] == str[idx].toLowerCase()) {
//     console.log(`The caharacter '${str[idx]}' is in the Lower case`);
//   } else {
//     console.log(`The caharacter '${str[idx]}' is in the Upper case`);
//   }
// }

/***************************************************************************************************/

/* 5) Write a JavaScript program to strip leading and trailing spaces from a string. */

// {
//   let str = "    Siddharth Chudasama   ";
//   let newStr = str.trim();

//   console.log(`String  with spaces : ${str}`);
//   console.log(`Trimmed string : ${newStr}`);
  
  
// }

/***************************************************************************************************/

/* 6) Write a JavaScript program to check if an element exists in an array or not. */

// {
//   let elements = ["Siddharth", "Hardik", 65, 78, -45, -6];
//   let item = 65;

//   if (elements.indexOf(item) != -1) {
//     console.log(`Element ${item} exist in the array`);
//   } else {
//     console.log(`Element ${item} doesn't exist in the array`);
//   }
// }
