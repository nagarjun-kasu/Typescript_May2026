//call parent class constructor in the child class

export class SearchPage{
    queryString:string;

    constructor(queryString:string){
        this.queryString = queryString;
    }

    click():void{
        console.log("click method from parent class SearchPage");
    }
}

export class SearchTest extends SearchPage{
    productName:string

    constructor(queryString:string, productName:string){
        super(queryString);
        this.productName = productName; //'super' must be called before accessing 'this' in the constructor of a derived class.
    }

    click():void{
        console.log("click method from child class in SearchTest class");
    }

    getDetails(){
        //parent class instance members can be accessed using super keyword
        super.click(); //click method from parent class SearchPage
        console.log(`QueryString: ${this.queryString}, ProductName: ${this.productName}`);
    }

}

const search = new SearchTest("lap", "Dell Laptop"); 
search.getDetails(); //QueryString: lap, ProductName: Dell Laptop

search.click(); //click method from child class in SearchTest class

//method signature: method name with parameters list