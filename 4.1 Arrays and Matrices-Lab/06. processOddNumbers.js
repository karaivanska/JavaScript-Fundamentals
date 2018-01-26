/*
You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
 */

"use strict";

function processNumbers(arr){
   let result = [];

   for (let i = 0; i < arr.length; i++){
       if(i % 2 !== 0){
           result.push(doubled(arr[i]));
       }
   }

   function doubled(num){
       return num + num;
   }

   console.log(result.reverse().join(' '));
}
processNumbers([10, 15, 20, 25]);
