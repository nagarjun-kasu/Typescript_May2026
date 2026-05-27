/*
Immutable methods: Not changeable
map()
filter()
reduce()
concat()
join()
slice()

*/

const num:number[] = [1,2,3,4,5];

//map(): It maps the elements based on the condition and returns the new array
const mappedArray:number[] = num.map((n)=>n*5); //5,10,15,20,25
console.log("Original Array: ",num); //Original Array:  [ 1, 2, 3, 4, 5 ]
console.log("Mapped Array: ",mappedArray); //Mapped Array:  [ 5, 10, 15, 20, 25 ]

const users:string[] = ["user1","user2","user3"];
//convert these users into email address  user1@example.com, user2@example.com, user3@example.com
const emails:string[] = users.map((user)=> `${user}@example.com`);
console.log("Emails Array:", emails); //Emails Array: [ 'user1@example.com', 'user2@example.com', 'user3@example.com' ]

//filter(): It filters the data based on the condition and returns new array

const oddArray:number[] = num.filter((n)=>n%2 !== 0);
console.log("Odd numbers array: ", oddArray); //Odd numbers array:  [ 1, 3, 5 ]

type TestResult = {
    testname:string,
    status:string
}

const results: TestResult[] = [
    {testname:"LoginTest", status:"Passed"},
    {testname:"SearchTest", status:"Failed"},
    {testname:"Checkout", status:"Passed"}
];

const failedTests:TestResult[] = results.filter((test)=>test.status==="Failed");
console.log("Failed Tests:", failedTests); //Failed Tests: [ { testname: 'SearchTest', status: 'Failed' } ]

//reduce():It reduces to single value based on the condition
const sumValue:number = num.reduce((sum, n)=>sum+n, 0); //1-> 3 --> 6 --> 10 --> 15
console.log("SUM:", sumValue); //SUM: 15

const countOfPassedTests:number = results.reduce((count, test)=>
    {return test.status === "Passed" ? count+1 : count;},0) //2
console.log("Count of Passed Tests: ", countOfPassedTests); //Count of Passed Tests:  2

//concat(): It combines the elements and return the new array
const arr1:number[] = [1,2,3,4];
const combinedArray:number[] = arr1.concat(10,20,30,40);
console.log("Combined Array: ", combinedArray); //Combined Array:  [1,  2,  3,  4, 10, 20, 30, 40]

//join(): It joins the elements based on the separator and returns string
const courses:string[]= ["Playwright", "Mobilewright", "Vibium", "Selenium", "Appium"];
const joinedString:string = courses.join("-"); //Playwright/Mobile
console.log("Joined String: ", joinedString); //Joined String:  Playwright/Mobilewright/Vibium/Selenium/Appium

//slice(): It returns some portion of elements from the array
const num2:number[] = [1,2,3,4,5,6,7,8,9,10];
const slicedArray:number[] = num2.slice(1,5); //start index is included, end index is exclued (endindex-1)
console.log(slicedArray); //[ 2, 3, 4, 5 ]
console.log(num2.slice(1));//[2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(num2.slice(-5)); //[ 6, 7, 8, 9, 10 ]
console.log(num2.slice(-8,-3));//[ 3, 4, 5, 6, 7 ]

const message:string="playwright with typescript";
//output: Playwright With Typescript
const words:string[] = message.split(" ");
console.log(words); //[ 'playwright', 'with', 'typescript' ]
const capitalizedArray:string[]  = words.map((word)=>word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalizedArray); //[ 'Playwright', 'With', 'Typescript' ]
const modifiedString:string = capitalizedArray.join(" ");
console.log("Modified String: ", modifiedString); //Modified String:  Playwright With Typescript