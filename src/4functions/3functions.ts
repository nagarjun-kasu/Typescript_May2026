/*
3. Generic Functions:

Generic function is used to define a placeholder type.

placeholder type is represented using T. T stands for type.

syntax:
function function_name<T>(parameter:T):T{

}

*/

function getNumber(num1:number):number{
    return num1;
}

function getValue(name:string):string{
    return name;
}

function getData<T>(value:T):T{
    return value;
}

const returnedNumber:number = getData(100);
console.log(returnedNumber); //100

const returnedString:string = getData("playwright");
console.log(returnedString); //playwright

function getFirstElementFromArray<T>(arr:T[]):T{
    return arr[0]!;
}

const num:number[]=[1,2,3,4,5,6,7];
console.log(num[0]); //1

console.log(getFirstElementFromArray(num)); //1

console.log(getFirstElementFromArray(["playwright", "typescript","appium", "mobilewright", "selenium"])); //playwright
