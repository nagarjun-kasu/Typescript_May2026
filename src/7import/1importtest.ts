import {BasePage1, BasePage2} from '../6oops/11base'

const base = new BasePage1();
base.open("url"); //Launching the application : url
base.click("loginButton"); //clicking on element:  loginButton
base.fill("username", "TestUser");
base.selfHeal("username", "password");
console.log(base.name); //Playwright

const base2 = new BasePage2();
base2.selectDropdownValue(); //select dropdown value method