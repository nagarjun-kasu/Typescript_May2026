/*
interface:
Interface is a blueprint, in which we define the structure without implementation/body;

syntax:
interface interfacename{
    propertyname:datatype;

    methodname():returntype;

    click():void;

    fill(locator:string, value:string):void;

    selectDropdownValue():void;

}

childclass extends parantclass

class classname implements interface1, interface2{

}


*/

interface ITestCase{

    testcaseId:string;
    title:string;
    priority:string;

    //abstract methods
    scenario():void;
    execute():void;
    type(locator:string, value:string):void;


}

interface ITestCase2{
    //abstract methods
    validate():void;
    testResults():void;
    scenario():void;
    execute():void;
}

class LoginPage implements ITestCase, ITestCase2{
    testcaseId: string;
    title: string;
    priority: string;

    constructor(){
        this.testcaseId = "TC001";
        this.title = "validate the login page";
        this.priority = "High";
    }

    scenario(): void {
        console.log("scenario method is executed");
    }
    execute(): void {
        console.log("execute method is executed");
    }
    type(locator: string, value: string): void {
       console.log(`Entering the value ${value} into the text field ${locator}`);
    }

    validate(): void {
        console.log("validate method is executed")
    }
    testResults(): void {
        console.log("testResults method is executed");
    }

}

const login = new LoginPage();
console.log(login.testcaseId, login.title, login.priority); //TC001 validate the login page High
login.scenario();
login.execute();
login.type("username", "TestUer");
login.validate();
login.testResults();