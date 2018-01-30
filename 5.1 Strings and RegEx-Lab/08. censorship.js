/*
The thought police are at it again and they need your help! Write a JS function that would censor news articles. You will be given a text and then a list of strings that need to be blacked out from the text. Replace all occurrences of the strings with dashes of the same length as the string. The strings will not overlap, so order of processing is not important. See the examples for more information.
The input comes as two arguments – one string and one array of strings. The first element is the text to scan and the array contains the strings to be censored.
The output is the return value of your functions. Save the censored results in a string and return it.
 */

"use strict";

function replacing(text, arr){

    for (let str of arr) {
        let regex = new RegExp(str, 'g');
        let dashes = '-'.repeat(str.length);
        text = text.replace(regex, dashes);
    }

   console.log(text);
}
replacing('roses are red, violets are blue', [', violets are', 'red']);