/*
Write a JS function that calculates the distance between the two points in 3D by given coordinates.
The input comes as an array of numbers. The first three elements are the x, y and z coordinates for the first point and the second set of arguments are the coordinates of the other point.
The output should be printed to the console.
 */

"use strict";

function calcDistance(arr) {
   let x1 = Number(arr[0]);
   let y1 = Number(arr[1]);
   let z1 = Number(arr[2]);
   let x2 = Number(arr[3]);
   let y2 = Number(arr[4]);
   let z2 = Number(arr[5]);

   let distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));

   console.log(distance);
}

calcDistance([1, 1, 0, 5, 4, 0]);