/*
Access Modifier:
Access modifiers control the visibility and accessibility of class instance members (properties and methods)

public: default
public members can be accessed across the project. (inside the class, subclas/child class and other classes)
If no modifier specified to instance members, it defaults to public.

public name:string = "";

public click():void{


}

private:
private members can be accessed within the same class, not accessible outside of the class.

private salary:number = 34324;

private credentials():void{

}

protected:
protected members can be accessed within the same class and child/sub class.

protected salary:number = 23231;

protected login():void{

}

*/

export class Bank{
    //instance properties
    public accountNumber:number;
    private balance:number;
    protected branchName:string

    constructor(accountNumber:number, balance:number, branchName:string){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.branchName = branchName;
    }

    //instance method
    getDetails(){
        console.log(`Account Number: ${this.accountNumber}, Balance: ${this.balance}, BranchName: ${this.branchName}`);
    }



}//cass ends here

const obj = new Bank(12345678882, 3000, "Hyderabad");

console.log(obj.accountNumber); //12345678882
obj.getDetails(); //Account Number: 12345678882, Balance: 3000, BranchName: Hyderabad

export class ICICIBank extends Bank{

    getICICIDetails(){
        console.log(this.accountNumber, this.branchName);
    }

}

const icici = new ICICIBank(1002003004, 7000, "Gachibowli");
console.log(icici.accountNumber); //1002003004
icici.getDetails(); //Account Number: 1002003004, Balance: 7000, BranchName: Gachibowli
icici.getICICIDetails(); //1002003004 Gachibowli
