/*
Write a JS function to solve a quadratic equation by given in standard form as its coefficients: a, b, c. You may learn more about quadratic equations here: https://www.mathsisfun.com/algebra/quadratic-equation.html.
The input comes as 3 numbers a, b and c. The value of a will be non-zero.
The output depends on the equation:
•	It holds two numbers x1 and x2 if the equation has two different solutions (roots): x1 and x2.
o	First print the smaller root, then the greater.
•	It holds a single number x if the equation has only one solution (root): x.
•	It holds the text “No” if the equation has no solutions (no real roots).
 */

"use strict";

function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = 0;
    let x1 = 0;
    let x2 = 0;

    if(d > 0){
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);

        if(x1 > x2){
            console.log(x2);
            console.log(x1);
        } else {
            console.log(x1);
            console.log(x2);
        }
    } else if(d === 0){
        x = -b/(2 * a);
        console.log(x);
    } else {
        console.log('No');
    }
}
quadraticEquation(5,2,1);
