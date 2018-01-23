/*
Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
The input comes as a single number n (0 < n < 100).
The output consists of n text lines like shown below.
 */

"use strict";

function triangleOfDollars(n) {

    let line = '';
    for (let j = 1; j <= n; j++){
        line += '$';
        console.log(line);
    }
}
triangleOfDollars(2);