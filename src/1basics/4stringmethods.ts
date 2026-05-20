
//string methods: All the string methods return new string, (string is immutable)

let message:string = "Hello Typescript";

//charAt(index): It returns the character at the specified index.
//index starts from 0, --> 1st char is at 0th index, 
console.log(message.charAt(0)); //H
console.log(message.charAt(7)); //y

//includes(searchstring, position?): It checks if string contains the specified string
console.log(message.includes("Type"));// true
console.log(message.includes("Auto")); //false

//startsWith(string): It checks if the  string starts with the specified string
console.log(message.startsWith("Hello"));//true
console.log(message.startsWith("Type")); //false

//endsWith(string): It checks if the  string ends with the specified string
console.log(message.endsWith("script"));//true
console.log(message.endsWith("Type")); //false

let course:string = "Playwright Automation";
//indexOf(char): It returs first index number of the value
console.log(course.indexOf("a")); //2
console.log(course.indexOf("Auto")); //11
console.log(course.indexOf("a", 12));//16

//lastIndexOf(char, fromIndex): It returns the index of last occurances of the specified character.
console.log(course.lastIndexOf("a")); //16
console.log(course.lastIndexOf("k")); //-1
console.log(course.lastIndexOf("a", 5));//2

//replace(searchvalue, replacevalue): It replaces the first occurance of specified string
console.log(course.replace("Playwright", "Selenium"));//Selenium Automation

//replaceAll():It replaces all occurances of a specified string
let msg:string="Playwright with typescript and typescript is user-friendly";
console.log(msg.replaceAll("typescript","python")); //Playwright with python and python is user-friendly

//toLowerCase(): It converts the string into lower case
let country:string="INDIA";
console.log(country.toLowerCase()); //india

//toUpperCase(): It converts the string into upper case
let name:string = "playwright";
console.log(name.toUpperCase()); //PLAYWRIGHT

//trim():It removes the spaces from both the ends of a string
let input:string = "     playwright with typescript     ";
console.log(input);
console.log(input.trim()); //playwright with typescript

//trimStart():It removes the spaces before the string
console.log(input.trimStart()); //playwright with typescript     

//trimEnd(): It removes the spaces after the string
console.log(input.trimEnd()); //     playwright with typescript

//repeat(count):It repeats a string for specified number of times
let str:string = "Playwright ";
console.log(str.repeat(5)); //Playwright Playwright Playwright Playwright Playwright

console.log("*".repeat(50)); //**************************************************

//padStart(targetLength, padString): It pads the start of a string with another string until it reaches specified length
let str1:string  = "5";
console.log(str1.padStart(10,"0")) //0000000005
console.log(str1.padStart(10,"*")); // *********5

//padEnd():it pads the end of a string with another string until it reaches the specified length
console.log(str1.padEnd(10,"0")); //5000000000
console.log(str1.padEnd(15,"*")); //5**************
