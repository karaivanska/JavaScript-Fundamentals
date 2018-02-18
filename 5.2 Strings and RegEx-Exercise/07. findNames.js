/*
Write a JS function that finds all variable names in a given string. A variable name starts with an underscore (“_”) and contains only Capital and Non-Capital English Alphabet letters and digits. Extract only their names, without the underscore. Try to do this only with regular expressions.
The input comes as single string, on which you have to perform the matching.
The output consists of all variable names, extracted and printed on a single line, each separated by a comma.
 */

"use strict";

function findName(str) {
    let regex = /\b_([A-Za-z0-9]+)\b/g;
    let result = [];

    let match = regex.exec(str);
    while (match) {
        result.push(match[1]);
        match = regex.exec(str);
    }

    return result.join(",");
}
//findNames('The _id and _age variables are both integers.');
//findNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');