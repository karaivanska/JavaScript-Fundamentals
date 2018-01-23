/*
Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
The input comes as 2 numbers that are the lengths of the 2 sides of the rectangle (sideA and sideB)
The output should be printed to the console on two lines.
 */

"use strict";

function area(sideA, sideB) {
   let area = sideA * sideB;
   let p = 2 * (sideA + sideB);

   console.log(`${area}`);
   console.log(`${p}`);
}
