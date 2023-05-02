// another concept of Functional Programming(FP) is Pure and impure functions 
// the pure function returns the exact same results as long as its given the same values
// another rule for purity is that it shall not have any side effects 
//side effect(any instance where a function makes change outside itself)
// example is Math.random()... since the value cant be reliably repeated
function addTwoNums(a,b){
    console.log(a+b)
    // the output wont change until the values passed are changed 
    // no self changes by the function
}
addTwoNums(5,6);// always return 6