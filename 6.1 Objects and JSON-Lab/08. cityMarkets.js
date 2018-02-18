/*
You have been tasked to create a register for different towns and their population.
The input comes as array of strings. Each element will contain data for a town and its population in the following format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.
As output, you must print all the towns, and their population.
 */

"use strict";

function cityMarkets(strArr) {
    let summary = new Map();

    for (let row of strArr) {
        let [town, product, sales] = row.split(' -> ');
        sales = sales.split(' : ').reduce((a, b) => a * b);

        if(!summary.has(town)){
            summary.set(town, new Map());
        }

        if(!summary.get(town).has(product)){
            summary.get(town).set(product, 0)
        }

        let oldSales = summary.get(town).get(product);
        summary.get(town).set(product, oldSales + sales);
    }

    for (let [town, products] of summary) {
        console.log(`Town - ${town}`);

        for (let [product, sales] of products) {
            console.log(`$$$${product} : ${sales}`);
        }
    }
}
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);