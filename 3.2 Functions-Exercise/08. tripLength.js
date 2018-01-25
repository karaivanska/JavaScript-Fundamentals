/*
You will be given the coordinates of 3 points on a 2D plane. Write a program that finds the two shortest segments that connect them (without going back to the starting point). When determining the listing order, use the order with the lowest numerical value (see the figure in the hints for more information).
The input comes as an array of 6 numbers. The order is [x1, y1, x2, y2, x3, y3].
The output is the return value of your program as a string, representing the order in which the three points must be visited and the final distance between them. See the examples for more info.
 */
"use strict";

function tripLength(arr) {
    let [x1, y1, x2, y2, x3, y3] = arr.map(Number);
    let distance1 = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
    let distance2 = Math.sqrt(Math.pow((x3-x2), 2) + Math.pow((y3-y2), 2));
    let distance3 = Math.sqrt(Math.pow((x3-x1), 2) + Math.pow((y3-y1), 2));

    if((distance1 <= distance3) && (distance3 => distance2)){
        let a = distance1 + distance2;
        console.log(`1->2->3: ${a}`);
    } else if((distance1 <= distance2) && (distance3 < distance2)){
        let b = distance3 + distance1;
        console.log(`2->1->3: ${b}`);
    } else {
        let c = distance2 + distance3;
        console.log(`1->3->2: ${c}`);
    }
}
//tripLength([5,1,1,1, 5,4]);