/*
Write a JS function that composes an HTML image tag.
The input comes as an array of string elements. The first element is the location of the file and the second is the alternate text.
The output should be printed to the console in the following format:
<img src="{file location}" alt="{alternate text}">
 */

"use strict";

function tag(arr) {
    let fileLocation = arr[0];
    let alternate = arr[1];

   console.log(`<img src="${fileLocation}" alt="${alternate}">`)
}
