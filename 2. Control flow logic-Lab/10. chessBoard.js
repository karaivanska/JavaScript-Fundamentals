/*
Write a JS function to print a chessboard of size n X n. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.
 */

"use strict";

function chessBoard(n) {
    let result = '<div class="chessboard">\n';

    for (let i = 0; i < n; i++){
        result += '<div>\n';

        for (let k = 0; k < n; k++){
           let color = (k + i) % 2 === 0 ? 'white':'black';
           result += `<span class="${color}"></span>\n`;
        }
        result += '</div>\n';
    }

    result += '</div>';
    return result;
}

console.log(chessBoard(2));