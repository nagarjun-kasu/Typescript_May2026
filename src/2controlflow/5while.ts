/*
while:
It executes the block of code as long as the condition is true.

syntax:
while(condition){
    --
    --
    --

}

*/

//Print 1 to 20 numbers on the console

let num:number = 1;
while(num<=20){
    console.log(num); //1 2 3 4 ..... 20
    num++;
}

//Print only even numbers from 1 to 20 --> 2 4 6 8 10 12 14 16 18 20
console.log("**** EVEN Number **********")
let num1:number=1
while(num1<=20){
    if(num1%2 === 0){
        console.log(num1); //2 4
    }
    num1++;
}

//Print multiplication table of any number ex: 15
/*
15 x 1 = 15
15 x 2 = 30


15 x 10 = 150

*/