/*
Write a JS program that prints a DNA helix with length, specified by the user. The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. See the examples for more information.
The input comes as a single number. It represents the length of the required helix.
The output is the completed structure, printed on the console.
 */

"use strict";

function dna(n){
    let seq = 'ATCGTTAGGG';
    let seqLen = seq.length;
    let index = -1;

    for (let i = 1; i <= n; i++){
        index = getIndex(++index, seqLen);
        let firstLetter = seq.charAt(index);
        index = getIndex(++index, seqLen);
        let secondLetter = seq.charAt(index);

        if(i % 4 === 1){
            console.log(`**${firstLetter}${secondLetter}**`);
        } else if(i % 4 === 2 || i % 4 === 0){
            console.log(`*${firstLetter}--${secondLetter}*`);
        } else {
            console.log(`${firstLetter}----${secondLetter}`);
        }
    }

    function getIndex(index, len){
        if(index >= len){
            index = 0;
        }

        return index;
    }
}
dna(10);