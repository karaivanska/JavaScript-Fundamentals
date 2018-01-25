/*
You will be given a series of coordinates, leading to a buried treasure. Use the map to the right to write a program that locates on which island it is. After you find where all the treasure chests are, compose a list and print it on the console. If a chest is not on any of the islands, print “On the bottom of the ocean” to inform your treasure-hunting team to bring diving gear. If the location is on the shore (border) of the island, it’s still considered to lie inside.
The input comes as an array with a variable number of elements that are numbers. Each pair is the coordinates to a buried treasure chest.
The output is a list of the locations of every treasure chest, either the name of an island or “On the bottom of the ocean”, printed on the console.
 */

"use strict";

function locator(args){
    for (let i = 0; i < args.length - 1; i+=2){
        let x = Number(args[i]);
        let y = Number(args[i + 1]);

        if((x >= 1 && x <= 3) && (y >= 1 && y <= 3)){
            console.log('Tuvalu');
        } else if((x >= 0 && x <= 2) && (y >= 6 && y <= 8)){
            console.log('Tonga');
        } else if((x >= 5 && x <= 7) && (y >= 3 && y <= 6)){
            console.log('Samoa');
        } else if((x >= 4 && x <= 9) && (y >= 7 && y <= 8)){
            console.log('Cook');
        } else if((x >= 8 && x <= 9) && (y >= 0 && y <= 1)){
            console.log('Tokelau');
        }else {
            console.log('On the bottom of the ocean');
        }
    }
}
//locator([4, 2, 1.5, 6.5, 1, 3]);
//locator([6, 4]);