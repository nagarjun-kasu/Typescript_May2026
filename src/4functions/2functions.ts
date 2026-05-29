/*
Arrow Functions:
Arrow functions provider shorter syntax for writing the functions
Arrow functions can be used in array methods like map, filter, reduce.
Arrow functions enhances code reusability and maintainability.

syntax:
const function_name = (<param1:datatype, param2:datatype, ...>): return_type =>{
    --
    --
    ---

}

*/

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const sum: number = add(11, 22);
console.log("SUM: ", sum); //SUM:  33

const message = () => console.log("playwright automation training...."); //playwright automation training....

message();

const capitalizeString = (message: string): string => {
  const words: string[] = message.split(" ");
  console.log(words);
  const capitalizedArray: string[] = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  console.log(capitalizedArray);
  const modifiedString: string = capitalizedArray.join(" ");
  console.log("Modified String: ", modifiedString);
  return modifiedString;
};

const capitalizedString: string = capitalizeString("playwright with automation");
console.log(capitalizedString); //Modified String:  Playwright With Automation

const modifiedstring: string = capitalizeString("playwright is an open source automation tool");
console.log(modifiedstring); //Playwright Is An Open Source Automation Tool
