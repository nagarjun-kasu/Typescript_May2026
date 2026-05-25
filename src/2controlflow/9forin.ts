/*
for in:
It iterates over key of an object

syntax:

const variablename = {
    key1:value1,
    key2:value2,


}

*/

const testData = {
    username:"admin",
    password:"test@321",
    browser:"Chrome",
    environment:"QA"
}

for(const k in testData){
    console.log(testData[k as keyof typeof testData]); //admin test@321 Chrome QA

    console.log(`${k} = ${testData[k as keyof typeof testData]}`);
}

console.log(`${testData['username']}`)
//key=value