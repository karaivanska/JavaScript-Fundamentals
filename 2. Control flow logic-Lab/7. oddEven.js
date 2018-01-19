/*
Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).
The input comes as a single number argument.
The output should be printed to the console. Print odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions.
 */

"use strict";

function oddEven(n) {
   let isInteger = Number.isInteger(n) ? 'true':'false';

    if(isInteger === 'true'){
        if(n % 2 === 0){
            console.log('even');
        } else if(n % 2 !== 0){
            console.log('odd');
        }
    }else {
        console.log('invalid');
    }
}
oddEven(8);