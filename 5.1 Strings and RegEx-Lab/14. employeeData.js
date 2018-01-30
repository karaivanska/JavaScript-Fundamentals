/*
Write a JS function that validates employee data, and stores it if it is valid. The employee data consists of 3 elements – employee name, employee salary and employee position.
The input comes as an array of strings. Each element represents input employee data. You should capture only the valid from them. The input will have the following format:
{employeeName} - {employeeSalary} - {employeePosition}
The Employee name will be a string, which can contain only English alphabet letters and must start with a capital. The Employee salary should be a VALID number. The employee position can contain English alphabet letters, digits, dashes, and can consist of several words. Any input that does NOT follow the specified above rules, is to be treated as invalid, and is to be ignored.
The output should be printed on the console. For every valid employee data found, you should print each of its elements. Check the examples.
 */

"use strict";

function employee(arr){
    let regex = /([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([\w-\s]+)/g;
    let match = regex.exec(arr);

    while(match){
        console.log(`Name: ${match[1]}`);
        console.log(`Position: ${match[3]}`);
        console.log(`Salary: ${match[2]}`);
        match = regex.exec(arr);
    }
}
employee(['Jonathan - 2000 - Manager',
          'Peter- 1000- Chuck',
          'George - 1000 - Team Leader']);