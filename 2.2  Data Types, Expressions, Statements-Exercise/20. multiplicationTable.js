/*
Write a JS function to print a math multiplication table of size n, formatted as HTML table.
The input comes as a single number n (0 < n < 100).
The output consists of n+3 text lines like shown below.
 */

"use strict";

function multiplication(n) {
    let html = '<table border="1">\n';
    html += '<tr><th>x</th>';

    for (let i = 1; i <= n; i++){
        html += `<th>${i}</th>`;
    }

    html += '</tr>\n';

    for (let i = 1; i <= n; i++) {
        html += '<tr>';
        html += `<th>${i}</th>`;

        for (let j = 1; j <= n; j++) {
            html += `<td>${i * j}</td>`;
        }

        html += '</tr>\n';
    }

    html += '</table>';
    console.log(html);
}
multiplication(5);