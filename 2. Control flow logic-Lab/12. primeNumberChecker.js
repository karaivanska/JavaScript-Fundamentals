/*
Write a JS function to check if a number is prime (only wholly divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.
*/
'use strict';
function primeNumber(number) {

    let prime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    return prime && (number > 1);
}
console.log(primeNumber(8));