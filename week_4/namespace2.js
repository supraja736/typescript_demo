"use strict";
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Calculator.subtract = subtract;
})(Calculator || (Calculator = {}));
console.log("Addition:", Calculator.add(15, 10));
console.log("Subtraction:", Calculator.subtract(15, 10));
