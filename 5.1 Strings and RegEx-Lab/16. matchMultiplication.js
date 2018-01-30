/*
You are given a text with numbers multiplied by * in format {num1} * {num2}. Your job is to extract each two numbers in the above format, multiply them and replace them with their product. The first number is integer, can be negative. The second number is integer or floating-point and can be negative. There could be whitespace around the “*” symbol.
The input comes as a single string argument – the text holding the numbers.
The output should be printed on the console – it consists of the same text with the multiplied numbers replaced by their product.
 */

"use strict";

function multiplications(str){
    str = str.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
    (match, num1, num2) => Number(num1) * Number(num2));
    console.log(str);
}
multiplications('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');