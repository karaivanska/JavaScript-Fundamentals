/*
Write a JS function that parses a list of emails and returns a list of usernames, generated from them. Each username is composed from the name of the email address, a period and the first letter of every element in the domain name. See the examples for more information.
The input comes as array of string elements. Each element is an email address.
The output is printed on the console on a single line as a comma-formatted list.
 */

"use strict";

function extractUser(arr) {
    let endResult = [];

    for (let i = 0; i < arr.length; i++){
        let token = arr[i].split('@');
        let domains = token[1].split('.');
        let result = token[0] + '.';

        for (let str of domains) {
            result += str[0];
        }

        endResult.push(result);
    }

    console.log(endResult.join(', '));
}
extractUser(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);