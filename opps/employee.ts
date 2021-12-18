class Employee{
    name: string;
    dept: string;
    id: number;
    constructor(_name,_dept,_id){
        this.name = _name;
        this.dept = _dept;
        this.id = _id ; 
    }
    print(){
        console.log("hello person name is" + this.name + " person id is" + this.id + "from "+ this.dept);

    }
   
}
var emp = new Employee("manu", "IT", 2);
emp.print();