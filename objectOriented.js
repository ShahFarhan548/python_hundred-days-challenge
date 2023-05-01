// another style is Object Oriented Programming (OOP)
// in this style we group data and functions as properties and methods inside objects
var virtualPet ={ // object
    sleepy : true,
    nap : function(){
        this.sleepy = false
    }
}
// in OOP, methods update properties stored in the object instead of generating new return values
console.log(virtualpet.sleepy)// true
virtualPet.nap()
console.log(virtualPet.sleepy)//false

/* oop help us model real life objects, it works best when the grouping 
of properties and data in an object makes logical sense meaning
the properties and methods "belongs together" */
