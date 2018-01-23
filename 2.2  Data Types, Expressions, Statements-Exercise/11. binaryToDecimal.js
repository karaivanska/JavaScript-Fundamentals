/*
Write a JS function that reads an 8-bit binary number and converts it to a decimal.
The input comes as one string element, representing a binary number.
The output should be printed to the console.
 */

"use strict";

function binaryToDecimal(binaryNum) {
    let digit = parseInt(binaryNum, 2);
    console.log(digit);
}
binaryToDecimal('00001001');