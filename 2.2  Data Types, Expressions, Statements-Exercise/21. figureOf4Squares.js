/*
Write a JS function to print a figure of 4 squares of size n like shown in the examples below.
The input is an integer number n in the range [2 … 200].
The output consists of n lines for odd n and n-1 lines for even n. Each line holds 2*n-1 characters (+ or | or space) as shown in the examples. The figure is fully symmetric (horizontally and vertically).
 */

"use strict";

function figureOfSquares(n){
    let length = n % 2 !== 0 ? n : n - 1;
    let count = (2*n - 4) / 2;
    let middle = Math.ceil(length / 2);
    for (let i = 1; i <= length; i++) {
        if (i === 1 || i === length || i === middle) {
            console.log(`+${'-'.repeat(count)}+${'-'.repeat(count)}+`);
        }

        else {
            console.log(`|${' '.repeat(count)}|${' '.repeat(count)}|`);
        }
    }
}

figureOfSquares(5);