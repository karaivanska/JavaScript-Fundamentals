/*
Write a JS function that checks if a given string, ends with a given substring.
The input comes as 2 string arguments. The first string will represent the main one. The second one will represent the substring.
The output is either “true” or “false” based on the result of the check.
The comparison is case-sensitive!
 */

"use strict";

function checking(str, substring) {
    console.log(str.endsWith(substring));
}
//checking('This sentence ends with fun?','fun?');
//checking('This is Houston, we have…','We have…');