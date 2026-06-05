/*
Abstract class:
Abstract class is a class that provides common functionality but enforce the concrete class to implement abstract methods.

characteristics:
use 'abstract' keyword to declare abstract class
we can not create object/instance for abstract class
must be extended by concrete class
can contain both abstract methods and non-abstract/concrete/normal methods
can contain properties and constructor

syntax:
abstract class classname{
    properties
    constructor
    abstract methods
    concretemethods
}

*/

 abstract class Logger{
    //instance property/variable
    protected appName:string

    constructor(appName:string){
        this.appName = appName;
    }

    abstract log(messag:string):void; //Abstract methods can only appear within an abstract class.

    getAppName():string{
        return this.appName;
    }

}

//new Logger(); //Cannot create an instance of an abstract class.

class ConsoleLogger extends Logger{

    constructor(){
        super("SampleAPP");
    }

    log(messag: string): void {
        console.log(`AppName: ${this.appName}, Message: ${messag}`);
    }

}

const obj = new ConsoleLogger();

obj.getAppName();
obj.log("Test Case is executed"); //AppName: SampleAPP, Message: Test Case is executed

/*
What is the difference between interface and abstract class?

Interface:
can contain only abstract methods
use implements keyword to implement abstract methods in concrecte class
It support multiple inheritance
It does not have constructor implementation

Abstract class:
can contain both abstract method and concrete methods
use extends keyword to implemen abstract methods in concrete class
It supports only single inheritance
constructor is allowed



*/