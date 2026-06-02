/*
Constructor:
Constructor is a method in a class which is called when the object/instance is created for the class using 'new' keyword.

Characteristics:
constructor name always named with 'constructor' keyword
Constructor does not return anything
Constructor is executed automatically when the object/instance is created for the class
It is used to initialize the values to the instance properties
Parameters are allowed inside the constructor
Optional and default parameters are allowed
Rest parameters ... are also allowed

*/

export class PersonDetails {
    /*
    //instance properties //declaration
    name:string;
    age:number;

    //initialization
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    */

    constructor(public name:string, public age:number){}


    //instance method
    getDetails():void{
        console.log("getDetails method is executed...");
    }

}

const obj = new PersonDetails("Nagarjun", 35);

console.log(obj.name);
console.log(obj.age);
obj.getDetails();