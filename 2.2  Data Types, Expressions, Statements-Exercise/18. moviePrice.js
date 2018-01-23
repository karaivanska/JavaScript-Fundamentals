/*
Movie ticket prices in a big retro-cinema depend on the movie title and on the day of week as shown below.....
Write a JS function that calculate the ticket price by movie title and day of week.
The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
The output should hold the ticket price or “error” if the title or day of week is invalid.
 */

"use strict";

function calcMoviePrices(args){
    let movieTitle = args[0].toLowerCase();
    let dayOfWeek = args[1].toLowerCase();
    let ticketPrice = 0;

    if(movieTitle === 'the godfather'){
        switch(dayOfWeek){
            case 'monday': ticketPrice = 12; break;
            case 'tuesday': ticketPrice = 10; break;
            case 'wednesday': ticketPrice = 15; break;
            case 'thursday': ticketPrice = 12.50; break;
            case 'friday': ticketPrice = 15; break;
            case 'saturday': ticketPrice = 25; break;
            case 'sunday': ticketPrice = 30; break;
        }
    }else if(movieTitle === 'schindler\'s list'){
        switch(dayOfWeek){
            case 'monday': ticketPrice = 8.50; break;
            case 'tuesday': ticketPrice = 8.50; break;
            case 'wednesday': ticketPrice = 8.50; break;
            case 'thursday': ticketPrice = 8.50; break;
            case 'friday': ticketPrice = 8.50; break;
            case 'saturday': ticketPrice = 15; break;
            case 'sunday': ticketPrice = 15; break;
        }
    } else if(movieTitle === 'casablanca'){
        switch(dayOfWeek){
            case 'monday': ticketPrice = 8; break;
            case 'tuesday': ticketPrice = 8; break;
            case 'wednesday': ticketPrice = 8; break;
            case 'thursday': ticketPrice = 8; break;
            case 'friday': ticketPrice = 8; break;
            case 'saturday': ticketPrice = 10; break;
            case 'sunday': ticketPrice = 10; break;
        }
    } else if(movieTitle === 'the wizard of oz'){
        switch(dayOfWeek){
            case 'monday': ticketPrice = 10; break;
            case 'tuesday': ticketPrice = 10; break;
            case 'wednesday': ticketPrice = 10; break;
            case 'thursday': ticketPrice = 10; break;
            case 'friday': ticketPrice = 10; break;
            case 'saturday': ticketPrice = 15; break;
            case 'sunday': ticketPrice = 15; break;
        }
    }

    if(ticketPrice !== 0){
        console.log(ticketPrice);
    }else{
        console.log('error');
    }
}

//calcMoviePrices(['The Godfather', 'Friday']);
//calcMoviePrices(['The Godfather','Sofia']);