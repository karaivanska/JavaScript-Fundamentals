/*
Write a JS function that reads a given matrix of numbers, and checks if both main diagonals have equal sum. If they do, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
The input comes as array of strings. Each element represents a string of numbers, with spaces between them. Parse it into a matrix of numbers, so you can work with it.
The output is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum or the original matrix, if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. Check the examples below.
 */

"use strict";

function attack(arr) {

    let matrix = arr.map(
        row => row.split(' ').map(Number));

    let sumLeftDiagonal = 0;
    for (let i = 0; i < matrix.length; i++){
        sumLeftDiagonal += matrix[i][i];
    }

    let sumRightDiagonal = 0;
    for (let k = 0; k < matrix.length; k++){
        sumRightDiagonal += matrix[k][matrix.length - 1 -k];
    }

    if(sumLeftDiagonal === sumRightDiagonal){
        for (let i = 0; i < matrix.length; i++){
           for (let j = 0; j < arr.length; j++){
               if(i !== j && i !== matrix.length - 1 -j){
                   matrix[i][j] = sumLeftDiagonal;
               }
           }
        }
        printMatrix(matrix);

    } else {
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++){
           console.log(matrix[i].join(' '));
        }
    }
}

attack(['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);