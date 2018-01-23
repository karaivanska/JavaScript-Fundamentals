/*
Write a JS function that checks if an input string is a palindrome.
The input comes as a single string argument.
The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.
 */

"use strict";

function isPalindrome(input) {
    return input.split('').reverse().join('') === input;
}
//console.log(isPalindrome('racecar'));