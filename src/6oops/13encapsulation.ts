/*
Encapsulation:
Encapsulation is the process of declaring the properties as private and access those private properties using public methods.

Direct access to private properties is restricted using private access modifier.

It protects sensitive data by making properties as private and expose those values through public methods

*/

class BankAccount{
    private accountNumber:number;
    private balance:number;
    private pin:number;

    constructor(accountNumber:number, balance:number, pin:number){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.pin = pin;
    }

    getAccountNumber():number{
        return this.accountNumber;
    }

    getBalance():number{
        return this.balance;
    }

    getPin():number{
        return this.pin;
    }

}

const bank = new BankAccount(1231231234, 7000, 2990);
const acctNumber = bank.getAccountNumber();
const bal = bank.getBalance();
const pin = bank.getPin();

console.log(acctNumber, bal, pin); //1231231234 7000 2990