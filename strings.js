// this tutorial is all about the strings 
// in this main operations on strings are performed

var greet = 'hello';
var next = 'world';
// concatenation of the variables
console.log(greet + next)
console.log(greet.concat(next));
//length of a string 
console.log (greet.length);
//to find character at index
console.log (greet.charAt(2));
// joining two or more strings
console.log('hi '.concat('this ').concat('is me'));
//to return the index of a letter(the first in the string)
console.log (greet.indexOf('o'));
// to return the last match
console.log (greet.lastIndexOf('l'));
//else the simple indexof returns the value
console.log (greet.indexOf('l'));
// choping a string into an arry of sub strings
console.log('holalaholaalaonashaoab'.split('o'));
//converting to upper and lowercase 
console.log(greet.toUpperCase())
console.log(greet.toLowerCase());


