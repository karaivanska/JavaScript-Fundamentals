/*
Write a JS program that receives data about a quiz and prints it formatted as an XML document. The data comes as pairs of question-answer entries. The format of the document should be as follows:
The input comes as an array of string elements.
The output should be printed on the console.
 */

"use strict";

function templateFormat(arr){
   let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
   xml += '<quiz>\n';

   for (let i = 0; i < arr.length; i++){
       if(i % 2 === 0){
           xml += '  <question>\n';
           xml += `    ${arr[i]}\n`;
           xml += '  </question>\n';
       } else if (i % 2 !== 0){
           xml += '  <answer>\n';
           xml += `    ${arr[i]}\n`;
           xml += '  </answer>\n';
       }
   }

   xml += '</quiz>';
    console.log(xml);
}
templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
