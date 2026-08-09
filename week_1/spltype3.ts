let employee: any = "Supraja";
employee = true;
console.log("Any Value:", employee);

let salary: unknown = 50000;

if (typeof salary === "number") {
    console.log("Monthly Salary:", salary);
}

function employeeInfo(name: string): void {
    console.log(`Employee Name: ${name}`);
}

employeeInfo("Supraja");