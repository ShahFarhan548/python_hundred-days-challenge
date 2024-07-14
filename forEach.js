//ForEach function.
// declaring an array
const fruits =['mango', 'apple', 'banana','pineApple'];
// function that will be passed to the forEach function as an argument
function appendIndex(fruit, index)
{
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);
/* For each function takes a function as an argument that further has two perimeters 
the first one is the items of the array and the second is the index of the current array
*/