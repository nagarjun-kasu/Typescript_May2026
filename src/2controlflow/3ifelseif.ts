/*
if else if:

syntax:
if(condition1){
    --
    ---

}
else if(condition2){
    ---
    ---
}
else if(condtion3){

}
else{
    
    
}

*/

let statusCode:number=301;
if(statusCode === 200){
    console.log("API Test Case Passed");
}
else if(statusCode === 401){
    console.log("API Test Case Failed - 401 unauthorized")
}
else if(statusCode === 500){
    console.log("Internal server occurred");
}
else{
    console.log("unknown request");
}

let amount:number=60000;
if(amount<=1000){
    console.log("small transation");
}
else if(amount <=5000){
    console.log("medium transation");
}
else if(amount<=50000){
    console.log("large transaction");
}
else{
    console.log("huge transaction");
}

let browser:string = "chrome";
if(browser === "Chrome"){
    console.log("Launching the chrome browser");
}
else if(browser === "Firefox"){
    console.log("Launching the Firefox browser");
}
else if(browser === "Edge"){
    console.log("Launching the Edge browser");
}
else{
    console.log("Launching the application in default browser safari");
}