/*
Write a JS function that hides essential client data from secret documents that went public. You have to hide people’s names, phone numbers, ids and secret base names.
•	The names of the clients will be preceded by a single asterisk (“*”), they will always be exactly one word, they will contain only English alphabet letters, they will start with a capital letter and they will always be followed by either a space, a tabulation or the end of the string. Anything else is NOT to be considered as a name.

•	The phone numbers of the clients will be preceded by a single plus sign (“+”) and will consist of exactly 10 symbols. The phone numbers can consist only of digits and dashes and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as a phone number.

•	The IDs of the clients will be preceded by a single exclamation mark (“!”). The IDs of the clients will consist only of Lowercase and Uppercase English alphabet letters and digits and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as an ID.

•	The names of the secret bases will be preceded by a single underscore (“_”) and will consist only of Uppercase and Lowercase English alphabet letters and digits and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as a secret base name.
 */

//"use strict";

function hideData(arr){
    let name = /\b\*[A-Z][a-z]+/g;
    let phone = /^(\+[\d-]{10}\s)$/g;
    let id = /^(![a-zA-Z0-9]+\s)$/g;
    let secretBases = /^(_[A-Za-z0-9 ]+)$/g;

    for (let i = 0; i < arr.length; i++){
       let currentArr = arr[i].split(' ');

       for (let k = 0; k < currentArr.length; k++){
          let str = currentArr[k];

          if(str.match(name)){
              str = str.replace(name, '|'.repeat(str.length));
          } else if(str.match(phone)){
              str = str.replace(phone, '|'.repeat(str.length));
          }

           console.log(str.join('\n'));
       }
    }
}
hideData(['Agent *Ivankov was in the room when it all happened.',
          'The person in the room was heavily armed.',
          'Agent *Ivankov had to act quick in order.',
          'He picked up his phone and called some unknown number.',
          'I think it was +555-49-796',
          'I can\'t really remember...',
          'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
          'Then after that he disappeared from my sight.',
          'As if he vanished in the shadows.',
            'A moment, shorter than a second, later, I saw the person flying off the top floor.',
          'I really don\'t know what happened there.',
          'This is all I saw, that night.',
          'I cannot explain it myself...']);