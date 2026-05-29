/*
Function:
Functions are reusable blocks of code that performs specific task.

Functions improve code readability, reusability, maintainability.

Types of Functions:
1. Regular Function
2. Arrow Function
3. Generic Function
4. Async Function

syntax:
function function_name(<param1:datatype, param2:datatype,...>):return_type{
    --
    --
    --body

}

*/

import nodeDomain = require("node:domain");

function selectDropdownValue():void{
    console.log("Selected the value from dropdown list....");
}

selectDropdownValue();

//function with parameters
function add(num1:number, num2:number):number{
    return num1+num2;
}

const sum:number = add(5,10);
console.log("SUM: ", sum); //SUM:  15

const sum2:number = add(100,200);
console.log("SUM: ",sum2); //SUM:  300

//function with default parameters
function createUser(userId:number, userName:string, age:number=30){
    console.log(`UserID: ${userId}, UserName: ${userName}, Age: ${age}`);
}

createUser(123, "Nagarjun"); //UserID: 123, UserName: Nagarjun, Age: 30
createUser(222,"TestUser", 35); //UserID: 222, UserName: TestUser, Age: 35