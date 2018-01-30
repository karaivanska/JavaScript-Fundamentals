/*
Write a JS function that matches all words in a text, a word is anything that consists of letters, numbers or underscores (_).
The input comes as single string argument – the text from which to extract the words.
The output should be printed on the console and should consist of all words concatenated with a “|“(pipe), check the examples bellow to better understand the format.
 */

"use strict";

function matchWords(str) {
    let words = str.match(/\w+/g);
    return words.join('|');
}

console.log(matchWords('_(Underscores) are also word characters?'));
