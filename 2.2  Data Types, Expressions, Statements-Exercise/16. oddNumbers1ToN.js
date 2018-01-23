/*
Write a JS function that reads an integer n and prints all odd numbers from 1 to n.
The input comes as a single number n. The number n will be an integer in the range [1 … 100 000].
The output should hold the expected odd numbers, each at a separate line.
 */

"use strict";

function oddNumbers(n) {

    for (let i = 1; i <= n; i++){
       if(i % 2 !== 0){
           console.log(i);
       }
    }
}
//oddNumbers(5);