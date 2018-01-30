/*
Write a JS function that splits a passed in JS code into separate parts. The passed in code will always have one or more spaces between operators and operands. Normal brackets (‘(‘,’)’), commas (,), semicolons (;) and the member access operator (‘.’(dot), as in “console.log”) should also be used for splitting. String literals will always be initialized with double quotes (") and will contain only letters. Make sure there are no empty entries in the output.
The input comes as a single string argument - the JS code that has to be split.
The output should be printed on the console, with each elements obtained from the split is printed on a new line.

*/

"use strict";

function split(str){
    let regex = /[,;().\s]+/;
    str.split(regex).forEach(s => console.log(s));
}
split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
