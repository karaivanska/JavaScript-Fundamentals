/*
Write a JS function that finds the biggest of 3 numbers.
The input comes as array of 3 numbers.
The output is the biggest from the input numbers.
 */

"use strict";

function biggestOf3Nums(arr) {
    return Math.max.apply(null, arr);
}

console.log(biggestOf3Nums([5, -2, 7]));