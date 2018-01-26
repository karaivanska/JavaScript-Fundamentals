/*
You are given two integers n and k. Write a JS function that generates and prints the following sequence:
•	The first element is 1
•	Every following element equals the sum of the previous k elements
•	The length of the sequence is n elements
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
 */

"use strict";

function lastKNumbers(n, k){
    let seq = [1];

    for (let i = 1; i < n ; i++){
        seq[i] = sumLastNumbers(seq, k);
    }

    function sumLastNumbers(arr, k) {
        k = arr.length > k ? k : arr.length;
        let sum = 0;

        for (let i = 1; i <= k; i++){
            sum += arr[arr.length-i];
        }

        return sum;
    }
    console.log(seq.join(' '));
}
lastKNumbers(6, 3);