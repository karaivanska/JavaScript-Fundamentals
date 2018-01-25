/*
Write a JS function that determines whether a driver is within the speed limit. You will receive his speed and the area where he’s driving. Each area has a different limit: on the motorway the limit is 130 km/h, on the interstate the limit is 90, inside a city the limit is 50 and within a residential area the limit is 20 km/h. If the driver is within the limits, your function prints nothing. If he’s over the limit however, your function prints the severity of the infraction. For speeds up to 20 km/h over the limit, he’s speeding; for speeds up to 40 over the limit, the infraction is excessive speeding and for anything else, reckless driving.
The input comes as an array of elements. The first element is the current speed (as number), the second element is the area where the vehicle is driving.
The output should be printed to the console. Note in certain cases there will be no output.
 */

"use strict";

function radar(arr) {
    let speed = Number(arr[0]);
    let area = arr[1];
    let maxSpeed = 0;
    let driving = '';

    switch(area){
        case 'residential': maxSpeed = 20; break;
        case 'city': maxSpeed = 50; break;
        case 'interstate': maxSpeed = 90; break;
        case 'motorway': maxSpeed = 130; break;
    }

    function isInRange(maxSpeed, speed) {
         if(speed <= maxSpeed){
             return true;
         }
         return false;
    }

    if(!isInRange(maxSpeed, speed)){
        let limit = Math.abs(maxSpeed - speed);

        if(limit <= 20){
            driving = 'speeding';
        } else if(limit <= 40){
            driving = 'excessive speeding';
        } else {
            driving = 'reckless driving';
        }
    }

    console.log(driving);
}
radar([21, 'residential']);