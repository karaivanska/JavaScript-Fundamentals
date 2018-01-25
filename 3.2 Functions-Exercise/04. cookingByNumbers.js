/*
Write a JS program that receives a number and a list of five operations. Perform the operations in sequence by starting with the input number and using the result of every operation as starting point for the next. Print the result of every operation in order. The operations can be one of the following:
•	chop – divide the number by two
•	dice – square root of number
•	spice – add 1 to number
•	bake – multiply number by 3
•	fillet – subtract 20% from number
The input comes as an array of 6 string elements. The first element is your starting point and must be parsed to a number. The remaining 5 elements are the names of operations to be performed.
The output should be printed on the console.
 */

"use strict";

function cooking(arr) {
    let number = Number(arr[0]);

    let operations = {
        chop: (num) => number / 2,
        dice: (num) => Math.sqrt(number),
        spice: (num) => ++number,
        bake: (num) => number * 3,
        fillet: (num) => num -= num * 0.2
    };

    for (let i = 1; i < arr.length; i++) {
        const currentOpr = arr[i];
        number = operations[currentOpr](number);
        console.log(number);
    }
}

//console.log(cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop']));
