/*
Write a JS function that splits a string with a given delimiter.
The input comes as 2 string arguments. The first one is the string you need to split and the second one is the delimiter.
The output should consist of all elements you’ve received, after you’ve split the given string by the given delimiter. Each element should be printed on a new line.
 */

"use strict";

function split(str, delimiter) {
    str = str.split(delimiter);
    console.log(str.join('\n'));
}

split('One-Two-Three-Four-Five', '-');