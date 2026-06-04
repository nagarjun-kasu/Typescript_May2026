

export class Parent1{
    click():void{
        console.log("click method for Parent1 class");
    }
}

export class Parent2{
    click():void{
        console.log("click method from Paren2 class");
    }
}

//export class Child extends Parent1,Parent2{ //Classes can only extend a single class.}
//const child = new Child();
//child.click();//there is an ambiguity if it support multiple inheritance using classes