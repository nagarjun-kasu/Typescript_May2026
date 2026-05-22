//slice(start, end?): It extracts some portion of string and returns a new string

let course:string = "Typescript";
console.log(course.slice(0,4));//Type  //start index is inclusive, end index is exclusive (endindex-1)
console.log(course.slice(4));//script

//positive index starts from o and forward direction
//negative index starts from -1 and backward direction
console.log(course.slice(-6)); //script
console.log(course.slice(-6,-2)); //scri


//split(separator, limit?):It splits the string into an array

let environment:string = "QA,Dev,UAT,Prod";
console.log(environment.split(",")) ; //[ 'QA', 'Dev', 'UAT', 'Prod' ]
console.log(environment.split(",", 2)) ; //['QA, 'Dev']
console.log(environment.split(",")[3]) //Prod

//mask first 8 digits and show only last 4 digits o/p: ********9012
const accountNumber:string = "123456789012";
console.log(accountNumber.slice(-4).padStart(12, "*")); //********9012