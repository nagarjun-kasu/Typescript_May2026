/*
Array Methods:
Mutable methods: Changeable
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

Immutable methods: Not changeable
map()
filter()
reduce()
concat()
join()
slice()

*/

let num:number[] = [1,2,3,4,5,6];
//push(): It adds the element at the end and returns the new length

console.log("Before adding an element: ", num.length); //6
let lenOfArray:number = num.push(10);
console.log("After adding an element: ", lenOfArray); // 7
console.log(num);

//pop(): It removes the last element and returns the removed element
let removedElement:number | undefined = num.pop();
console.log("Removed Element: ",removedElement); //10
console.log("Array after removing last element: ",num); //[ 1, 2, 3, 4, 5, 6 ]

//shift(): It removes the first element and returns the removed element.
let removedFirstElement:number | undefined= num.shift();//
console.log("Removed first element: ", removedFirstElement); //1
console.log("Array after removing first element: ", num); //[ 2, 3, 4, 5, 6 ]

//unshift(): It adds the element at the beginning of array and returns the new length
let len:number = num.unshift(12);
console.log("Length after adding an element: ", len); //6
console.log("Array after adding an element: ", num); //[ 12, 2, 3, 4, 5, 6 ]

//splice(): It removes the elements from the array and inserts new elements in the removed places, returns the deleted elements
let deletedElements:number[] = num.splice(1,2,100,200,300);
console.log("Deleted elements: ", deletedElements); // Deleted elements:  [ 2, 3 ]
console.log("Final Array: ", num); //[12, 100, 200, 300, 4,   5,   6]

//sort(): It sorts the elements in ascending order and returns the array
let sortedArray:number[] = num.sort((a,b)=> a-b);
console.log("Sorted Array: ", sortedArray); //[4,   5,   6, 12, 100, 200, 300]

let courses:string[] = ["Playwright", "Selenium", "Appium", "Vibium", "Python"];
let sortedCourses:string[] = courses.sort();
console.log("Sorted Coures: ", sortedCourses); //Sorted Coures:  [ 'Appium', 'Playwright', 'Python', 'Selenium', 'Vibium' ]

//reverse(): It reverss the elements from the array
let courses2:string[] = ["Playwright", "Selenium", "Appium", "Vibium", "Python"];
courses2.reverse();
console.log("Reversed array: ", courses2); //Reversed array:  [ 'Python', 'Vibium', 'Appium', 'Selenium', 'Playwright' ]

let courses3:string[] = ["Playwright", "Selenium", "Appium", "Vibium", "Python"];
console.log(courses3.sort().reverse()); //[ 'Vibium', 'Selenium', 'Python', 'Playwright', 'Appium' ]