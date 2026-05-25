/*
do while: It executes the block of statements at least once even though condition is false.


syntax:
do{
 --
 --
 ---
}while(condition);

*/

console.log(" *********** MULTIPLICATION TABLE **********")
let n:number = 19, i =1;

do{
    console.log(`${n} x ${i} = ${n * i}`); //19 x 1 = 19 19 x 2 =38
    i++; //i = i+1
} while(i<=10);

//Print only even numbers from 1 to 20 --> 2 4 6 8 10 12 14 16 18 20
console.log("**** EVEN Number **********")
let num1:number=1
do{
    if(num1%2 === 0){
        console.log(num1); //2 4
    }
    num1++;
}while(num1<=20);