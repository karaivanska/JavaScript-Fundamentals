/*
Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result.
 */

"use strict";
function cone(r, h) {
    let s = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * s + Math.PI * r * r;
    let volume = Math.PI * r * r * h/3;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);