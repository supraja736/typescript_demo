"use strict";
class Employee {
    employeeId;
    employeeName;
    static companyName = "Infosys";
    constructor(id, name) {
        this.employeeId = id;
        this.employeeName = name;
    }
    showDetails() {
        console.log("Company:", Employee.companyName);
        console.log("Employee ID:", this.employeeId);
        console.log("Employee Name:", this.employeeName);
    }
}
const emp1 = new Employee(1001, "Supraja");
emp1.showDetails();
