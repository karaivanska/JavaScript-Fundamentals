/*
You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|). Write a JS function that extracts the names of all towns and produces a sum of the incomes. Note that splitting may result in empty string elements and the number of spaces may be different in every table.
The input comes as array of string elements. Each element is one row in a formatted table.
The output is printed on the console on two lines. On the first line, print a comma-separated list of all towns and on the second, the sum of all incomes.
 */

"use strict";

function aggregate(arr) {
    let start = 0;
    let end = 0;
    let citiesArr = [];
    let valuesArr = [];

    for (let i = 0; i < arr.length; i++) {

        start = arr[i].indexOf('|');
        end = arr[i].indexOf('|', start + 1);
        citiesArr.push(arr[i].substring(start + 1, end).trim());
        valuesArr.push(Number(arr[i].substring(end + 1)));
    }

   let sum = valuesArr.reduce((a, b) => a + b, 0);
   console.log(citiesArr.join(', '));
   console.log(sum);

}

aggregate(['| Sofia           | 300',
           '| Veliko Tarnovo  | 500',
           '| Yambol          | 275']);