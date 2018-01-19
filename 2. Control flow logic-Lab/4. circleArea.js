/*
Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.
The input comes as a single number argument.
The output should be printed to the console on a new line for each result.
 */

"use strict";
function circleArea(r) {
    let area = Math.PI * r * r;

    console.log(area);
    console.log(area.toFixed(2));
}
circleArea(5);