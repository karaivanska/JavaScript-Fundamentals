/*
Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each point and the start of the cartesian coordinate system (0, 0) and between the points themselves is valid. A distance between two points is considered valid, if it is an integer value. In case a distance is valid write "{x1, y1} to {x2, y2} is valid", in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid".
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
The input consists of two points given as an array of numbers.
For each comparison print on the output either "{x1, y1} to {x2, y2} is valid" if the distance between them is valid, or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.
 */

"use strict";

function validityChecker(args){
    let [x1, y1, x2, y2] = args.map(Number);

    function checkValidation(x1, y1, x2, y2) {
        let deltaX = x1 - x2;
        let deltaY = y1 - y2;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if(distance % 1 === 0){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    checkValidation(x1, y1, 0, 0);
    checkValidation(x2, y2, 0, 0);
    checkValidation(x1, y1, x2, y2);
}
validityChecker([3, 0, 0, 4]);
