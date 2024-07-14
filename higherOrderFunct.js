// Higher order functions

// in the previous and this task i see the use of variable like pointers in js as 
// we store a function name in a variable and then while using that variable we use the function
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
    // variable saves the name of the function
    getNumber = randomNo;
}else{
    // variable saves the name of the function
    getNumber = specificNo;
}

console.log(randomNo());
//calling the function with the variables as they store the functions since use these ()
addTwoNums(getNumber(),getNumber())
/*it has either one or the both characteristics
1 => it accepts other functions as arguments
2 => it returns function when invoked
*/
function addTwoNums(getNumber1, getNumber2){
    // while calling this function we pass the functions as arguments to this
    console.log(getNumber1() + getNumber2())
}
// calling the function
addTwoNums(specificNo,specificNo)
// here while calling the function we pass the function name but it is called by the function () in the declared function console
addTwoNums(randomNo,randomNo)