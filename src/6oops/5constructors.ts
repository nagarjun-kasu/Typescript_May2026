export class Products{

    name:string;
    price:number;
    description:string | undefined;
    values:number[];

    constructor(name:string, price:number, description?:string, ...values:number[]){
        this.name = name;
        this.price = price;
        this.description = description;
        this.values = values;

    }

    //instance method
    getDetails(){
        console.log(`Name: ${this.name}, Price:${this.price}, Description: ${this.description}, Values:${this.values}`);
    }

    //instance method
    selfHeal(...locators:string[]):void{
        for(const locator of locators){
            console.log("Searching for the web element using locator: ", locator);
        }
    }

}


const obj = new Products("Mac Book", 120000);
obj.selfHeal("username","password","signin");

obj.getDetails(); // Name: Mac Book, Price:120000, Description: undefined, Values:

const obj2 = new Products("Laptop", 95000, "Mac description", 1,2,3,4,5);
obj2.getDetails(); //Name: Laptop, Price:95000, Description: Mac description, Values:1,2,3,4,5
