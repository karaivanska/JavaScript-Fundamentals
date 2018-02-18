/*
You are tasked to count the number of words in a text using an object as an associative array, any combination of letters, digits and _ (underscore) should be counted as a word. The words should be stored in the object as properties - the key being the word and the value being the amount of times the word is contained in the text.
The input comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.
The output should be printed on the console - the JSON representation of the object containing the words.
 */

"use strict";

function countWords(strArr) {
    let words = {};

    for (let i = 0; i < strArr.length; i++) {
        let wordsArr = strArr[i].split(/[\W]+/);
        wordsArr = wordsArr.filter(e => e !== '');

        for (let j = 0; j < wordsArr.length; j++) {
            let word = wordsArr[j];

            if (!words.hasOwnProperty(word)) {
                words[word] = 0;
            }
            words[word] += 1;
        }
    }
    console.log(JSON.stringify(words));
}
countWords(['Far too slow, you\'re far too slow.']);