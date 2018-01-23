/*
Land surveyors use grads (also known as gon, 400 grads in a full turn) in their documents. Grads are rather unwieldy though, so you need to write a JS function that converts from grads to degrees. In addition, your program needs to constrain the results within the range 0°≤x<360°, so if you arrive at a value like -15°, it needs to be converted to 345° and 420° becomes 60°.
The input comes as single number.
The output should be printed to the console.
 */

"use strict";

function gradsToDegrees(grad) {
    grad = grad % 400;
    let degree = grad * 0.9;
    let result = 0;

    if(degree < 0){
        return result = 360 - Math.abs(degree);
    } else {
        return result = degree;
    }
}

console.log(gradsToDegrees(-50));