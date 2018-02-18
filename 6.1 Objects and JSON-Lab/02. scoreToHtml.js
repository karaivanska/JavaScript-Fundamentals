/*
You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied objects. The table should have 2 columns "name" and "score", each object in the array will also have these keys.
Any text elements must also be escaped in order to ensure no dangerous code can be passed.
You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.
The input comes as a single string argument – the array of objects as a JSON.
The output should be printed on the console – a table with 2 columns - "name" and "score", containing the values from the objects as rows.
 */

"use strict";

function scoreToHtml(json){
   let html = '<table>\n';
   html += '  <tr><th>name</th><th>score</th></tr>\n';

   let scores = JSON.parse(json);

    for (let score of scores) {
        html += '  <tr>';
        html += `<td>${htmlEscape(score.name)}</td>`;
        html += `<td>${Number(score.score)}</td>`;
        html += '</tr>\n';
    }

   html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/["&'<>]/g, ch => map[ch]);
    }
}
scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');