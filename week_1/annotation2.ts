// Variable Type Annotations
let Length: number = 12;
let breadth: number = 8;

// Function with Parameter and Return Type Annotations
function calculateArea(len: number, bre: number): number {
    return len * bre;
}

let area: number = calculateArea(Length, breadth);

console.log("Length:", Length);
console.log("Breadth:", breadth);
console.log("Area:", area);