/*
Write a JS function that extracts all UNIQUE words from a valid text, and stores them. Ensure that there are NO duplicates in the stored words. Once you find a word, there is no need for you to store it again if you meet it again in the text. You also need to make all characters from the words you’ve stored – lowercase.
The input comes as array of strings. Each element will represent a sentence.
The output is all of the unique words you’ve found, each with each, separated by a coma and a space, printed in the order in which you’ve found them.
 */

"use strict";

function extractUniqueWords(strArr) {
    let unique = new Set();
    let text = strArr.join('\n')
        .split(/\W+/)
        .filter(e => e !== '')
        .map(e => e.toLowerCase())
        .forEach(e => unique.add(e));

    console.log([...unique].join(', '));
}

/*extractUniqueWords([
    'Write a JS function that extracts all UNIQUE words from a valid text, and stores them.',
    'Ensure that there are NO duplicates in the stored words.',
    'Once you find a word, there is no need for you to store it again if you meet it again in the text.',
    'You also need to make all characters from the words you’ve stored – lowercase.',
    'The input comes as array of strings. Each element will represent a sentence.',
    'The output is all of the unique words you’ve found, each with each, separated by a coma and a space, printed in the order in which you’ve found them.']);
    */