var Employee = /** @class */ (function () {
    function Employee(_name, _dept, _id) {
        this.name = _name;
        this.dept = _dept;
        this.id = _id;
    }
    Employee.prototype.print = function () {
        console.log("hello person name is" + this.name + " person id is" + this.id + "from " + this.dept);
    };
    return Employee;
}());
var emp = new Employee("manu", "IT", 2);
emp.print();
