/*
Type Alias: type

syntax:
type aliasname = datatype1 | datatype2;

*/

import create = require("node:domain");
import nodeDomain = require("node:domain");

let name:string;

type Text = string;

let email:Text;
email = "testuser1@example.com";
//email = 2342; //Type 'number' is not assignable to type 'string'.

type ID = number | string;

let userId:ID;
userId = 1234;
userId = "EMP1234";
//userId = true; //Type 'boolean' is not assignable to type 'ID'.

type Status = "Active" | "Inactive" | "Pending";
type Priority = 1 | 2 | 3 | 4;

function createUser(status:Status, priority:Priority){
    console.log(`Status: ${status}, Priority: ${priority}`); //Status: Active, Priority: 1
}

createUser("Active",1);
//createUser("PendingActive"); //Argument of type '"PendingActive"' is not assignable to parameter of type 'Status'.