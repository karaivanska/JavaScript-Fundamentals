/*
Write a JS program that receives two variables and an operator and performs a calculation between the variables, using the operator. Store the different functions in variables and pass them to your calculator.
The input comes as three arguments – two numbers, and a string, representing the operator.
The output should be printed on the console.
 */

"use strict";

function calculator(a, b, op){
    function doIt(a, b, operation){
        return operation(a, b);
    }

    let add = function (a, b) {
        return a + b;
    };

    let substract = function (a, b){
        return a - b;
    };

    let multiply = function (a, b) {
        return a * b;
    };

    let devide = function (a, b) {
        return a / b;
    };

    switch(op) {
        case '+': return doIt(a, b, add);
        case '-': return doIt(a, b, substract);
        case '*': return doIt(a, b, multiply);
        case '/': return doIt(a, b, devide);
    }
}

console.log(calculator(2, 4, '+'));