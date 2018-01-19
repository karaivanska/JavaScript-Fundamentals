/*
Write a JS function that prints the binary logarithm (log2 x) for each number in the input.
The input comes as an array of number elements.
The output should be printed to the console, on a new line for each number.
*/

'use strict';
function binaryLog(arr){
    arr = arr.map(Number);

    for (let el of arr){
        let currentElement = Math.log2(el);
        console.log(currentElement);
    }
}
binaryLog([1024,1048576, 256, 1, 2, 50, 100]);