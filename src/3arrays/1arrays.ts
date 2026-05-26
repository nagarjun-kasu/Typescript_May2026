/*
Array: Array is a data structure that can store multiple similar type of values into single variable.

syntax:
keyword arr_refvariable:datatype[] = [value1, value2, value3,........]

keyword arr_refvariable:Array<datatype> = [value1, value2, value3,........]

We can access the array elements using index. index starts from 0.

*/

const num:number[] = [1,2,3,4,5,6];
console.log(num[0]); //1
console.log(num[2]); //3

const num2:Array<number>= [1,2,3,4,5,6];

const courses:string[] = ["Playwright", "Mobilewright", "Typescript", "Python"];
console.log(courses[0]);

//Iterate through array
console.log("***** Using for of loop **********");
for(const course of courses){
    console.log(course);
}

console.log("***** Using for loop **********");
for(let i=0; i<courses.length;i++){
    console.log(courses[i]);
}

console.log(courses); //[ 'Playwright', 'Mobilewright', 'Typescript', 'Python' ]