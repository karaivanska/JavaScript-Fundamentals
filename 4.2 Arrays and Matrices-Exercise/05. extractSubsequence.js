/*
Write a JS function that extracts only those numbers that form a non-decreasing subsequence. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number.
The input comes as array of numbers.
The output is the processed array after the filtration, which should be a non-decreasing subsequence. Each element should be printed on a new line.
 */

"use strict";

function extract(arr) {
    arr = arr.map(Number);
    let currentNum = arr[0];
    let result = [];

    for (let i = 0; i < arr.length; i++){
        if(currentNum <= arr[i]){
            currentNum = arr[i];
            result.push(currentNum);
        }
    }

    console.log(result.join('\n'));
}
extract([20,3,2,15,6,1]);