/*
Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.
The input comes as two number arguments. The first element is the number of bottles and the second is the capacity of a single box.
The output should be printed to the console.
 */

"use strict";
function calcBoxes(num1, num2) {
    return Math.ceil(num1 / num2);
}

console.log(calcBoxes(20, 5));