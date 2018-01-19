/*
Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string.
•	Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
•	Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
•	All others are unknown
The input comes as a single string argument, the name of the fruit.
The output should be printed to the console.

 */

"use strict";

function fruitOrVege(input) {
    switch (input) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log("fruit");
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }

}

fruitOrVege('banana');
