/*

Assignments:
=============
1. Write a program to print numbers divisible by 5 from 1 to 50 using while, do while, and for loop.
2. Write a program to find sum of first 10 natural numbers using while, do while and for loop.
3. Write a program to find factorial of a number 5 using while, do while and for loop.
4. Write a program to print sum of EVEN numbers from 1 to 20.
5. Write a program to count how many even numbers are present in an array.
6. write a program to print first non-repeating character in a strting "playwritght automation".
7. write a program to print first repeating character in a strting "playwritght automation".
*/

//6. write a program to print first non-repeating character in a strting "playwritght automation".
const text: string = "playwright automation";

let firstNonRepeatingChar: string = "";
let firstRepeatingChar: string = "";

for (let i = 0; i < text.length; i++) {
  const currentChar = text[i];
  if (!currentChar || currentChar === " ") {
    continue;
  }

  let count = 0;

  for (let j = 0; j < text.length; j++) {
    if (text[j] && currentChar.toLowerCase() === text[j]!.toLowerCase()) {
      count++;
    }
  }

  if(count === 1) {
    firstNonRepeatingChar = currentChar;
    break;
  }

  /* if(count >= 2) {
    firstRepeatingChar = currentChar;
    break;
  } */
}

console.log("First Non-Repeating Character:", firstNonRepeatingChar);
//console.log("First Repeating Character:", firstRepeatingChar);