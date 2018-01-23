/*
Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T. Write a JS function that calculates the distance between the two object at the end of the period.
The input comes as array of numbers. The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
The output should be printed to the console. Calculate the distance in meters.
 */

"use strict";

function calcDistance(arr) {
    let v1 = Number(arr[0]);
    let v2 = Number(arr[1]);
    let time = Number(arr[2]);
    let delta = 0;

    let s1 = (v1 / 3.6) * time;
    let s2 = (v2 / 3.6) * time;
    let d = Math.abs(s1 - s2);
    console.log(d);
}
calcDistance([0, 60, 3600]);