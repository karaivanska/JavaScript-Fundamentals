/*
Write a JS function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as array of arrays, containing string elements (2D matrix of strings).
The output is return value of you function. Save the number of equal pairs you find and return it.
 */

"use strict";

function equalNeighbors(matrix) {
    let neighbors = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                neighbors++;
            }

            if (matrix[row][col] === matrix[row][col + 1]) {
                neighbors++;
            }

            if (row === matrix.length - 2 && matrix[row + 1][col] === matrix[row + 1][col + 1]) {
                neighbors++;
            }
        }
    }

    return neighbors;
}

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
                            ['well', 'done', 'yo', '6'],
                            ['not', 'done', 'yet', '5']]));