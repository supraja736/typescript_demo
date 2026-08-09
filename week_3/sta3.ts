class Employee {
    readonly employeeId: number;
    employeeName: string;

    static companyName: string = "Infosys";

    constructor(id: number, name: string) {
        this.employeeId = id;
        this.employeeName = name;
    }

    showDetails(): void {
        console.log("Company:", Employee.companyName);
        console.log("Employee ID:", this.employeeId);
        console.log("Employee Name:", this.employeeName);
    }
}

const emp1 = new Employee(1001, "Supraja");
emp1.showDetails();