/*
Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
The input comes as a single string argument.
The output should be returned as a result of your program.
 */

"use strict";

function dayOfWeek(day) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday', 'Sunday'];
    let index = arr.indexOf(day);
    return index > -1 ? index + 1: 'error';
}
console.log(dayOfWeek('Monday'));