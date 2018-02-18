/*
You are tasked to count the number of words in a text using a Map, any combination of letters, digits and _ (underscore) should be counted as a word. The words should be stored in a Map - the key being the word and the value being the amount of times the word is contained in the text. The matching should be case insensitive. Print the words in a sorted order.
The input comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.
The output should be printed on the console - print each word in the map in the format "'<word>' -> <count> times", each on a new line.
 */

"use strict";

function countWords(strArr) {
    let words = new Map();

    for (let i = 0; i < strArr.length; i++) {
        let currentArr = strArr[i].split(/[\W]+/);
        currentArr = currentArr.filter(e => e !== '');

        for (let j = 0; j < currentArr.length; j++) {
            let word = currentArr[j].toLowerCase();

            if (!words.has(word)) {
                words.set(word, 1);
            } else {
                words.set(word, words.get(word) + 1);
            }
        }
    }

    let mapAsc = new Map([...words.entries()].sort());

    for (let [key, value] of mapAsc) {
        console.log(`'${key}' -> ${value} times`);
    }
}
countWords(['Far too slow, you\'re far too slow.']);