/*
Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
The input comes as a single number argument.
The output should be printed to the console. Print yes if the year is leap and no otherwise.
 */

"use strict";
function leapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(1999);