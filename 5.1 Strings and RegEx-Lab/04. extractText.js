/*
You will be given a text as a string. Write a JS function that extracts and prints only the text that’s surrounded by parentheses.
The input comes as a single string argument.
The output is printed on the console on a single line, in the form of a comma-separated list.
 */

"use strict";

function extracting(str) {
    let strArr = [];
    let start = str.indexOf('(');

    while(start !== -1){

        let end = str.indexOf(')', start + 1);
        if(end === -1){
            break;
        }

        strArr.push(str.substring(start + 1, end));
        start = str.indexOf('(', end + 1);
    }

    console.log(strArr.join(', '));
}
extracting('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');