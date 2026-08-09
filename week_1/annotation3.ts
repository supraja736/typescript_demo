let employeeName: string = "Vagdevi";
let basicSalary: number = 50000;
let bonus: number = 5000;
function calculateSalary(salary: number, bonusAmount: number): number {
    return salary + bonusAmount;
}

let totalSalary: number = calculateSalary(basicSalary, bonus);

console.log("Employee:", employeeName);
console.log("Basic Salary:", basicSalary);
console.log("Bonus:", bonus);
console.log("Total Salary:", totalSalary);