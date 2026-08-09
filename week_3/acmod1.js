"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayEmployee() {
        console.log("Employee:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
const emp = new Employee("Supraja", 60000, "AI");
emp.displayEmployee();
console.log(emp.name);
