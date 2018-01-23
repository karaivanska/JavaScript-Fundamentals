/*
Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look at the examples to get an idea.
The input comes as a single number argument.
The output is a series of lines printed on the console, forming a triangle of variable size.
 */

"use strict";

function triangle(n) {

    for (let i = 1; i <= n; i++){
        print(i);
    }

    for (let i = n - 1; i > 0; i--){
        print(i);
    }

    function print(n) {
        console.log('*'.repeat(n));
    }
}
triangle(5);