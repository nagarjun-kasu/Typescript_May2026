/*
switch: it executes the code based on matched case.

syntax:
switch(variable/value){
    case "value1":
        --
        --
        --
        break;
    case "value2":
        --
        --
        --
        break;
    case "value3":
        ---
        --
        break;
    default:
        ---
        ----
}
*/

let browser:string = "Chrome";

switch(browser){
    case "Chrome":
        console.log("Launching the application in chrome browser");
        break;
    case  "Firefox":
        console.log("Launching the application in firefox browser");
        break;
    case "Safari":
        console.log("Launching the application in safari browser");
        break;
    default:
        console.log("Launching the application in Edge browser");
}