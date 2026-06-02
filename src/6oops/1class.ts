/*
OOP:
class
object
Inheritance
Polymorphism
Abstraction
Encapsulation
Interfaces


class: Class is a blueprint to create objects with shared properties and methods.

properties: variables
methods:
constructor


function vs method:
function is a block of code which is declared independently with function keyword

Method is a block of code which is declared inside the class and accessible through object/class.


Properties: variables
static properties/variables
instance properties
local properties

static properties:
syntax:
static variablename:datatype = value

instance properties:
syntax: variablename:datatype = value;

Methods:
static methods:
    syntax: static methodname(<parameters>):returntype{
    
    
    }
instance methods:
  syntax: methodname(<parameters>):returntype{
    
    
    }

syntax to declare the class:

export class classname{



}

*/

export class Employee{

    //static properties: variables declared with static keyword
    static num:number = 120;

    //static method: method declared with static keyword
    static getDetails():void{
        console.log("Employee details");
    }

    static getEmpDetails(empId:number, empName:string, department:string){
        console.log(empId, empName, department);
    }
    
}

//To access static variables/properties and call static methods
//classname.staticpropertyname or classname.staticmethodname()
console.log(Employee.num); //120

Employee.getDetails(); //Employee details

Employee.getEmpDetails(1234, "TestUser", "QA"); //1234 TestUser QA