/*
Write a JS function that repeats a given string, N times.
The input comes as 2 arguments. The first argument is a string that will represent the one you need to repeat. The second one is a number will represent the times you need to repeat it.
The output is a big string, containing the given one, repeated N times.
 */

"use strict";

function repeating(str, n) {
    console.log(str.repeat(n));
}
repeating('repeat', 5);