/*
Write a JS function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
 */

"use strict";

function sum(arr) {
    arr = arr.map(Number);

    let {0: a, [arr.length - 1]: b} = arr;
    return a + b;

}
//console.log(sum(['20', '30', '40']));