
export class Student{
    name:string;
    grade:number | undefined;
    status:string

    constructor(name:string, grade?:number, status:string="Active"){
        this.name = name;
        this.grade = grade;
        this.status = status;
    }

    getStudentDetails(){
        console.log(this.name, this.grade, this.status);
    }
}

const obj = new Student("teststudent", 9);
obj.getStudentDetails(); //teststudent 9 Active

const obj2 = new Student("teststudent", 9, "Inactive"); 
obj2.getStudentDetails(); // teststudent 9 Inactive

const obj3 = new Student("TestName");
obj3.getStudentDetails(); //TestName undefined Active