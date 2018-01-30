/*
Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.
The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.
 */

"use strict";

function rotate(arr){
   let numOfRotation = Number(arr.pop());
   let lastNum = 0;

   for (let i = 0; i < numOfRotation; i++){
      lastNum = arr.pop();
      arr.unshift(lastNum);
   }

   console.log(arr.join(' '));
}
rotate(['Banana','Orange','Coconut','Apple',15]);
