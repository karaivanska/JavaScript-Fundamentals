/*
Write a JS function that finds, how many times a given word, is used in a given sentence. Note that letter case does not matter – it is case-insensitive.
The input comes as 2 string arguments. The first one will be the sentence, and the second one – the word.
The output is a single number indicating the amount of times the sentence contains the word.
 */

"use strict";

function finding(sentance, word){
    let count = 0;

    for (let str of sentance.split(/\W+/g)) {
        if(str.toLowerCase() === word.toLowerCase()){
            count++;
        }
    }
    console.log(count);
}
//finding('The waterfall was so high, that the child couldn’t see its peak.', 'the');
finding('How do you plan on achieving that? How? How can you even think of that?', 'how');