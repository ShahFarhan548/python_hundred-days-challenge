//Arrow functions are welcomed at some instances for their shorter version
const a = ["hydrogen","Helium", "Lithium","Beryllium"];
// .map function in js is a build in function and is used to itterate over each element in the array and return the required output
const a2 = a.map(function(s){
    return s.length;
});

console.log(a2);
// shorter version of the above code 
const a3 = a.map((s)=> s.length);
console.log(a3);