/*
Inheritance:
Inheritance is used to acquire the instance members (properties and methods) from parent/super/base class into child/sub class.

Code reusability

extends keyword can be used to inherit instance members from parent class into child class
child class inherits all public and protected members of the parent class
private members of parent class are not accessible in the child class

syntax:
export class childclassname extends parentclass{
        --
        --
        --

}

*/

//parent class
export class BasePage{
    //instance property
    name:string = "Playwright";

    //instance methods
    open(url:string){
        console.log("Launching the application :", url);
    }

    click(selector:string){
        console.log("clicking on element: ", selector);
    }

    fill(username:string, value:string){
        console.log("Enter the value in username field: ", value);
    }

    selfHeal(...locators:string[]):void{
        for(const locator of locators){
            console.log("Searching for the web element using locator: ", locator);
        }
    }

}

export class LoginPage extends BasePage{

}


const login = new LoginPage();
login.open("https://google.com"); //Launching the application : https://google.com
login.click("loginLink"); //clicking on element:  loginLink
login.fill("username", "TestUser");
login.selfHeal("username", "password");

console.log(login.name); //Playwright