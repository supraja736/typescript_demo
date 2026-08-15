"use strict";
var EmployeeDetails;
(function (EmployeeDetails) {
    class Employee {
        name;
        salary;
        constructor(name, salary) {
            this.name = name;
            this.salary = salary;
        }
        show() {
            console.log("Employee:", this.name);
            console.log("Salary:", this.salary);
        }
    }
    EmployeeDetails.Employee = Employee;
})(EmployeeDetails || (EmployeeDetails = {}));
const emp = new EmployeeDetails.Employee("Supraja", 50000);
emp.show();
