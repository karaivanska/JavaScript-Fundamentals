/*
Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
 */

"use strict";

function negativeToPositive(arr){
   arr = arr.map(Number);
   let result = [];

   for (let i = 0; i < arr.length; i++){
      if(arr[i] < 0){
          result.unshift(arr[i]);
      } else {
          result.push(arr[i]);
      }
  }
   console.log(result.join(', '));
}
negativeToPositive([3, -2, 0, -1]);