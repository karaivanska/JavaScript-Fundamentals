/*
You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
The input comes as array of strings. Each element will hold data about a town, product, and its price at that town. The town and product will be strings; the price will be a number. The input will come in the following format:
{townName} | {productName} | {productPrice}
If you receive the same town and product more than once, you should update the old value with the new one.
As output you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. 
The output, for every product, should be in the following format:
{productName} -> {productLowestPrice} ({townName})
The order of output is – order of entrance. See the examples for more info.
 */

"use strict";

function lowestPrices(strArr) {
    let marketPrices = new Map();

    for (let row of strArr) {
        let [town, product, price] = row.split(/\s\|\s/);

        if (!marketPrices.has(product)) {
            marketPrices.set(product, new Map());
            marketPrices.get(product).set(town, Number(price));
        }

        for (let [product, towns] of marketPrices) {
            let minPrice = Number.MAX_VALUE;
            let minPriceTown = 0;

            for (let [town, price] of towns) {
                if (price < minPrice) {
                    minPrice = price;
                    minPriceTown = town;
                }
            }
            console.log(`${product} -> ${minPrice} (${minPriceTown})`);
        }
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);