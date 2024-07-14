function Icecream(flavor){
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`the  ${this.flavor} icecream has melted`);
    }
}

// building instances to the object icecream type 
// new key word is used for creating the instances
let bananaIcecream = new Icecream('banana');
let strawberyIcecream = new Icecream('strawbery');
console.log(bananaIcecream);
console.log(strawberyIcecream);

// the most common use of new is to use it with one of the built in object types
/*
some times it is not the best approach to use constructors for the built in objects
this is especially true for the object constructors of the primitive types 
namely :
string 
Number
Boolean
*/
let apple = new string ('apple');
// apple is the onject of type of string
apple;
let pear  = "pear";
// here the pear is the string literal , and is more perormant than the apple which is object
pear;
// each object in js is unique therefore we cant compare a string object to the other
// new String ('plum') != new String ('plum')  >> here it compares the object location
// where as the "plum " === "plum "

