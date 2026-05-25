/*
for: 
It repeats the block of code execution for known number of iterations.

Use for loop when the numbers of iterations is known.

syntax:
for(initialization; condition; increment/decrement){
    --
    --
    --
    --

}
*/

export {};
let n:number = 19;
for(let num=1; num<=10; num++){
    console.log(`${n} x ${num} = ${n * num}`); // 19 x 1 = 19
}

for(let num=1; num<=20; num++){
    if(num%2 === 0){
        console.log(num);
    }
}