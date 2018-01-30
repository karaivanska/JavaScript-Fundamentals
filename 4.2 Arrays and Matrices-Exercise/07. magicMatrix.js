/*
Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.
The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or not.
 */

"use strict";

function isMagic(matrix) {
    for (let row = 0; row < matrix.length - 1; row++) {
        let sumROne = matrix[row].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[row + 1].reduce((a, b) => a + b, 0);

        if (sumROne !== sumRTwo) {
            return false;
        }

        let sumCOne = 0;
        let sumCTwo = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumCOne += matrix[col][row];
            sumCTwo += matrix[col][row + 1];
        }

        if (sumCOne !== sumCTwo
            || sumROne !== sumCOne
            || sumRTwo !== sumCTwo) {
            return false;
        }
    }

    return true;
}

/*isMagic([[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]]);
*/