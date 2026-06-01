/*
Async functionL Asynchronous function
async

syntax:
async function function_name(<parameters>):Promise<datatype>{
        --
        --
        --
        await 

}


timeout: 60000
expect: 5000
navigationTimeout:10000
actionTImeout:
*/

async function goto(url:string):Promise<void>{
    console.log("application is launced")

}


goto("https://google.com");


/*

import (test, expect) from "@playwright/test";

test("test case title", async ({page})=>{

    await page.goto("url");
    await page.locator("xpath/css").click();


})




loginpage.ts
 //define all locators

 async function enterUsername(username:string):Promise<void>{
    await page.locator("").fill(username);
 }


 login.spec.ts

 test("validate the login functionality with valid credentials", async({page})=>{
        loginpage.enterUsername("dsfsdfsd");
 
 
 
 })
*/