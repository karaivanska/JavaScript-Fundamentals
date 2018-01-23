/*
Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, interest rate, compounding frequency and overall length.
The input comes as an array of numbers. The first value is the principal sum, the second is the interest rate in percent, the third is the compounding period in months and the final value is the total timespan, given in years.
The output should be printed to the console, with two decimal places.
 */

"use strict";

function calcInterest(arr) {
   let p = Number(arr[0]);
   let interestRate = Number(arr[1]) / 100;
   let frequency = 12 / Number(arr[2]);
   let years = arr[3];

   let f = p * Math.pow(1 + (interestRate / frequency), frequency * years);
   console.log(Math.round(f * 100) / 100);
}

calcInterest([1500, 4.3, 3, 6]);