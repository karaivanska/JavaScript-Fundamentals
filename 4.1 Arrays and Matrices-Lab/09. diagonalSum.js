/*
A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a JS function that finds the sum at the main and at the secondary diagonals.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.
 */

"use strict";

function diagonalSums(matrix) {

    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + ' ' + secondarySum);
}

diagonalSums([[20, 40],
              [10, 60]]);