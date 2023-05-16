// // working with the rest operator 
// const top7=
// [
//     "karachi ",
//     "islamabad",
//     "lahore",
//     "multan",
//     "quetta",
//     "peshawar",
//     "muzafarabad"
// ];
// const [] =  top7;
// const [first, second, third, ...secondVisit] = top7;
// // console.log(secondVisit);
// console.log(top7);
// rest Operator can also be used for the functions
function addTaxToPrice(taxRate, ...itemsBought)
{
    // here the map function is used to iterate over each item of the array for the function directions to be performed
    return itemsBought.map(item => taxRate *item)
}
// first argument is the text rate and other are the items bought
let shoppingCart = addTaxToPrice(1.1,46,89,79);

console.log(shoppingCart);

// uses of rest operator
/*can push an array to other without use of the push()
  can be used to concatenate two arrays
  can convert a string into an array
  can copy either an object or array into another 
  */ 
