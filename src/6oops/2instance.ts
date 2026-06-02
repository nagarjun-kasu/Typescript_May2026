/*

Instance members: Members --> properties and methods



*/
export class Person{
    //instance properties
    name:string = "testuser";
    age:number = 35;

    //instance method
    getDetails():void{
        console.log("getDetails method is executed...");
    }

}

const obj = new Person();
console.log(obj.name); //testuser
console.log(obj.age); //35
obj.getDetails(); //getDetails method is executed...

//To call/access instance members of a class, we need to create an object/instance for the class

/*
Object creation:
keyword objref = new classname();
objref.name
objref.age

objref.getDetails()

*/