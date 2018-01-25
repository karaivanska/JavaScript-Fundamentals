/*
It’s time to put your skills to work for the war effort – creating management software for a radio transmitter factory. Radios require a finely tuned quartz crystal in order to operate at the correct frequency. The resource used to produce them is quartz ore that comes in big chunks and needs to undergo several processes, before it reaches the desired properties.
You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that will bring it closer to the desired frequency. To reduce waste and the time it takes to make each crystal your program needs to complete the process with the least number of operations. Each operation takes the same amount of time, but since they are done at different parts of the factory, the crystals have to be transported and thoroughly washed every time an operation different from the previous must be performed, so this must also be taken into account. When determining the order, always attempt to start from the operation that removes the largest amount of material.
The different operations you can perform are the following:
•	Cut – cuts the crystal in 4
•	Lap – removes 20% of the crystal’s thickness
•	Grind – removes 20 microns of thickness
•	Etch – removes 2 microns of thickness
•	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
•	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); do this after every batch of operations that remove material
At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, representing the thickness of crystal ore in microns. Process each chunk and print to the console the order of operations and number of times they need to be repeated to bring them to the desired thickness.
The input comes as a numeric array with a variable number of elements. The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
The output is the order of operation and how many times they are repeated, every operation on a new line. See the examples for more information.
 */
"use strict";

function radioCrystals(args){
    let [target, microns] = args.map(Number);
    let opStr = 'Cut';

    for (let i = 1; i < args.length; i++){
        microns = args[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = execute(microns, 'Cut', cut);
        microns = execute(microns, 'Lap', lap);
        microns = execute(microns, 'Grind', grind);
        microns = execute(microns, 'Etch', etch);

        if(microns + 1 === target){
            microns = xRay(microns);
        }

        console.log(`Finished crystal ${microns} microns`);
    }

    function cut(crystal){
        return crystal / 4;
    }

    function lap(crystal){
        return crystal -= crystal * 0.20;
    }

    function grind(crystal){
        return crystal -= 20;
    }

    function etch(crystal){
        return crystal -= 2;
    }

    function xRay(crystal) {
        console.log(`X-ray x1`);
        return ++crystal;
    }

    function transport(crystal){
        console.log(`Transporting and washing`);
        return Math.floor(crystal);
    }

    function execute(microns, opStr, op){
        let newSize = op(microns);
        let counter = 0;

        while(newSize >= target || Math.floor(target - newSize) === 1){
            microns = newSize;
            newSize = op(microns);
            counter++;
        }

        if(counter > 0){
            console.log(`${opStr} x${counter}`);
            microns = transport(microns);
        }

        return microns;
    }
}
radioCrystals([1375, 50000]);