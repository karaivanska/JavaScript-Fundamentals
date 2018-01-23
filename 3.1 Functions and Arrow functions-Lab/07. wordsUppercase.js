/*
Write a JS program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed back on a single line concatenated by “, “.
The input comes as a single string argument - the text from which to extract and convert the words.
The output should be a single line containing the converted string.
 */

"use strict";

function wordsToUpper(arg) {
   let upper = arg
       .toUpperCase()
       .split(/\W+/)
       .filter(w => w !== '')
       .join(', ');
    console.log(upper);
}
wordsToUpper('Hi, how are you?');
