/*
Write a JS function that prints all the symbols of a string, each on a new line.
The input comes as a single string argument.
The output is printed on the console, each letter on a new line.
 */

"use strict";

function printLetters(str){

    for (let i = 0; i < str.length; i++){
        console.log(`str[${i}] -> ${str[i]}`)
    }
}
//printLetters('Hello, World!');
//printLetters('SoftUni');