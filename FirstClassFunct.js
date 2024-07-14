// javaScript functions are often called "first class citizens"
/* functions are just the values we can pass to the other functions
, save them in other variables and return from other functions*/
function addTwoNums(a,b){
    console.log(a)
    console.log(b)
    console.log(a + b);
}
function randomNo(){
    return Math.floor((Math.random()* 10) + 1)
}
function specificNo(){
    return 42;
}
var useRandom = true;
var getNumber;
if (useRandom){
    getNumber = randomNo;
}else{
    getNumber = specificNo;
}

console.log(randomNo());
addTwoNums(getNumber(),getNumber())