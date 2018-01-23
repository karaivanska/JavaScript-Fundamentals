/*
Note: this problem is for champions only!
Write a JS function calendar([day, month, year]) that returns a monthly calendar as HTML table (like in the examples below) by given day, month and year. Weeks start by “Sun” (Sunday) and end by “Sat” (Saturday).
The input comes as array of 3 numbers:
•	day (1 ≤ day ≤ 31)
•	month (1 ≤ month ≤ 12)
•	year (1900 ≤ year ≤ 2100)
The output should be an HTML table, holding the calendar rows and columns, like in the examples below. Display the weeks as table rows: <tr>…</tr>. Display the days as table cells: <td>…</td>. Display the days of the previous month with CSS class “prev-month”, the days of the next month with CSS class “next-month” and the current day with CSS class “today”. See the examples below.
 */

"use strict";

function calendar([day, month, year]) {
    let html = '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    let inputDate = new Date(year, month - 1, day);
    let calendarDate = new Date(inputDate);
    calendarDate.setDate(1);
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), (calendarDate.getDate() - calendarDate.getDay()));
    for (let r = 0; r < 6; r++) {   // can't be more than 6 weeks
        if ((calendarDate.getMonth() !== inputDate.getMonth()) && calendarDate.getTime() > inputDate.getTime()) {
            continue;
        }
        else {
            html += (r === 0) ? '  <tr>' : '<tr>';
        }
        for (let c = 0; c < 7; c++) {
            if (calendarDate.getTime() === inputDate.getTime()) {
                html += '<td class="today">' + calendarDate.getDate() + '</td>';
            }
            else if ((calendarDate.valueOf() < inputDate.valueOf()) && calendarDate.getMonth() !== inputDate.getMonth()) {
                html += '<td class="prev-month">' + calendarDate.getDate() + '</td>';
            }
            else if ((calendarDate.valueOf() > inputDate.valueOf()) && calendarDate.getMonth() !== inputDate.getMonth()) {
                html += '<td class="next-month">' + calendarDate.getDate() + '</td>';
            }
            else {
                html += '<td>' + calendarDate.getDate() + '</td>';
            }
            calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate()+1);
        }
        html += '</tr>\n';
    }

    html += '</table>';
    return html;

}

console.log(calendar([4, 9, 2016]));