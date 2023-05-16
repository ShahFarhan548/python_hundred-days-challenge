// working with sets in js
// to build a new set , we can use Set() constructor
// new Set(); 
// set constructor, can accept array 
//an use it quickly to filter the unique elements 
let repetitiveElements = ["apple", "banana", "pineApple", "apple", "pineApple", "banana"];
let uniqueElements = new Set(repetitiveElements);
console.log (uniqueElements);