export class BasePage1{
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

export class BasePage2{
    selectDropdownValue():void{
        console.log("select dropdown value method");
    }
}