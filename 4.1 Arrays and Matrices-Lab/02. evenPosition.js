/*
Write a JS function that finds the elements at even positions in an array.
The input comes as array of string elements.
The output is the return value of your function. Collect all elements in a string, separated by space.
 */

"use strict";

function evenPosition(arr){
   let result = [];

   for (let i = 0; i < arr.length; i++){
       if(i % 2 === 0){
           result.push(arr[i]);
       }
   }
   return result.join(' ');
}

console.log(evenPosition(['5', '10']));