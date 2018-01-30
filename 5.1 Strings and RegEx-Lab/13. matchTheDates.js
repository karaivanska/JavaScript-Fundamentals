/*
Write a JS function that finds and extracts all the dates in the given sentences. The dates should be in format
d-MMM-yyyy. Example: 12-Jun-1999, 3-Dec-2017.
The input comes as an array of strings. Each string represents a sentence.
The output should be printed on the console. The output should consist of all extracted VALID dates. Each element should be printed on a new line.
 */

"use strict";

function matchDates(str) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})/gm;
    let match = regex.exec(str);

    while (match) {
        console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        match = regex.exec(str);
    }
}

matchDates('I am born on 30-Dec-1994. This is not date: 512-Jan-1996. My father is born on the 29-Jul-1955.');