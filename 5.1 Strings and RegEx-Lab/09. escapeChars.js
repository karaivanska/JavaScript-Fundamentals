/*
You will be given a list of strings, containing user-submitted data. Write a JS function that prints an HTML list from the data. The strings, however, may contain special HTML characters, which is an oft-used method for injection attacks. To prevent unwanted behavior or harmful content, all special characters need to be replaced with their encoded counterparts – they will look the same to the user, but will not pose a security risk. Use the following table to compose your function:
Raw	Encoded
<	&lt;
>	&gt;
&	&amp;
"	&quot;
Use the provided HTML template to visually test your code – if you don’t escape the control characters, formatted HTML will show up. Don’t care how the HTML template works. Your job is to write the JS escaping function only.
The input comes as array of string elements.
The output is the return value of your function. Compose the list in a string and return it. See the examples for formatting details.
 */

"use strict";

function escaping(arr) {

    let result = '<ul>\n';
    for(let str of arr){
        result += '  <li>' + esc(str) + '</li>\n' ;
    }
    result += '</ul>\n';

    function esc(str){
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&alt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/&/g, '&amp');
    }

    console.log(result);
}

escaping(['<b>unescaped text</b>', 'normal text']);