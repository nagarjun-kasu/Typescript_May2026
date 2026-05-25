/*
for of:
It iterates over iterable values like arrays, strings, colletions...

syntax:
for(variabletype refvalue of collectionrefvariable){
        ---
        --
        --

}}

*/

let courses:string[] = ["Playwright", "Typescript", "Java", "Python", "Javascript"];

for(const item of courses){
    console.log(`${item}`);
}

let num:number[] = [1,2,3,4,5,6,7,8,9,10];

for(const n of num){
    if(n%2 !== 0){
        console.log(n); //2 4
    }
}


let word:string = "Playwright";

for(const ch of word){
    console.log(ch);
}

