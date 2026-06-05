
export class LoginPage{
    private txtUserName: string;
    private txtPassword:string;
    private btnLogin:string;

    constructor(){
        this.txtUserName = "#txtUserName";
        this.txtPassword = "#txtPwd";
        this.btnLogin = "#btnLogin";
    }

    public navigateToLoginPage():void{
        console.log("navigated to login page");
    }

    public enterUserName(username:string, value:string):void{
        console.log(`entering the ${value} into username field ${username} `);

        //this.txtUserName.fill(value)
    }

    public enterPassword():void{

    }

    public clickLogin(){
        //this.btnLogin.click();
    } 



}