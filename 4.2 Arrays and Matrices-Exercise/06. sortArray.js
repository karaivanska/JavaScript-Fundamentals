/*
Write a JS function that orders a given array of strings, by length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as array of strings.
The output is the ordered array of strings.
 */

"use strict";

function sorting(arr) {

    arr.sort();
    arr.sort(function (a, b) {
        return a.length - b.length;
    });

    console.log(arr.join('\n'));
}
//sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);