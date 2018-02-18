/*
Write a JS function that capitalizes the given words. You need to make every word’s first letter – uppercase and all other letters – lowercase.
The input comes as a single string, containing words, separated by a space.
The output is the same string, however with all of its words capitalized.
Note: The words can contain any ASCII character. You need to affect only the letters.
 */

"use strict";

function capitalizing(str){
    let regex = /\b[a-zA-Z]+\b/;

    if(regex.test(str)){
        capitalizeFirstLetter(str);
    }

    function capitalizeFirstLetter(string) {
        let splitStr = string.toLowerCase().split(' ');
        for (let  i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        console.log(splitStr.join(' '));
    }
}
capitalizing('Capitalize these words');