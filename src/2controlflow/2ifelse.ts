/*
if: It executes a block of statements only when a condition is true

if(condtion){
    --block
    --
    --
    --
}
*/

let statusCode:number = 400;

if(statusCode === 200){
    console.log("API Test Case Passed");
}
else{
 console.log("API Test Case Failed");
}

let role:string="Guest";
if(role==="Admin"){
    console.log("Provide full access");
}
else{
    console.log("Access denied");
}