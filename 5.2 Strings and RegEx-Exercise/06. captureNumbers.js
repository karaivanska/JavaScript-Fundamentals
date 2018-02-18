/*
Write a JS function that finds all numbers in a sequence of strings.
The input comes as array of strings. Each element represents one of the strings.
The output is all the numbers, extracted and printed on a single line – each separated by a single space.
 */

"use strict";

function captureNumbers(arr){
   let regex = /[0-9]+/g;
   let result = [];

    for (let i = 0; i < arr.length; i++){
        let currentStr = arr[i];

        if(currentStr.match(regex)){
            currentStr = currentStr.replace(/[^0-9]+/g, ' ');
            result.push(currentStr.trim());
        }
    }

   console.log(result.join(' '));
}
/*captureNumbers(['The300',
                'What is that?',
                'I think it’s the 3rd movie.',
                'Lets watch it at 22:45']);

captureNumbers(['123a456', '789b987', '654c321', '0']);
captureNumbers(['Let\'s go11!!!11!', 'Okey!1!']);
*/