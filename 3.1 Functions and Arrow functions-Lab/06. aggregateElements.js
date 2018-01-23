/*
Write a JS program that performs and outputs different operations on an array of elements. Implement the following operations:
•	Sum(ai) - calculates the sum all elements from the input array
•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•	Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of number elements.
The output should be printed on the console on a new line for each of the operations.
 */

"use strict";

function aggregateElements(arr){
    let elements = arr.map(Number);
    aggregate(elements, 0, (a, b)=>a + b);
    aggregate(elements, 0, (a, b)=>a + 1 / b);
    aggregate(elements, "", (a, b)=>a + b);

    function aggregate(arr, initValue, func) {
        let value = initValue;
        for (let i = 0; i < arr.length; i++) {
            value = func(value, arr[i]);
        }
        console.log(value);
    }
}
aggregateElements([1, 2, 3]);