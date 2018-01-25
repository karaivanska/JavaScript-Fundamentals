/*
Write a JS program that modifies a number until the average value of all of its digits is higher than 5. In order to modify the number, your program should append a 9 to the end of the number, when the average value of all of its digits is higher than 5 the program should stop appending. If the number’s average value of all of its digits is already higher than 5, no appending should be done.
The input is a single number.
The output should consist of a single number - the final modified number which has an average value of all of its digits higher than 5. The output should be printed on the console.
 */

"use strict";

function modify(number){
    let numStr = number.toString();
    let sum = sumDigits(numStr);

    while(sum / numStr.length <= 5){
        numStr += '9';
        sum = sumDigits(numStr);
    }
    console.log(numStr);

    function sumDigits(numStr) {
        let sum = 0;
        for (let digit of numStr) {
            sum += Number(digit);
        }
        return sum;
    }
}
modify(101);