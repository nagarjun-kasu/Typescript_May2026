//var: variables declared with var keyword are function scoped, can be re-declared and can be re-assigned.

var course:string = "Typescript";
var course:string = "Playwright"; //re-declaration allowed
console.log(course); //Playwright
course = "Playwright with Typescript"; //Re-assignment allowed
console.log(course); //Playwright with Typescript

//typescript is case-sensitive
var Course:string="Python";

function test(){
    var count:number=20;
    console.log(count);//20
}
//console.log(count);

test()

//let: variables declared with let keyword are block scoped, can not be re-declared but can be re-assigned

let age:number = 30;
//let age:number = 35; //Cannot redeclare block-scoped variable 'age'.
age = 40;
console.log(age); //40

function testLet(){
    if(true){
        //block
        let empId:string="PQR1004";
        console.log(empId); //PQR1004
    }

    //console.log(empId); //Cannot find name 'empId'.
}

testLet()

//const: Variables declared with const keyword are block scoped, can not be re-declared and can not be re-assigned.

const empId:string="TEST1111";
//const empId:string="AB123"; //Cannot redeclare block-scoped variable 'empId'.
//empId = "AS123"; //Cannot assign to 'empId' because it is a constant.

function testConst(){
    if(true){
        //block
        const company:string="ABC1234";
        console.log(company); //ABC1234
    }

    //console.log(company); //Cannot find name 'company'.
}

testConst()



