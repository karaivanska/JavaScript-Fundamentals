/*
Write a JS function that finds the biggest element inside a matrix.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is the return value of your function. Find the biggest element and return it.
 */

"use strict";

function extractElement(matrix){
    let biggestNum = Number.NEGATIVE_INFINITY;

    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}

console.log(extractElement([[20, 50, 10],
                            [8, 33, 145]]));