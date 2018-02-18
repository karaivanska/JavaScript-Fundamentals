/*
You have been tasked to create a register for different towns and their population.
The input comes as array of strings. Each element will contain data for a town and its population in the following format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.
As output, you must print all the towns, and their population.
 */

"use strict";

function townPop(strArr) {
   let towns = new Map();

   for (let i = 0; i < strArr.length; i++){
      let [name, pop] = strArr[i].split(' <-> ');

      if(!towns.has(name)){
          towns.set(name, 0);
      }
      towns.set(name, towns.get(name) + Number(pop));
   }
   [...towns].forEach(([town, pop]) => console.log(`${town} : ${pop}`));
}
townPop(['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']);