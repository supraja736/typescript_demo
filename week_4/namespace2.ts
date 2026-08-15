namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log("Addition:", Calculator.add(15, 10));
console.log("Subtraction:", Calculator.subtract(15, 10));