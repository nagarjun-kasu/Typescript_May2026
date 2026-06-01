//type alias for objects

type LoginData = {
    username:string,
    password:string
}


const user:LoginData = {
    username:"TestUser1",
    password:"Abc$3232"
}

function login(data:LoginData){
    console.log(data.username, data.password); //TestUser1 Abc$3232
}

login(user);

type Browser = "chromium" | "firefox" | "webkit"