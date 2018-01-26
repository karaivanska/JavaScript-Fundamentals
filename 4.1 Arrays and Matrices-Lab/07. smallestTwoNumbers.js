/*
Write a JS function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
 */

"use strict";

function smallestNums(arr) {
    let sorted = arr.sort((a, b) => a - b);
    console.log(sorted.slice(0, 2).join(' '));
}

smallestNums([30, 15, 50, 5]);