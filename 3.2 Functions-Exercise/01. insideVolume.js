/*
Write a JS function that determines whether a point is inside the volume, defined by the box, shown on the right.
The input comes as an array of numbers. Each set of 3 elements are the x, y and z coordinates of a point.
The output should be printed to the console on a new line for each point. Print inside if the point lies inside the volume and outisde otherwise.
 */

"use strict";

function inside(arr) {
    arr = arr.map(Number);

    for (let i = 0; i < arr.length; i += 3) {
        let x = arr[i];
        let y = arr[i + 1];
        let z = arr[i + 2];

        if (isInside(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }

    function isInside(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2) {
            return true;
        }
        return false;
    }
}
inside([8, 20, 22]);